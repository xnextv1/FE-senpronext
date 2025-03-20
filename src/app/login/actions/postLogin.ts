import next from "next";
import { redirect } from "next/navigation";

export default async function Login(username:string, password:string){
    const response = await fetch('http://localhost:8000/auth/login',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password })
    })

    if(response.ok){
        const data = await response.json();
        console.log(data);
        document.cookie = `token=${data.access_token}`;
        redirect('/home');
    }
}