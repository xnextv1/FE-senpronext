export default async function decodeAuth() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/me`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('user', JSON.stringify(data));
            return data;
        } else {
            throw new Error('Failed to decode token');
        }
    } catch (error) {
        console.error('Error decoding token:', error);
    }
    return null;
}