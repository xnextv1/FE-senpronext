import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const articles = [
  {
    id: "1",
    title: "How to Set Up Your First Chatbot",
    description: "Learn how to create and deploy your first chatbot using Next.js and ShadCN.",
    category: "Guide",
    image: "https://res.cloudinary.com/djfue1ffl/image/upload/v1744032826/gkiver7ull6mvkwegeaj.webp",
  },
  {
    id: "2",
    title: "Understanding Escalation Paths",
    description: "Know when and how to escalate a customer issue properly.",
    category: "Resources",
    image: "https://res.cloudinary.com/djfue1ffl/image/upload/v1744032826/gkiver7ull6mvkwegeaj.webp",
  },
];

export default function ArticleCards() {
  return (
    <div className="grid gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {articles.map((article) => (
        <Card key={article.id} className="flex flex-col justify-between h-full shadow-md hover:shadow-xl transition rounded-xl border border-gray-200">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">{article.title}</CardTitle>
              <Badge>{article.category}</Badge>
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
              {article.description}
            </p>

            <Link href={`/resources/${article.id}`}>
              <Button variant="outline" className="w-full">Read More</Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
