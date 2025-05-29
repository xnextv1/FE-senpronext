import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

  export interface ArticleProps {
    image: string;
    title: string;
    article_date: string;
    article_rating_count: number;
    article_content: string;
    article_id: number;
    article_rating: number;
}


export default function ArticleCard({ article }: { article: ArticleProps }) {
  return (
    <Card className="flex flex-col justify-between h-full shadow-md hover:shadow-xl transition rounded-xl border border-gray-200 ">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{article.title}</CardTitle>
        </div>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        {article.image && (
          <Image
            src={article.image}
            alt={article.title}
            width={300}
            height={150}
            className="rounded-md object-cover"
          />
        )}

        <p className="text-sm text-muted-foreground line-clamp-2">
          {article.article_content}
        </p>

        <Link href={`/resources/${article.article_id}`}>
          <Button variant="outline" className="w-full">Read More</Button>
        </Link>
      </CardContent>
    </Card>
  );
}
