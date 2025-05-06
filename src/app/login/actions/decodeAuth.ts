export default async function decodeAuth() {
    try {
        const response = await fetch('http://localhost:8000/auth/me', {
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