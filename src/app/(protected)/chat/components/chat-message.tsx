import { ScrollArea } from "@/components/ui/scroll-area";
import ChatBubble from "./chat-bubble";

export default function ChatMessage() {
  return (
    <>
      <ScrollArea className="sm:row-span-4 md:row-span-10 border-r border-gray-200 px-4 h-[740px] overflow-clip bg-gray-50 py-1">
        {Array.from({ length: 1 }).map((_, i) => (
          <ChatBubble key={i} />
        ))
      }
      </ScrollArea>
     
    </>
  );
}