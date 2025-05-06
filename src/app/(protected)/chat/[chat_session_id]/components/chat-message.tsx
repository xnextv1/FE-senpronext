import { ScrollArea } from "@/components/ui/scroll-area";
import ChatBubble from "./chat-bubble";
import { ChatMessageType } from "./chat-main";


interface ChatMessageProps {
  chat_messages: ChatMessageType[] | null;
}



export default function ChatMessage({chat_messages}:ChatMessageProps) {
  const chat: ChatMessageType[] | null = chat_messages;


  return (
    <>
      <ScrollArea className="sm:row-span-4 md:row-span-10 border-r border-gray-200 px-4 h-[740px] overflow-clip bg-gray-50 py-1">
        
      <div>
        {chat && chat.map((message, index) => (
          <ChatBubble key={index} isSender={message.is_ai} message={message.chat_message} />
        ))}
      </div>

      </ScrollArea>
     
    </>
  );
}