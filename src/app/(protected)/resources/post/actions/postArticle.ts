export async function postArticles(title:string, content:string, image:File){
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('img', image);

    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/articles`, {
        method: 'POST',
        credentials: 'include',
        body: formData,
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(
            `Failed to post article: ${response.status} ${response.statusText}${
                errorData ? ` - ${JSON.stringify(errorData)}` : ''
            }`
        );
    }

    const data = await response.json();
    return data;

}