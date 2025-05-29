'use client'
import getPaginatedArticles from "./actions/getArticles";
import CardDisplay from "./components/card";
import Searchbar from "./components/searchbar";
import { useEffect, useState } from "react";

export default function ResourcesPage(){
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await getPaginatedArticles();
                setArticles(response.data);
            } catch (error) {
                console.error("Failed to fetch articles:", error);
            }
        };
        fetchArticles();
    }
    , []);

    return (
        <div className="flex flex-col items-center h-screen">
            <div className="flex flex-col items-center w-1/2 p-4 mt-10">     
                <Searchbar />
            </div>
            <div className="w-9/10 grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                {articles.map((article, index) => (
                    <CardDisplay key={index} article={article} />
                ))}
            </div>
        </div>
    );
        
}