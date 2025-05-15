import CardDisplay from "./components/card";

export default function ResourcesPage(){
    return (
        <div className="flex flex-col items-center h-screen">
        
            <div className="flex flex-col w-9/10">
            <h1 className="font-bold text-2xl self-start mt-2">Escalate to Therapist</h1>
             <hr className=" mt-4 mb-4 border-gray-300" />
                <CardDisplay />
            </div>
        </div>
    );
        
}