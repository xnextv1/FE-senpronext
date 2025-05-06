export default async function getChatHistory(){
    try{
    const response = await fetch('http://localhost:8000/chat/0f997c2c-772c-4804-8eb5-7845767d896c',{
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
    })

    if(response.ok){
        const data = response.json();
        return data;
    } else {
        throw new Error('Failed to fetch chat history');
    }
    }  catch (error) {
    console.error('Error fetching chat history:', error);
    }
    return null;
}