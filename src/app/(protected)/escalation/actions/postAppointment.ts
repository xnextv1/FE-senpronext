export async function postAppointment(therapist_id: number, dateTime: string, description: string, title: string) {
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
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/appointment/`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                patient_id: user_id,
                therapist_id: therapist_id,
                appointment_time: dateTime,
                description: description,
                title: title
             }),
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