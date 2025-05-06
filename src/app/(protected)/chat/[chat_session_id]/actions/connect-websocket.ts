export default async function connectWebsocket(chatSessionId:string){
    const chatSession = chatSessionId
    try{
        const client = new WebSocket(`http://localhost:8000/chat/ws/${chatSession}`)
        return client;
    } catch (error) {
        console.error('Error fetching chat:', error);
    }
    return null;
}