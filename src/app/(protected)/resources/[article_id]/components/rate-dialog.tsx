'use client'
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Star } from 'lucide-react';

interface RatingDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

export default function RatingDialog({ open, onClose, onSubmit }: RatingDialogProps) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);
  const [feedback, setFeedback] = useState('');

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Rate Your Experience</DialogTitle>
        </DialogHeader>

        <div className="flex space-x-1 my-4 justify-center">
          {[1, 2, 3, 4, 5].map((value) => (
            <Star
              key={value}
              className={`w-6 h-6 cursor-pointer transition-colors duration-200 ${
                (hoveredRating ?? rating) >= value ? 'text-yellow-500' : 'text-gray-400'
              }`}
              onClick={() => setRating(value)}
              onMouseEnter={() => setHoveredRating(value)}
              onMouseLeave={() => setHoveredRating(null)}
              fill={(hoveredRating ?? rating) >= value ? 'currentColor' : 'none'}
            />
          ))}
        </div>

        <textarea
          className="w-full p-2 border rounded-md"
          rows={3}
          placeholder="Additional feedback (optional)"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />

        <div className="mt-4 flex justify-end space-x-2">
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button
            onClick={() => {
              onSubmit();
              onClose();
              setRating(0);
              setFeedback('');
            }}
            disabled={rating === 0}
          >
            Submit
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
