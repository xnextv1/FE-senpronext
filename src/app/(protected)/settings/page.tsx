'use client'

import ProfileCard from "./components/profileCard";

export default function Page(){
    return (
        <div className="flex min-h-svh flex-col items-center p-6 md:p-10">
            <div className="w-full max-w-4xl">
                <ProfileCard />
            </div>
        </div>
    );
}