'use client'

import { Card, CardContent } from "@/components/ui/card"
import { useState, useEffect } from "react";
import getChatRecap from "../../actions/get-emotion-recap";
import NewChatDialog from "./new-dialog";


export default function RecapCard(){
    const [recap, setRecap] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRecap = async () => {
            const data = await getChatRecap();
            if (data) {
                setRecap(data.recap);
            } else {
                setRecap("No recap available.");
            }
            setLoading(false);
        };
        fetchRecap();
    }, []);
    return(
        <Card>
        <CardContent className="">
            <h1 className="text-2xl font-bold">Emotional Recap</h1>
            {loading ? (
                <div className="animate-pulse">
                    <p className="text-gray-500">Loading recap...</p>
                </div>
            ) : (
                <p className="text-gray-500">{recap}</p>
            )}
            <NewChatDialog />
        </CardContent>
   </Card>
    )
}