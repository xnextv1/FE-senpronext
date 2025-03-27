import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function ChatBubble(){
    return(
        <>
        <div className="flex items-start mb-4">
          <Avatar className="flex-shrink-0">
            <AvatarFallback>Bot</AvatarFallback>
          </Avatar>
          <div className="ml-3 bg-gray-200 p-3 rounded-md max-w-md">
            <p className="text-sm">
            Halo apakah ada yang bisa saya bantu?
            </p>
            <span className="text-xs text-gray-500 block">12.54</span>
          </div>
        </div>



        <div className="flex items-start justify-end mb-4">
        <div className="bg-blue-500 text-white p-3 rounded-md max-w-md">
          <p className="text-sm">
            Halo, saya ingin bercerita tentang ini
          </p>
          <span className="text-xs text-blue-200 block text-right">12.54</span>
        </div>
      </div>

      
      </>
    )
}