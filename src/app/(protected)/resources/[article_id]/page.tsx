import Image from "next/image";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import getArticle from "./actions/getArticle";

type Params = Promise<{ article_id: string }>;

export default async function Page({ params }: { params: Params }) {
  const { article_id } = await params;
  const articleId = Number(article_id);

  if (isNaN(articleId)) {
    // Return 404 page or similar fallback
    return <div>Invalid article ID</div>;
  }

  const result = await getArticle(articleId);

  if (!result.data) {
    // Return 404 page or fallback
    return <div>Article not found</div>;
  }

  const article = result.data;

  return (
    <Card className="mx-24 mt-8">
      <CardTitle className="self-center">{article.title}</CardTitle>
      <CardContent className="flex flex-col items-center">
        <div className="flex flex-col gap-4">
          <Image
            className="self-center"
            src={article.image}
            alt={article.title}
            width={600}
            height={100}
          />
          <p>{article.article_content}</p>
        </div>
      </CardContent>
    </Card>
  );
}
