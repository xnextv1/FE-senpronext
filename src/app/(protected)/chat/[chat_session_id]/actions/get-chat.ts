import 'dotenv/config';

export default async function getChat(chatSessionId:string){
    const chatSession = chatSessionId
    try{
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/chat/${chatSession}`,{
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        if(response.ok){
            const data = await response.json();
            return data;
        }
        else {
            throw new Error('Failed to fetch chat');
        }
    } catch (error) {
        console.error('Error fetching chat:', error);
    }
    return null;
}