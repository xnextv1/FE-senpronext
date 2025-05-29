export interface Article {
    image: string;
    title: string;
    article_date: string;
    article_rating_count: number;
    article_content: string;
    article_id: number;
    article_rating: number;
}

export default async function getArticle(id: number): Promise<{ data: Article | null }> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/articles/${id}`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        return { data: null }; // fail gracefully
    }

    const data = await response.json();
    return { data };
}
