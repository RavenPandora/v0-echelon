import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import DashboardHeader from "@/components/dashboard-header"
import DashboardNav from "@/components/dashboard-nav"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Search,
  Filter,
  FileText,
  Calendar,
  MoreHorizontal,
  Download,
  Printer,
  Share2,
  Stethoscope,
  Pill,
  ClipboardList,
} from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function HistoryPage() {
  // Datos de ejemplo para el historial
  const historyItems = [
    {
      id: "H-1001",
      type: "Consulta",
      patient: "María Pérez González",
      patientId: "P-1001",
      date: "15/04/2023",
      time: "10:00 AM",
      doctor: "Dra. Sara Jiménez",
      description: "Consulta por faringoamigdalitis aguda",
      status: "Completado",
    },
    {
      id: "H-1002",
      type: "Receta",
      patient: "María Pérez González",
      patientId: "P-1001",
      date: "15/04/2023",
      time: "10:30 AM",
      doctor: "Dra. Sara Jiménez",
      description: "Receta de Paracetamol y Loratadina",
      status: "Activa",
    },
    {
      id: "H-1003",
      type: "Consulta",
      patient: "Juan Rodríguez López",
      patientId: "P-1002",
      date: "12/04/2023",
      time: "11:00 AM",
      doctor: "Dra. Sara Jiménez",
      description: "Revisión de asma",
      status: "Completado",
    },
    {
      id: "H-1004",
      type: "Laboratorio",
      patient: "Juan Rodríguez López",
      patientId: "P-1002",
      date: "12/04/2023",
      time: "11:45 AM",
      doctor: "Dra. Sara Jiménez",
      description: "Solicitud de pruebas de función pulmonar",
      status: "Pendiente",
    },
    {
      id: "H-1005",
      type: "Receta",
      patient: "Juan Rodríguez López",
      patientId: "P-1002",
      date: "12/04/2023",
      time: "12:00 PM",
      doctor: "Dra. Sara Jiménez",
      description: "Receta de Salbutamol y Fluticasona",
      status: "Activa",
    },
    {
      id: "H-1006",
      type: "Consulta",
      patient: "Ana Martínez Sánchez",
      patientId: "P-1003",
      date: "10/04/2023",
      time: "09:00 AM",
      doctor: "Dra. Sara Jiménez",
      description: "Primera consulta por dermatitis atópica",
      status: "Completado",
    },
    {
      id: "H-1007",
      type: "Receta",
      patient: "Ana Martínez Sánchez",
      patientId: "P-1003",
      date: "10/04/2023",
      time: "09:30 AM",
      doctor: "Dra. Sara Jiménez",
      description: "Receta de Hidrocortisona crema",
      status: "Activa",
    },
  ]

  // Iconos por tipo de actividad
  const typeIcons = {
    Consulta: <Stethoscope className="h-5 w-5 text-sky-700" />,
    Receta: <Pill className="h-5 w-5 text-green-600" />,
    Laboratorio: <ClipboardList className="h-5 w-5 text-amber-600" />,
    Cita: <Calendar className="h-5 w-5 text-purple-600" />,
    Registro: <FileText className="h-5 w-5 text-blue-600" />,
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50">
      <DashboardHeader />
      <div className="flex">
        <DashboardNav />
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-slate-800">Historial de Actividades</h1>
              <p className="text-slate-500">Registro cronológico de todas las actividades</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input placeholder="Buscar en historial..." className="pl-9 w-64 bg-white" />
              </div>
              <Button variant="outline" className="text-sky-700 border-sky-200">
                <Filter className="h-4 w-4 mr-2" />
                Filtrar
              </Button>
              <Button variant="outline" className="text-sky-700 border-sky-200">
                <Download className="h-4 w-4 mr-2" />
                Exportar
              </Button>
            </div>
          </div>

          <Card className="mb-6">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle>Filtros</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <div className="w-full md:w-auto">
                  <Select>
                    <SelectTrigger className="w-full md:w-[200px]">
                      <SelectValue placeholder="Tipo de actividad" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todas las actividades</SelectItem>
                      <SelectItem value="consultation">Consultas</SelectItem>
                      <SelectItem value="prescription">Recetas</SelectItem>
                      <SelectItem value="lab">Laboratorio</SelectItem>
                      <SelectItem value="appointment">Citas</SelectItem>
                      <SelectItem value="record">Registros</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="w-full md:w-auto">
                  <Select>
                    <SelectTrigger className="w-full md:w-[200px]">
                      <SelectValue placeholder="Paciente" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos los pacientes</SelectItem>
                      <SelectItem value="p-1001">María Pérez González</SelectItem>
                      <SelectItem value="p-1002">Juan Rodríguez López</SelectItem>
                      <SelectItem value="p-1003">Ana Martínez Sánchez</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="w-full md:w-auto">
                  <Select>
                    <SelectTrigger className="w-full md:w-[200px]">
                      <SelectValue placeholder="Periodo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="today">Hoy</SelectItem>
                      <SelectItem value="yesterday">Ayer</SelectItem>
                      <SelectItem value="week">Esta semana</SelectItem>
                      <SelectItem value="month">Este mes</SelectItem>
                      <SelectItem value="custom">Personalizado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="w-full md:w-auto">
                  <Select>
                    <SelectTrigger className="w-full md:w-[200px]">
                      <SelectValue placeholder="Estado" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos los estados</SelectItem>
                      <SelectItem value="completed">Completado</SelectItem>
                      <SelectItem value="pending">Pendiente</SelectItem>
                      <SelectItem value="active">Activo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="ml-auto">Aplicar Filtros</Button>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="timeline" className="mb-6">
            <TabsList className="mb-4 bg-white border border-slate-200 shadow-sm">
              <TabsTrigger value="timeline">Línea de Tiempo</TabsTrigger>
              <TabsTrigger value="table">Vista de Tabla</TabsTrigger>
            </TabsList>

            <TabsContent value="timeline">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-8">
                    {/* Agrupamos por fecha */}
                    <div>
                      <h3 className="text-sm font-medium text-slate-500 mb-4">15 de abril, 2023</h3>
                      <div className="space-y-4">
                        {historyItems
                          .filter((item) => item.date === "15/04/2023")
                          .map((item) => (
                            <div key={item.id} className="flex gap-4">
                              <div className="flex-shrink-0 mt-1">
                                <div className="bg-white p-2 rounded-full border border-slate-200">
                                  {typeIcons[item.type]}
                                </div>
                              </div>
                              <div className="flex-grow">
                                <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm hover:border-sky-200 transition-colors">
                                  <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                      <h4 className="font-medium">{item.type}</h4>
                                      <Badge
                                        variant="outline"
                                        className={
                                          item.status === "Completado"
                                            ? "bg-green-50 text-green-700 border-green-200"
                                            : item.status === "Pendiente"
                                              ? "bg-amber-50 text-amber-700 border-amber-200"
                                              : "bg-blue-50 text-blue-700 border-blue-200"
                                        }
                                      >
                                        {item.status}
                                      </Badge>
                                    </div>
                                    <div className="text-sm text-slate-500">{item.time}</div>
                                  </div>
                                  <p className="text-slate-600 mb-2">{item.description}</p>
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                      <Avatar className="h-6 w-6">
                                        <AvatarFallback className="bg-sky-100 text-sky-700 text-xs">
                                          {item.patient
                                            .split(" ")
                                            .map((n) => n[0])
                                            .join("")
                                            .substring(0, 2)}
                                        </AvatarFallback>
                                      </Avatar>
                                      <span className="text-sm">{item.patient}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <Button variant="outline" size="sm">
                                        <FileText className="h-4 w-4 mr-2" />
                                        Ver Detalles
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-slate-500 mb-4">12 de abril, 2023</h3>
                      <div className="space-y-4">
                        {historyItems
                          .filter((item) => item.date === "12/04/2023")
                          .map((item) => (
                            <div key={item.id} className="flex gap-4">
                              <div className="flex-shrink-0 mt-1">
                                <div className="bg-white p-2 rounded-full border border-slate-200">
                                  {typeIcons[item.type]}
                                </div>
                              </div>
                              <div className="flex-grow">
                                <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm hover:border-sky-200 transition-colors">
                                  <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                      <h4 className="font-medium">{item.type}</h4>
                                      <Badge
                                        variant="outline"
                                        className={
                                          item.status === "Completado"
                                            ? "bg-green-50 text-green-700 border-green-200"
                                            : item.status === "Pendiente"
                                              ? "bg-amber-50 text-amber-700 border-amber-200"
                                              : "bg-blue-50 text-blue-700 border-blue-200"
                                        }
                                      >
                                        {item.status}
                                      </Badge>
                                    </div>
                                    <div className="text-sm text-slate-500">{item.time}</div>
                                  </div>
                                  <p className="text-slate-600 mb-2">{item.description}</p>
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                      <Avatar className="h-6 w-6">
                                        <AvatarFallback className="bg-sky-100 text-sky-700 text-xs">
                                          {item.patient
                                            .split(" ")
                                            .map((n) => n[0])
                                            .join("")
                                            .substring(0, 2)}
                                        </AvatarFallback>
                                      </Avatar>
                                      <span className="text-sm">{item.patient}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <Button variant="outline" size="sm">
                                        <FileText className="h-4 w-4 mr-2" />
                                        Ver Detalles
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-slate-500 mb-4">10 de abril, 2023</h3>
                      <div className="space-y-4">
                        {historyItems
                          .filter((item) => item.date === "10/04/2023")
                          .map((item) => (
                            <div key={item.id} className="flex gap-4">
                              <div className="flex-shrink-0 mt-1">
                                <div className="bg-white p-2 rounded-full border border-slate-200">
                                  {typeIcons[item.type]}
                                </div>
                              </div>
                              <div className="flex-grow">
                                <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm hover:border-sky-200 transition-colors">
                                  <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                      <h4 className="font-medium">{item.type}</h4>
                                      <Badge
                                        variant="outline"
                                        className={
                                          item.status === "Completado"
                                            ? "bg-green-50 text-green-700 border-green-200"
                                            : item.status === "Pendiente"
                                              ? "bg-amber-50 text-amber-700 border-amber-200"
                                              : "bg-blue-50 text-blue-700 border-blue-200"
                                        }
                                      >
                                        {item.status}
                                      </Badge>
                                    </div>
                                    <div className="text-sm text-slate-500">{item.time}</div>
                                  </div>
                                  <p className="text-slate-600 mb-2">{item.description}</p>
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                      <Avatar className="h-6 w-6">
                                        <AvatarFallback className="bg-sky-100 text-sky-700 text-xs">
                                          {item.patient
                                            .split(" ")
                                            .map((n) => n[0])
                                            .join("")
                                            .substring(0, 2)}
                                        </AvatarFallback>
                                      </Avatar>
                                      <span className="text-sm">{item.patient}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <Button variant="outline" size="sm">
                                        <FileText className="h-4 w-4 mr-2" />
                                        Ver Detalles
                                      </Button>
                                    </div>
                                  </div>
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

            <TabsContent value="table">
              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader className="bg-sky-50">
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Tipo</TableHead>
                        <TableHead>Paciente</TableHead>
                        <TableHead>Fecha</TableHead>
                        <TableHead>Hora</TableHead>
                        <TableHead>Doctor</TableHead>
                        <TableHead>Descripción</TableHead>
                        <TableHead>Estado</TableHead>
                        <TableHead className="text-right">Acciones</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {historyItems.map((item) => (
                        <TableRow key={item.id} className="hover:bg-sky-50">
                          <TableCell className="font-medium">{item.id}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              {typeIcons[item.type]}
                              <span>{item.type}</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Avatar className="h-6 w-6">
                                <AvatarFallback className="bg-sky-100 text-sky-700 text-xs">
                                  {item.patient
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")
                                    .substring(0, 2)}
                                </AvatarFallback>
                              </Avatar>
                              <span>{item.patient}</span>
                            </div>
                          </TableCell>
                          <TableCell>{item.date}</TableCell>
                          <TableCell>{item.time}</TableCell>
                          <TableCell>{item.doctor}</TableCell>
                          <TableCell className="max-w-xs truncate">{item.description}</TableCell>
                          <TableCell>
                            <Badge
                              variant="outline"
                              className={
                                item.status === "Completado"
                                  ? "bg-green-50 text-green-700 border-green-200"
                                  : item.status === "Pendiente"
                                    ? "bg-amber-50 text-amber-700 border-amber-200"
                                    : "bg-blue-50 text-blue-700 border-blue-200"
                              }
                            >
                              {item.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                  <FileText className="mr-2 h-4 w-4" />
                                  Ver Detalles
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Printer className="mr-2 h-4 w-4" />
                                  Imprimir
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Share2 className="mr-2 h-4 w-4" />
                                  Compartir
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
