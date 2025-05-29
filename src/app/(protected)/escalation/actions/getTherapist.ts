export default async function getTherapist() {
    try {
        const result = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/appointment/therapist`,
            {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        if (result.ok) {
            const data = await result.json();
            return data;
        }

        throw new Error('Failed to fetch therapist');
    } catch (error) {
        console.error('Error fetching therapist:', error);
        return null;
    }
}