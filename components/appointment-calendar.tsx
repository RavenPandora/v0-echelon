"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock } from "lucide-react"
import { es } from "date-fns/locale"

export default function AppointmentCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  // Mock appointments data
  const appointments = [
    { id: 1, time: "09:00 AM", patient: "Juan Pérez", type: "Revisión", duration: "30 min" },
    { id: 2, time: "10:30 AM", patient: "Elena Jiménez", type: "Seguimiento", duration: "45 min" },
    { id: 3, time: "01:15 PM", patient: "Miguel Moreno", type: "Consulta", duration: "60 min" },
    { id: 4, time: "03:00 PM", patient: "Sara Díaz", type: "Procedimiento", duration: "90 min" },
  ]

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg text-sky-800">Calendario</CardTitle>
        </CardHeader>
        <CardContent>
          <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" locale={es} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg text-sky-800">
            Citas para el {date?.toLocaleDateString("es-ES", { month: "long", day: "numeric", year: "numeric" })}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {appointments.map((appointment) => (
              <div
                key={appointment.id}
                className="flex items-start p-3 rounded-md border border-slate-200 hover:border-sky-200 hover:bg-sky-50 transition-colors"
              >
                <div className="flex-shrink-0 mr-4 bg-sky-100 p-2 rounded-md">
                  <Clock className="h-5 w-5 text-sky-700" />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">{appointment.patient}</h4>
                      <p className="text-sm text-slate-500">
                        {appointment.time} • {appointment.duration}
                      </p>
                    </div>
                    <Badge variant="outline" className="bg-sky-50 text-sky-700 border-sky-200">
                      {appointment.type}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
