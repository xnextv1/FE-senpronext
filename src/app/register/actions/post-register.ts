import { redirect } from "next/navigation";

export default async function Register(username:string, userType:string, email:string, password:string){
    const response = await fetch('http://localhost:8000/auth/register',{
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, userType ,email, password })
    })

    if(response.ok){
        const data = await response.json();
        console.log(data);
        redirect('/home');
    }
}   