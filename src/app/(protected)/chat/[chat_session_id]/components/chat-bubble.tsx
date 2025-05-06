import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export interface ChatBubbleProps {
    isSender: boolean;
    message: string;
}


export default function ChatBubble({isSender, message}: ChatBubbleProps) {

    if (isSender) {
        return (
          <div className="flex items-start mb-4">
          <div className="ml-3 bg-gray-200 p-3 rounded-md max-w-md">
            <p className="text-sm">
              {message}
            </p>
          </div>
        </div>
        )
    } else {
      return(
        <div className="flex items-start justify-end mb-4">
        <div className="bg-blue-500 text-white p-3 rounded-md max-w-md">
          <p className="text-sm">
            {message}
          </p>
        </div>
      </div>
      )
    }
}