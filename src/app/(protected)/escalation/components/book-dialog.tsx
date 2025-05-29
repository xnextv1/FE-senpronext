'use client';

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format, parse } from "date-fns";
import { useState } from "react";
import { postAppointment } from "../actions/postAppointment";

export interface BookDialogProps {
  therapist_id: number;
}


export default function BookDialog({ therapist_id }: BookDialogProps) {
  const [date, setDate] = useState<Date | undefined>();
  const [time, setTime] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleBooking = async () => {
    if (date && time && title && description) {
      const dateTimeString = `${format(date, "yyyy-MM-dd")} ${time}`; // e.g., "2025-06-01 10:30 AM"
      const parsedDate = parse(dateTimeString, "yyyy-MM-dd hh:mm a", new Date());
  
      // Send naive ISO string (no Z at the end)
      const naiveISOString = format(parsedDate, "yyyy-MM-dd'T'HH:mm:ss");
      // Call the API to post the appointment
      await postAppointment(therapist_id,naiveISOString, description, title);

      // Reset form
      setDate(undefined);
      setTime("");
      setTitle("");
      setDescription("");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full" variant="outline">
          Schedule Meeting
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Book This Therapist</DialogTitle>
          <DialogDescription>
            Pick a date and time to book a meeting with this therapist.
          </DialogDescription>
        </DialogHeader>

        {/* Title Input */}
        <div className="mt-4">
          <label className="block text-sm font-medium mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded-md px-3 py-2"
            placeholder="Enter a title"
          />
        </div>

        {/* Description Input */}
        <div className="mt-4">
          <label className="block text-sm font-medium mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border rounded-md px-3 py-2"
            placeholder="Enter a description"
            rows={3}
          />
        </div>

        {/* Date Picker */}
        <div className="mt-4">
          <Popover modal={true}>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full text-left">
                {date ? format(date, "PPP") : "Pick a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 z-50">
              <Calendar mode="single" selected={date} onSelect={setDate} />
            </PopoverContent>
          </Popover>
        </div>

        {/* Time Picker */}
        <div className="mt-4">
          <label className="block text-sm font-medium mb-2">Select a time</label>
          <Select value={time} onValueChange={setTime}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Pick a time" />
            </SelectTrigger>
            <SelectContent>
              {[
                "09:00 AM",
                "10:00 AM",
                "11:00 AM",
                "12:00 PM",
                "01:00 PM",
                "02:00 PM",
                "03:00 PM",
                "04:00 PM",
                "05:00 PM",
              ].map((slot) => (
                <SelectItem key={slot} value={slot}>
                  {slot}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <Button
            disabled={!date || !time || !title || !description}
            className="w-full"
            onClick={handleBooking}
          >
            Confirm Booking
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
