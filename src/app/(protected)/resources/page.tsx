import CardDisplay from "./components/card";
import Searchbar from "./components/searchbar";

export default function ResourcesPage(){
    return (
        <div className="flex flex-col items-center h-screen">
            <div className="flex flex-col items-center w-1/2 p-4 mt-10">     
                <Searchbar />
            </div>
            <div className="flex flex-col w-9/10">
                <CardDisplay />
            </div>
        </div>
    );
        
}