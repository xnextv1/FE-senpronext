'use client';

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Paperclip, X, Plus } from "lucide-react";
import ChatMessage from "./chat-message";
import { useState, useRef } from "react";
import NewChatDialog from "./new-dialog";

export default function ChatMain() {
  const [message, setMessage] = useState("");

 

  const handleSend = () => {
    console.log('Sending:', { message });
    setMessage("");
  };




  return (
    <div className="">

      {/* Messages Area */}
      <div className="overflow-y-auto">
        <ChatMessage />
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
