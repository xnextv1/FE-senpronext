export default async function connectWebsocket(chatSessionId:string){
    const chatSession = chatSessionId
    try{
        const client = new WebSocket(`${process.env.NEXT_PUBLIC_BACKEND_URL}/chat/ws/${chatSession}`)
        return client;
    } catch (error) {
        console.error('Error fetching chat:', error);
    }
    return null;
}