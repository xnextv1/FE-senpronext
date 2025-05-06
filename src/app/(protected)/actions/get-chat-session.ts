export default async function getChatSession() {
    const user = localStorage.getItem('user');
    if (!user) {
        console.error('User not found in local storage');
        return null;
    }
    const userData = JSON.parse(user);
    const user_id = userData.user_id;
    if (!user_id) {
        console.error('User ID not found in user data');
        return null;
    }



    try {
        const response = await fetch(`http://localhost:8000/chat/profile/${user_id}`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error('Failed to fetch chat session');
        }
    } catch (error) {
        console.error('Error fetching chat session:', error);
    }
    return null;
}