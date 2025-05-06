import { ScrollArea } from "@/components/ui/scroll-area";
import ChatBubble from "./chat-bubble";

export default function ChatMessage() {
  return (
    <>
      <ScrollArea className="sm:row-span-4 md:row-span-10 border-r border-gray-200 px-4 h-[740px] overflow-clip bg-gray-50 py-1">
        
      <div>
        <ChatBubble isSender={true} message="Halo apakah ada yang bisa saya bantu?" />
        <ChatBubble isSender={false} message="Halo, saya ingin bercerita tentang ini" />
        <ChatBubble isSender={true} message="Tentu, silakan ceritakan" />
        <ChatBubble isSender={false} message="Saya merasa sangat tertekan akhir-akhir ini" />
        <ChatBubble isSender={true} message="Saya mengerti, bisa jadi sangat sulit" />
        <ChatBubble isSender={false} message="Ya, saya merasa sendirian" />
        <ChatBubble isSender={true} message="Saya di sini untuk mendengarkan" />
        <ChatBubble isSender={false} message="Terima kasih, itu sangat berarti bagi saya" />
        <ChatBubble isSender={true} message="Tentu, silakan ceritakan lebih lanjut" />
        <ChatBubble isSender={false} message="Saya merasa sangat tertinggal" />
      </div>

      </ScrollArea>
     
    </>
  );
}