import next from "next";
import { redirect } from "next/navigation";

export default async function Register(email:string, password:string){
    const response = await fetch('http://localhost:8000/auth/register',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
    })

    if(response.ok){
        const data = await response.json();
        console.log(data);
        document.cookie = `token=${data.access_token}`;
        redirect('/home');
    }
}