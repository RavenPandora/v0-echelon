"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import DashboardHeader from "@/components/dashboard-header"
import DashboardNav from "@/components/dashboard-nav"
import { Calendar } from "@/components/ui/calendar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
  CalendarDays,
  Clock,
  Search,
  Plus,
  Filter,
  ChevronLeft,
  ChevronRight,
  FileText,
  CalendarIcon,
} from "lucide-react"
import { useState } from "react"
import { es } from "date-fns/locale"

export default function AppointmentsPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  // Datos de ejemplo para citas
  const appointments = [
    {
      id: "A-1001",
      patient: "María Pérez González",
      patientId: "P-1001",
      age: 5,
      gender: "Femenino",
      date: "22/05/2023",
      time: "10:00 AM",
      duration: "30 min",
      type: "Consulta",
      status: "Programada",
      notes: "Seguimiento de faringoamigdalitis",
    },
    {
      id: "A-1002",
      patient: "Juan Rodríguez López",
      patientId: "P-1002",
      age: 8,
      gender: "Masculino",
      date: "22/05/2023",
      time: "11:00 AM",
      duration: "30 min",
      type: "Revisión",
      status: "Programada",
      notes: "Control de asma",
    },
    {
      id: "A-1003",
      patient: "Ana Martínez Sánchez",
      patientId: "P-1003",
      age: 3,
      gender: "Femenino",
      date: "22/05/2023",
      time: "12:00 PM",
      duration: "45 min",
      type: "Primera vez",
      status: "Programada",
      notes: "Evaluación inicial",
    },
    {
      id: "A-1004",
      patient: "Carlos Gómez Fernández",
      patientId: "P-1004",
      age: 10,
      gender: "Masculino",
      date: "22/05/2023",
      time: "01:30 PM",
      duration: "30 min",
      type: "Consulta",
      status: "Programada",
      notes: "Seguimiento de rinitis alérgica",
    },
  ]

  // Horarios disponibles
  const timeSlots = [
    "08:00 AM",
    "08:30 AM",
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "01:00 PM",
    "01:30 PM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
    "05:00 PM",
    "05:30 PM",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50">
      <DashboardHeader />
      <div className="flex">
        <DashboardNav />
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-slate-800">Gestión de Citas</h1>
              <p className="text-slate-500">Administre las citas de sus pacientes</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input placeholder="Buscar paciente..." className="pl-9 w-64 bg-white" />
              </div>
              <Button variant="outline" className="text-sky-700 border-sky-200">
                <Filter className="h-4 w-4 mr-2" />
                Filtrar
              </Button>
              <Button className="bg-sky-700 hover:bg-sky-800">
                <Plus className="h-4 w-4 mr-2" />
                Nueva Cita
              </Button>
            </div>
          </div>

          <Tabs defaultValue="calendar" className="mb-6">
            <TabsList className="mb-4 bg-white border border-slate-200 shadow-sm">
              <TabsTrigger value="calendar">Calendario</TabsTrigger>
              <TabsTrigger value="list">Lista de Citas</TabsTrigger>
              <TabsTrigger value="new">Programar Cita</TabsTrigger>
            </TabsList>

            <TabsContent value="calendar">
              <div className="grid md:grid-cols-7 gap-6">
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle className="text-lg text-sky-800">Calendario</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md border"
                      locale={es}
                    />

                    <div className="mt-6">
                      <h3 className="font-medium text-sm mb-2">Resumen del día</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Total de citas:</span>
                          <span className="font-medium">4</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Consultas:</span>
                          <span className="font-medium">2</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Revisiones:</span>
                          <span className="font-medium">1</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Primera vez:</span>
                          <span className="font-medium">1</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="md:col-span-5">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-lg text-sky-800">
                      Citas para el{" "}
                      {date?.toLocaleDateString("es-ES", {
                        weekday: "long",
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </CardTitle>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
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
                                <div className="flex items-center gap-2">
                                  <h4 className="font-medium">{appointment.patient}</h4>
                                  <Badge variant="outline" className="bg-sky-50 text-sky-700 border-sky-200">
                                    {appointment.type}
                                  </Badge>
                                </div>
                                <p className="text-sm text-slate-500">
                                  {appointment.time} • {appointment.duration} • {appointment.age} años •{" "}
                                  {appointment.gender}
                                </p>
                                {appointment.notes && (
                                  <p className="text-sm text-slate-600 mt-1">Notas: {appointment.notes}</p>
                                )}
                              </div>
                              <div className="flex items-center gap-2">
                                <Button variant="outline" size="sm">
                                  <FileText className="h-4 w-4 mr-2" />
                                  Detalles
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="list">
              <Card>
                <CardHeader>
                  <CardTitle>Lista de Citas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Button variant="outline" className="bg-white">
                        Hoy
                      </Button>
                      <Button variant="outline" className="bg-white">
                        Esta semana
                      </Button>
                      <Button variant="outline" className="bg-white">
                        Este mes
                      </Button>
                      <Button variant="outline" className="bg-white">
                        Todas
                      </Button>
                    </div>

                    <div className="rounded-md border">
                      <div className="grid grid-cols-1 divide-y">
                        {appointments.map((appointment) => (
                          <div key={appointment.id} className="p-4 hover:bg-sky-50">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                              <div className="flex items-center gap-3">
                                <Avatar className="h-10 w-10">
                                  <AvatarFallback className="bg-sky-100 text-sky-700">
                                    {appointment.patient
                                      .split(" ")
                                      .map((n) => n[0])
                                      .join("")
                                      .substring(0, 2)}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <div className="font-medium">{appointment.patient}</div>
                                  <div className="text-sm text-slate-500">ID: {appointment.patientId}</div>
                                </div>
                              </div>

                              <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2">
                                  <CalendarIcon className="h-4 w-4 text-slate-400" />
                                  <span className="text-sm">{appointment.date}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Clock className="h-4 w-4 text-slate-400" />
                                  <span className="text-sm">{appointment.time}</span>
                                </div>
                                <Badge variant="outline" className="bg-sky-50 text-sky-700 border-sky-200">
                                  {appointment.type}
                                </Badge>
                              </div>

                              <div className="flex items-center gap-2">
                                <Button variant="outline" size="sm">
                                  <FileText className="h-4 w-4 mr-2" />
                                  Ver
                                </Button>
                                <Button variant="outline" size="sm" className="text-amber-600 border-amber-200">
                                  Reprogramar
                                </Button>
                                <Button variant="outline" size="sm" className="text-red-600 border-red-200">
                                  Cancelar
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="new">
              <Card>
                <CardHeader>
                  <CardTitle>Programar Nueva Cita</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="patient">Paciente</Label>
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                          <Input id="patient" placeholder="Buscar paciente..." className="pl-9" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="appointment-type">Tipo de Cita</Label>
                        <Select>
                          <SelectTrigger id="appointment-type">
                            <SelectValue placeholder="Seleccionar tipo" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="consultation">Consulta</SelectItem>
                            <SelectItem value="review">Revisión</SelectItem>
                            <SelectItem value="first-time">Primera vez</SelectItem>
                            <SelectItem value="procedure">Procedimiento</SelectItem>
                            <SelectItem value="emergency">Emergencia</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="appointment-date">Fecha</Label>
                        <Input id="appointment-date" type="date" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="appointment-time">Hora</Label>
                        <Select>
                          <SelectTrigger id="appointment-time">
                            <SelectValue placeholder="Seleccionar hora" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="appointment-duration">Duración</Label>
                        <Select defaultValue="30">
                          <SelectTrigger id="appointment-duration">
                            <SelectValue placeholder="Seleccionar duración" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="15">15 minutos</SelectItem>
                            <SelectItem value="30">30 minutos</SelectItem>
                            <SelectItem value="45">45 minutos</SelectItem>
                            <SelectItem value="60">1 hora</SelectItem>
                            <SelectItem value="90">1 hora 30 minutos</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="appointment-notes">Notas</Label>
                        <Textarea
                          id="appointment-notes"
                          placeholder="Añadir notas sobre la cita..."
                          className="min-h-[120px]"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="appointment-reminder">Recordatorio</Label>
                        <Select defaultValue="1day">
                          <SelectTrigger id="appointment-reminder">
                            <SelectValue placeholder="Seleccionar recordatorio" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="none">Sin recordatorio</SelectItem>
                            <SelectItem value="1hour">1 hora antes</SelectItem>
                            <SelectItem value="3hours">3 horas antes</SelectItem>
                            <SelectItem value="1day">1 día antes</SelectItem>
                            <SelectItem value="2days">2 días antes</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="pt-4">
                        <Button className="w-full bg-sky-700 hover:bg-sky-800">
                          <CalendarDays className="h-4 w-4 mr-2" />
                          Programar Cita
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
