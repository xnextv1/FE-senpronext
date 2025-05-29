export async function getAppointment() {
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
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/appointment/patient/schedule?user_id=${user_id}`, {
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
            throw new Error('Failed to post appointment');
        }
    } catch (error) {
        console.error('Error posting appointment:', error);
    }
    return null;
}