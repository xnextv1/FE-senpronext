export async function updateProfile(image: File | null, description: string) {
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
    const formData = new FormData();
    formData.append('user_id', user_id);
    if(image){
        formData.append('img', image);
    }
    formData.append('description', description);

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/profile/update`, {
            method: 'PATCH',
            credentials: 'include',
            body: formData,

        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error('Failed to fetch profile');
        }
    } catch (error) {
        console.error('Error fetching profile:', error);
    }
    return null;
}