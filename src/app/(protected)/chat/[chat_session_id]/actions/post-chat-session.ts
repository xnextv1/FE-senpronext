

export default async function postChatSession(title: string) {
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
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/chat`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_title: title,
                user_id: user_id,
            }),
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