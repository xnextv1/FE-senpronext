'use client'
import getTherapist from "./actions/getTherapist";
import CardDisplay from "./components/card";
import { useEffect,useState } from "react";

export default function ResourcesPage(){
    const [therapists, setTherapists] = useState([]);

    useEffect(() => {
        const fetchTherapists = async () => {
            const result = await getTherapist();
            if (result) {
                setTherapists(result);
            }
        };
        fetchTherapists();
    }, []);


    return (
        <div className="flex flex-col items-center h-screen">
             <div className="w-9/10">
            <h1 className="font-bold text-2xl self-start mt-2">Escalate to Therapist</h1>
             <hr className=" mt-4 mb-4 border-gray-300" />
             {therapists.map((therapist, index) => (
                    <CardDisplay key={index} therapist={therapist} index={index+1} />
                ))}
            </div>
        </div>
    );
}

