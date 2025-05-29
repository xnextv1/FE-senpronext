'use client'
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { CalendarDays, User} from "lucide-react";
import { getAppointment } from "./actions/getAppointmentPatient";
import { getAppointmentTherapist } from "./actions/getAppointmentTherapist";

type Appointment = {
  itherapist_id: number;
  patient_id: number;
  appointment_time: string;
  title: string;
  description: string;
  appointment_id: string;
};


export default function TherapistAppointments() {
  const [appointments, setAppointments] = useState<Appointment[] | null>(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      const result = await getAppointment();
      setAppointments(result);
      const result_2 = await getAppointmentTherapist();
      setAppointments((prevAppointments) => {
        if (prevAppointments && result_2) {
          return [...prevAppointments, ...result_2];
        }
        return result_2 || prevAppointments;
      }
      );
    };

    fetchAppointments();
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
            <Card key={appt.appointment_id} className="shadow-sm border">
              <CardHeader className="pb-2 flex justify-between items-center">
                <CardTitle className="text-lg">
                  <User className="inline-block w-4 h-4 mr-2" />
                  {appt.title}
                </CardTitle>
               
              </CardHeader>
             <CardContent className="space-y-2">
              {appt.description}
              <p>
              {appt.appointment_time ? (
                <span className="text-sm text-gray-500">
                  <CalendarDays className="inline-block w-4 h-4 mr-1" />
                  {new Date(appt.appointment_time).toLocaleDateString()} at{" "}
                  {new Date(appt.appointment_time).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </span>
              ) : (
                <span className="text-sm text-red-500">No appointment time set</span>
              )}
              </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
