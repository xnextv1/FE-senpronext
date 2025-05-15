'use client'
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock3, User, Video, MapPin } from "lucide-react";

type Appointment = {
  id: number;
  patientName: string;
  date: string;
  time: string;
  type: "Online" | "In-person";
  status: "upcoming" | "completed";
  notes?: string;
};

function fetchAppointments(): Promise<Appointment[]> {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve([
        {
          id: 1,
          patientName: "John Doe",
          date: "2025-05-17",
          time: "14:00",
          type: "Online",
          status: "upcoming",
          notes: "Follow-up session.",
        },
        {
          id: 2,
          patientName: "Sarah Smith",
          date: "2025-05-12",
          time: "10:00",
          type: "In-person",
          status: "completed",
          notes: "Discussed anxiety management.",
        },
        {
          id: 3,
          patientName: "Michael Lee",
          date: "2025-05-05",
          time: "16:30",
          type: "Online",
          status: "completed",
        },
      ]);
    }, 1000)
  );
}

export default function TherapistAppointments() {
  const [appointments, setAppointments] = useState<Appointment[] | null>(null);

  useEffect(() => {
    fetchAppointments().then(setAppointments);
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6">Scheduled Appointments</h1>
      {appointments === null ? (
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-24 w-full rounded-xl" />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {appointments.map((appt) => (
            <Card key={appt.id} className="shadow-sm border">
              <CardHeader className="pb-2 flex justify-between items-center">
                <CardTitle className="text-lg">
                  <User className="inline-block w-4 h-4 mr-2" />
                  {appt.patientName}
                </CardTitle>
                <Badge
                  variant={appt.status === "upcoming" ? "default" : "outline"}
                  className={
                    appt.status === "upcoming"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-muted text-muted-foreground"
                  }
                >
                  {appt.status}
                </Badge>
              </CardHeader>
              <CardContent className="text-sm space-y-1 text-muted-foreground">
                <p>
                  <CalendarDays className="inline-block w-4 h-4 mr-2" />
                  {appt.date}
                </p>
                <p>
                  <Clock3 className="inline-block w-4 h-4 mr-2" />
                  {appt.time}
                </p>
                <p>
                  {appt.type === "Online" ? (
                    <>
                      <Video className="inline-block w-4 h-4 mr-2" /> Online Session
                    </>
                  ) : (
                    <>
                      <MapPin className="inline-block w-4 h-4 mr-2" /> In-person Session
                    </>
                  )}
                </p>
                {appt.notes && <p className="italic pt-2">📝 {appt.notes}</p>}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
