export interface EmotionRecap {
    recap: string
}

export default async function getChatRecap() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/me/recap`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const data:EmotionRecap = await response.json();
            return data;
        } else {
            throw new Error('Failed to fetch chart data');
        }
    } catch (error) {
        console.error('Error fetching chart data:', error);
    }
    return null;
}