

export interface Article {
    image: string;
    title: string;
    article_date: string;
    article_rating_count: number;
    article_content: string;
    article_id: number;
    article_rating: number;
}

export interface ArticlePageResponse {
    total: number;
    total_pages: number;
    data: Article[];
}

export default async function getPaginatedArticles(){
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/articles`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    if (!response.ok) {
        throw new Error('Failed to fetch articles');
    }
    const data = await response.json();
    return data;

}