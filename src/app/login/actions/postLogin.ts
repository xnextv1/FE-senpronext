import decodeAuth from "./decodeAuth";

export default async function Login(email:string, password:string):Promise<Response | void> {
    try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,{
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
    })

    if (response.ok) {
        const data = await response.json();
        console.log(data);
        
        decodeAuth();
        return response;
    } else {
        const errorData = await response.json();
        console.error('Login failed:', errorData);
        // Handle login failure (e.g., show error message)
    }
    } catch (error) {
        console.log(error);
    }
}