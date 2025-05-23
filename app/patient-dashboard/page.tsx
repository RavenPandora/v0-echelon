import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import PatientHeader from "@/components/patient-header"
import PatientNav from "@/components/patient-nav"
import { Calendar, Clock, FileText, MessageSquare, CalendarDays, Search, Plus, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function PatientDashboardPage() {
  // Datos de ejemplo para el paciente
  const patient = {
    id: "P-1001",
    name: "Juan Pérez",
    age: 35,
    gender: "Masculino",
    lastVisit: "15/04/2023",
    nextVisit: "22/05/2023",
  }

  // Datos de ejemplo para doctores asignados
  const assignedDoctors = [
    {
      id: "D-1001",
      name: "Dra. Sara Jiménez",
      specialty: "Medicina General",
      lastVisit: "15/04/2023",
    },
    {
      id: "D-1002",
      name: "Dr. Carlos Rodríguez",
      specialty: "Cardiología",
      lastVisit: "10/03/2023",
    },
  ]

  // Datos de ejemplo para doctores
  const doctors = [
    {
      id: "D-1001",
      name: "Dra. Sara Jiménez",
      specialty: "Pediatría",
      rating: 4.9,
      reviews: 124,
      available: true,
    },
    {
      id: "D-1002",
      name: "Dr. Carlos Rodríguez",
      specialty: "Cardiología",
      rating: 4.8,
      reviews: 98,
      available: true,
    },
    {
      id: "D-1003",
      name: "Dra. Ana Martínez",
      specialty: "Neurología",
      rating: 4.7,
      reviews: 87,
      available: false,
    },
    {
      id: "D-1004",
      name: "Dr. Miguel López",
      specialty: "Traumatología",
      rating: 4.6,
      reviews: 76,
      available: true,
    },
  ]

  // Datos de ejemplo para citas
  const appointments = [
    {
      id: "A-1001",
      doctor: "Dra. Sara Jiménez",
      specialty: "Pediatría",
      date: "22/05/2023",
      time: "10:00 AM",
      status: "Programada",
    },
    {
      id: "A-1002",
      doctor: "Dr. Carlos Rodríguez",
      specialty: "Cardiología",
      date: "15/06/2023",
      time: "11:30 AM",
      status: "Programada",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50">
      <PatientHeader />
      <div className="flex">
        <PatientNav />
        <main className="flex-1 p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <h1 className="text-2xl font-bold text-slate-800">Bienvenido, {patient.name}</h1>
              <p className="text-slate-500">Aquí puede gestionar su información médica y citas</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" className="text-sky-700 border-sky-200">
                <MessageSquare className="h-4 w-4 mr-2" />
                Mensajes
              </Button>
              <Button className="bg-sky-700 hover:bg-sky-800">
                <CalendarDays className="h-4 w-4 mr-2" />
                Programar Cita
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card className="bg-gradient-to-br from-sky-50 to-blue-50 border-sky-100 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-sky-700" />
                  <div>
                    <p className="text-sm font-medium">Última Visita</p>
                    <p className="text-lg">{patient.lastVisit}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-sky-50 to-blue-50 border-sky-100 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-sky-700" />
                  <div>
                    <p className="text-sm font-medium">Próxima Cita</p>
                    <p className="text-lg">{patient.nextVisit}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-sky-50 to-blue-50 border-sky-100 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-sky-700" />
                    <p className="text-sm font-medium">Mis Doctores</p>
                  </div>
                  <div className="space-y-2 mt-1">
                    {assignedDoctors.map((doctor, index) => (
                      <div key={doctor.id} className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarFallback className="bg-sky-100 text-sky-700 text-xs">
                            {doctor.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")
                              .substring(0, 2)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">{doctor.name}</p>
                          <p className="text-xs text-slate-500">{doctor.specialty}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="appointments" className="mb-6">
            <TabsList className="bg-white border border-slate-200 shadow-sm">
              <TabsTrigger value="appointments">Mis Citas</TabsTrigger>
              <TabsTrigger value="doctors">Buscar Doctores</TabsTrigger>
              <TabsTrigger value="records">Mi Historial Médico</TabsTrigger>
              <TabsTrigger value="profile">Mi Perfil</TabsTrigger>
            </TabsList>

            <TabsContent value="appointments" className="mt-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Mis Citas</CardTitle>
                    <Button className="bg-sky-700 hover:bg-sky-800">
                      <Plus className="h-4 w-4 mr-2" />
                      Nueva Cita
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  {appointments.length > 0 ? (
                    <div className="space-y-4">
                      {appointments.map((appointment) => (
                        <div
                          key={appointment.id}
                          className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border rounded-lg hover:bg-sky-50 transition-colors"
                        >
                          <div className="flex items-center gap-4 mb-2 md:mb-0">
                            <div className="bg-sky-100 p-3 rounded-full">
                              <Calendar className="h-6 w-6 text-sky-700" />
                            </div>
                            <div>
                              <h3 className="font-medium">{appointment.doctor}</h3>
                              <p className="text-sm text-slate-500">{appointment.specialty}</p>
                            </div>
                          </div>
                          <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-6">
                            <div className="text-sm">
                              <p className="font-medium">{appointment.date}</p>
                              <p className="text-slate-500">{appointment.time}</p>
                            </div>
                            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 md:ml-4">
                              {appointment.status}
                            </Badge>
                            <Button variant="outline" size="sm" className="mt-2 md:mt-0">
                              Ver Detalles
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-center text-slate-500 py-8">No tiene citas programadas.</p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="doctors" className="mt-4">
              <Card>
                <CardHeader>
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <CardTitle>Buscar Doctores</CardTitle>
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <Input placeholder="Buscar por nombre o especialidad..." className="pl-9 min-w-[250px]" />
                      </div>
                      <Button variant="outline">
                        <Filter className="h-4 w-4 mr-2" />
                        Filtrar
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {doctors.map((doctor) => (
                      <div
                        key={doctor.id}
                        className="border rounded-lg p-4 hover:border-sky-200 hover:bg-sky-50 transition-colors"
                      >
                        <div className="flex items-start gap-4">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={`/placeholder.svg?text=${doctor.name.charAt(0)}`} />
                            <AvatarFallback className="bg-sky-100 text-sky-700">
                              {doctor.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")
                                .substring(0, 2)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <h3 className="font-medium">{doctor.name}</h3>
                              <Badge
                                variant="outline"
                                className={
                                  doctor.available
                                    ? "bg-green-50 text-green-700 border-green-200"
                                    : "bg-amber-50 text-amber-700 border-amber-200"
                                }
                              >
                                {doctor.available ? "Disponible" : "No Disponible"}
                              </Badge>
                            </div>
                            <p className="text-sm text-slate-500">{doctor.specialty}</p>
                            <div className="flex items-center gap-2 mt-2">
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <svg
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < Math.floor(doctor.rating) ? "text-yellow-400" : "text-slate-300"
                                    }`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                ))}
                              </div>
                              <span className="text-sm font-medium">{doctor.rating}</span>
                              <span className="text-sm text-slate-500">({doctor.reviews} reseñas)</span>
                            </div>
                            <div className="mt-4 flex justify-end">
                              <Button className="bg-sky-700 hover:bg-sky-800" disabled={!doctor.available} size="sm">
                                Programar Cita
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="records" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Mi Historial Médico</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium text-lg mb-2">Historial de Consultas</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-slate-50 rounded-md">
                          <div>
                            <p className="font-medium">Consulta General</p>
                            <p className="text-sm text-slate-500">15/04/2023 - Dra. Sara Jiménez</p>
                          </div>
                          <Button variant="outline" size="sm">
                            Ver Detalles
                          </Button>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-slate-50 rounded-md">
                          <div>
                            <p className="font-medium">Revisión Cardiológica</p>
                            <p className="text-sm text-slate-500">10/03/2023 - Dr. Carlos Rodríguez</p>
                          </div>
                          <Button variant="outline" size="sm">
                            Ver Detalles
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium text-lg mb-2">Resultados de Laboratorio</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-slate-50 rounded-md">
                          <div>
                            <p className="font-medium">Análisis de Sangre</p>
                            <p className="text-sm text-slate-500">05/04/2023</p>
                          </div>
                          <Button variant="outline" size="sm">
                            Ver Resultados
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="profile" className="mt-4">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Mi Perfil</CardTitle>
                    <Button variant="outline">Editar Perfil</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3 flex flex-col items-center">
                      <Avatar className="h-32 w-32 mb-4">
                        <AvatarImage src={`/placeholder.svg?text=${patient.name.charAt(0)}`} />
                        <AvatarFallback className="bg-sky-100 text-sky-700 text-4xl">
                          {patient.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .substring(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <Button variant="outline" size="sm" className="mb-4">
                        Cambiar Foto
                      </Button>
                      <div className="w-full space-y-2 text-center">
                        <h3 className="font-medium text-lg">{patient.name}</h3>
                        <p className="text-slate-500">ID: {patient.id}</p>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h3 className="text-sm font-medium text-slate-500">Nombre Completo</h3>
                          <p className="font-medium">{patient.name}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-slate-500">Edad</h3>
                          <p className="font-medium">{patient.age} años</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-slate-500">Sexo</h3>
                          <p className="font-medium">{patient.gender}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-slate-500">Correo Electrónico</h3>
                          <p className="font-medium">juan.perez@ejemplo.com</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-slate-500">Teléfono</h3>
                          <p className="font-medium">(555) 123-4567</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-slate-500">Seguro Médico</h3>
                          <p className="font-medium">Seguro Nacional de Salud</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-slate-500">Número de Póliza</h3>
                          <p className="font-medium">SNS-12345678</p>
                        </div>
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
