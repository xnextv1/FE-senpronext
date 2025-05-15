"use client";
import { 
    Command, 
    CommandInput,
    CommandList,
    CommandGroup,
    CommandItem
} from "@/components/ui/command";

import { useEffect, useState } from "react";
import getSuggestion, { ArticleSearchResponse } from "../actions/getSuggestions";

export default function Searchbar(){
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [suggestions, setSuggestions] = useState<ArticleSearchResponse | null>(null);

    useEffect(() => {
        if(searchTerm.length > 0){
        const fetchData = async () => {
            const data = await getSuggestion(searchTerm);
            setSuggestions(data);
        };
        fetchData();
    } else {
        setSuggestions(null);
    }
    }, [searchTerm]);

    return(
        <Command className="border">
            <CommandInput placeholder="Type a command or search..." value={searchTerm} onValueChange={(value) => {setSearchTerm(value)}}/>
            {suggestions && suggestions.data && suggestions.data.length > 0 && (
                <CommandList>
                    <CommandGroup>
                        {suggestions.data.map((suggestion) => (
                            <CommandItem key={suggestion.id}>
                                {suggestion.title}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </CommandList>
            )}
        </Command>
    )
}