export interface ArticleSearchResponse {
    total: number;
    data: ArticleSearch[];
}

export interface ArticleSearch {
    title: string,
    article_id: number;
}

export default async function getSuggestion(searchTerm: string) {
    const url = new URL(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/articles/search/${searchTerm}`)

    const response = await fetch(url, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(
            `Failed to fetch articles: ${response.status} ${response.statusText}${
                errorData ? ` - ${JSON.stringify(errorData)}` : ''
            }`
        );
    }
    const data:ArticleSearchResponse = await response.json();
    return data;
}