"use client";
import { 
  Command, 
  CommandInput,
  CommandList,
  CommandGroup,
  CommandItem
} from "@/components/ui/command";

import { useEffect, useState } from "react";
import getSuggestion, { ArticleSearchResponse, ArticleSearch } from "../actions/getSuggestions";
import { useRouter } from "next/navigation";

export default function Searchbar() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [suggestions, setSuggestions] = useState<ArticleSearchResponse | null>(null);

  const router = useRouter();

  useEffect(() => {
    if (searchTerm.length > 0) {
      const fetchData = async () => {
        const result = await getSuggestion(searchTerm);
        setSuggestions(result);
      };
      fetchData();
    } else {
      setSuggestions(null);
    }
  }, [searchTerm]);

  const handleClick = (id: number) => {
    router.push(`/resources/${id}`);
    setSearchTerm("");  // Clear input and suggestions
  };

  return (
    <Command className="border">
      <CommandInput
        placeholder="Type a command or search..."
        value={searchTerm}
        onValueChange={(value) => setSearchTerm(value)}
      />
      {suggestions && suggestions.data && suggestions.data.length > 0 && (
        <CommandList>
          <CommandGroup>
            {suggestions.data.map((suggestion:ArticleSearch) => (
              <CommandItem
                key={suggestion.article_id}
                className="hover:cursor-pointer"
                onSelect={() => handleClick(suggestion.article_id)}  // Use onSelect if available
              >
                {suggestion.title}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      )}
    </Command>
  );
}
