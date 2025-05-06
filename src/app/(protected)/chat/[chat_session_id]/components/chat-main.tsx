'use client';

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Paperclip, X, Plus } from "lucide-react";
import ChatMessage from "./chat-message";
import { useState, useRef, useEffect } from "react";
import NewChatDialog from "./new-dialog";
import connectWebsocket from "../actions/connect-websocket";
import getChat from "../actions/get-chat";

export interface ChatMainProps {
  chatSessionId: string;
}

export interface ChatMessageType {
  chat_message: string;
  is_ai: boolean;
  chat_id: number;
  chat_session_id: string;
}


export default function ChatMain({ chatSessionId }: ChatMainProps) {
  const [message, setMessage] = useState("");
  const wsRef = useRef<WebSocket | null>(null); // 💡 Store WebSocket connection
  const [chat, setChat] = useState<ChatMessageType[] | null>(null);

  

  const handleSend = () => {
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      console.log('Sending:', message);
      wsRef.current.send(message);
      const newMessage: ChatMessageType = {
        chat_message: message,
        is_ai: false,
        chat_id: Math.floor(Math.random() * 1000), // Generate a random ID for the new message
        chat_session_id: chatSessionId,
      };
      setChat((prevChat) => {
        if (prevChat) {
          return [...prevChat, newMessage];
        } else {
          return [newMessage];
        }
      });
      setMessage("");
    } else {
      console.error("WebSocket is not connected");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getChat(chatSessionId);
      setChat(data);

    };
    fetchData();

    const initializeWebsocket = async (chatSessionId: string) => {
      const ws = await connectWebsocket(chatSessionId);
      if (!ws) {
        console.error("WebSocket connection failed");
        return;
      }

      wsRef.current = ws; // ✅ Store WebSocket for reuse

      ws.onmessage = (event: MessageEvent) => {
        console.log("Message: ", event.data);
        const newMessage: ChatMessageType = {
          chat_message: event.data,
          is_ai: true,
          chat_id: Math.floor(Math.random() * 1000), // Generate a random ID for the new message
          chat_session_id: chatSessionId,
        };
        setChat((prevChat) => {
          if (prevChat) {
            return [...prevChat, newMessage];
          } else {
            return [newMessage];
          }
        });
      };
      ws.onclose = () => {
        console.log("WebSocket connection closed");
      };
      ws.onerror = (error: Event) => {
        console.error("WebSocket error:", error);
      };
      ws.onopen = () => {
        console.log("WebSocket connection opened");
      };
    };

    initializeWebsocket(chatSessionId);

    return () => {
      if (wsRef.current) {
        wsRef.current.close();
      }
    };
  }, [chatSessionId]);

  return (
    <div className="">
      {/* Messages Area */}
      <div className="overflow-y-auto">
        <ChatMessage chat_messages={chat} />
      </div>

      {/* Input Area */}
      <div className="border bg-white p-4">
        <div className="flex items-center gap-2">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tulis pesan..."
            className="flex-1"
          />

          <Button 
            onClick={handleSend}
            disabled={!message.trim()}
          >
            Kirim
          </Button>
          <div>
            <NewChatDialog />
          </div>
        </div>
      </div>
    </div>
  );
}
