import { 
    Command, 
    CommandInput,
    CommandList,
    CommandEmpty,
    CommandGroup,
    CommandItem
} from "@/components/ui/command";

import { useEffect, useState } from "react";

export default function Searchbar(){
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [suggestions, setSuggestions] = useState<string[]>([]);

    useEffect(() => {
        // Fetch suggestions from an API or a static list
        const fetchSuggestions = async () => {
            // Simulating an API call
            const allSuggestions = ["Suggestion 1", "Suggestion 2", "Suggestion 3"];
            const filteredSuggestions = allSuggestions.filter(suggestion =>
                suggestion.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        };

        fetchSuggestions();
    }
    , [searchTerm]);

    return(
        <Command>
            <CommandInput placeholder="Type a command or search..." value={searchTerm} onValueChange={(value) => {setSearchTerm(value)}}/>
            <CommandList>
                <CommandEmpty>
                    No results found.
                </CommandEmpty>
                <CommandGroup heading="Suggestions">
                    {suggestions.map((suggestion) => (
                        <CommandItem key={suggestion}>
                            {suggestion}
                        </CommandItem>
                    ))}
                </CommandGroup>
            </CommandList>
        </Command>
    )
}