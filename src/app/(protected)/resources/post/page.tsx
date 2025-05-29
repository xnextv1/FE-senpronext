'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Loader2 } from 'lucide-react';
import { postArticles } from './actions/postArticle';

export default function PostArticlePage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async () => {
    if(image){
    setLoading(true);
    await postArticles(title, content, image);
    setLoading(false);
    } else {
      alert("Please upload an image.");
      return;
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <Card className="rounded-2xl shadow-md border border-gray-200 bg-white">
        <CardHeader className="pb-4">
          <CardTitle className="text-3xl font-bold text-gray-800"> New Article</CardTitle>
          <p className="text-sm text-muted-foreground">
            Fill in the details below to publish your article.
          </p>
        </CardHeader>
        <Separator />
        <CardContent className="grid gap-6 pt-6">
          {/* Title */}
          <div className="grid gap-1.5">
            <Label htmlFor="title" className="text-base">Title</Label>
            <Input
              id="title"
              placeholder="e.g., How to stay sane"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="rounded-lg text-base"
            />
          </div>

          {/* Content */}
          <div className="grid gap-1.5">
            <Label htmlFor="content" className="text-base">Content</Label>
            <Textarea
              id="content"
              placeholder="Write your article here..."
              rows={12}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="rounded-lg text-base resize-none"
            />
            <p className="text-xs text-muted-foreground">You can use plain text or basic formatting.</p>
          </div>

          {/* Image Upload */}
          <div className="grid gap-2">
            <Label htmlFor="image" className="text-base">Cover Image</Label>
            <Input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="cursor-pointer rounded-lg"
            />
            {previewUrl && (
              <div className="mt-2">
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="rounded-md border w-full max-h-[300px] object-cover shadow-sm"
                />
              </div>
            )}
          </div>

          {/* Submit */}
          <div className="pt-2">
            <Button
              onClick={handleSubmit}
              className="w-full py-6 text-lg rounded-xl font-semibold"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="animate-spin w-5 h-5" />
                  Publishing...
                </span>
              ) : (
                ' Publish Article'
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
