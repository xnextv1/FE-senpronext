"use client";
import ChatMain from "./components/chat-main";
import { useParams } from "next/navigation";


export default function Chat(){
    const chatSessionId = useParams().chat_session_id as string;
    return(
        <div>
            <ChatMain chatSessionId={chatSessionId}/>
        </div>
    )
}