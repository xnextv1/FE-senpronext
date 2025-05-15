'use client'

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
  import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
  import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { format } from "date-fns";
  import { useState } from "react";




  export default function BookDialog() {
    const [date, setDate] = useState<Date | undefined>();
    const [time, setTime] = useState<string>("");
  
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full" variant="outline">Schedule Meeting</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md" >
          <DialogHeader>
            <DialogTitle>Book This Therapist</DialogTitle>
            <DialogDescription>
              Pick a date and time to book a meeting with this therapist.
            </DialogDescription>
          </DialogHeader>
  
          {/* Date Picker */}
        <div className="mt-4">
        <Popover modal={true}>
            <PopoverTrigger asChild>
            <Button variant="outline" className="w-full text-left">
                {date ? format(date, "PPP") : "Pick a date"}
            </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 z-50">
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
            />
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
                  "00:00 PM", 
                  "01:00 PM",
                  "02:00 PM",
                  "03:00 PM",
                  "04:00 PM",
                  "05:00 PM",
                ].map((slot) => (
                  <SelectItem key={slot} value={slot} className="hover:bg-gray-100">
                    {slot}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
  
          {/* Submit Button */}
          <div className="mt-6">
            <Button disabled={!date || !time} className="w-full">
              Confirm Booking
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }
  