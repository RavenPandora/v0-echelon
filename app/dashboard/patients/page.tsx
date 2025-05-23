import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import DashboardHeader from "@/components/dashboard-header"
import DashboardNav from "@/components/dashboard-nav"
import { Input } from "@/components/ui/input"
import { Search, Plus, Filter, Download, MoreHorizontal } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function PatientsPage() {
  // Datos de ejemplo para pacientes
  const patients = [
    {
      id: "P-1001",
      name: "María Pérez González",
      age: 5,
      gender: "Femenino",
      lastVisit: "15/04/2023",
      nextVisit: "22/05/2023",
      condition: "Faringoamigdalitis",
      status: "Activo",
      doctor: "Dra. Sara Jiménez",
      specialty: "Pediatría",
    },
    {
      id: "P-1002",
      name: "Juan Rodríguez López",
      age: 8,
      gender: "Masculino",
      lastVisit: "12/04/2023",
      nextVisit: "10/05/2023",
      condition: "Asma",
      status: "Activo",
      doctor: "Dra. Sara Jiménez",
      specialty: "Pediatría",
    },
    {
      id: "P-1003",
      name: "Ana Martínez Sánchez",
      age: 3,
      gender: "Femenino",
      lastVisit: "10/04/2023",
      nextVisit: "24/04/2023",
      condition: "Dermatitis atópica",
      status: "Activo",
      doctor: "Dra. Sara Jiménez",
      specialty: "Pediatría",
    },
    {
      id: "P-1004",
      name: "Carlos Gómez Fernández",
      age: 10,
      gender: "Masculino",
      lastVisit: "08/04/2023",
      nextVisit: "08/05/2023",
      condition: "Rinitis alérgica",
      status: "Activo",
      doctor: "Dra. Sara Jiménez",
      specialty: "Pediatría",
    },
    {
      id: "P-1005",
      name: "Sofía Díaz Torres",
      age: 2,
      gender: "Femenino",
      lastVisit: "05/04/2023",
      nextVisit: "19/04/2023",
      condition: "Otitis media",
      status: "Crítico",
      doctor: "Dra. Sara Jiménez",
      specialty: "Pediatría",
    },
    {
      id: "P-1006",
      name: "Miguel Álvarez Ruiz",
      age: 7,
      gender: "Masculino",
      lastVisit: "03/04/2023",
      nextVisit: "17/04/2023",
      condition: "Gastroenteritis",
      status: "Activo",
      doctor: "Dra. Sara Jiménez",
      specialty: "Pediatría",
    },
    {
      id: "P-1007",
      name: "Lucía Moreno Jiménez",
      age: 4,
      gender: "Femenino",
      lastVisit: "01/04/2023",
      nextVisit: "15/04/2023",
      condition: "Bronquitis",
      status: "Activo",
      doctor: "Dra. Sara Jiménez",
      specialty: "Pediatría",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      <DashboardHeader />
      <div className="flex">
        <DashboardNav />
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-slate-800">Pacientes</h1>
              <p className="text-slate-500">Gestión de pacientes y expedientes médicos</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" className="text-sky-700 border-sky-200">
                <Filter className="h-4 w-4 mr-2" />
                Filtrar
              </Button>
              <Button variant="outline" className="text-sky-700 border-sky-200">
                <Download className="h-4 w-4 mr-2" />
                Exportar
              </Button>
              <Button className="bg-sky-700 hover:bg-sky-800">
                <Plus className="h-4 w-4 mr-2" />
                Nuevo Paciente
              </Button>
            </div>
          </div>

          <Card className="mb-6">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle>Buscar Pacientes</CardTitle>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-slate-500">Total: {patients.length}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <Input placeholder="Buscar por nombre, ID o condición..." className="pl-9" />
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="w-full sm:w-auto">
                    Buscar
                  </Button>
                  <Button variant="ghost" className="w-full sm:w-auto">
                    Limpiar
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="all" className="mb-6">
            <TabsList>
              <TabsTrigger value="all">Todos</TabsTrigger>
              <TabsTrigger value="active">Activos</TabsTrigger>
              <TabsTrigger value="critical">Críticos</TabsTrigger>
              <TabsTrigger value="upcoming">Próximas Citas</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-4">
              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader className="bg-slate-50">
                      <TableRow>
                        <TableHead>Paciente</TableHead>
                        <TableHead>ID</TableHead>
                        <TableHead>Edad</TableHead>
                        <TableHead>Última Visita</TableHead>
                        <TableHead>Próxima Cita</TableHead>
                        <TableHead>Condición</TableHead>
                        <TableHead>Estado</TableHead>
                        <TableHead className="text-right">Acciones</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {patients.map((patient) => (
                        <TableRow key={patient.id} className="hover:bg-sky-50">
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <Avatar className="h-8 w-8">
                                <AvatarImage src={`/placeholder.svg?text=${patient.name.charAt(0)}`} />
                                <AvatarFallback className="bg-sky-100 text-sky-700">
                                  {patient.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")
                                    .substring(0, 2)}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <Link
                                  href={`/dashboard/patients/${patient.id}`}
                                  className="font-medium hover:text-sky-700"
                                >
                                  {patient.name}
                                </Link>
                                <div className="text-xs text-slate-500">{patient.gender}</div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>{patient.id}</TableCell>
                          <TableCell>{patient.age} años</TableCell>
                          <TableCell>{patient.lastVisit}</TableCell>
                          <TableCell>{patient.nextVisit}</TableCell>
                          <TableCell>{patient.condition}</TableCell>
                          <TableCell>
                            <Badge
                              variant="outline"
                              className={
                                patient.status === "Activo"
                                  ? "bg-green-50 text-green-700 border-green-200"
                                  : "bg-red-50 text-red-700 border-red-200"
                              }
                            >
                              {patient.status}
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
                                <DropdownMenuItem>Ver Perfil</DropdownMenuItem>
                                <DropdownMenuItem>Editar Paciente</DropdownMenuItem>
                                <DropdownMenuItem>Programar Cita</DropdownMenuItem>
                                <DropdownMenuItem>Ver Historial</DropdownMenuItem>
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
            <TabsContent value="active" className="mt-4">
              <Card>
                <CardContent className="p-6">
                  <p>Mostrando pacientes con estado activo.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="critical" className="mt-4">
              <Card>
                <CardContent className="p-6">
                  <p>Mostrando pacientes en estado crítico.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="upcoming" className="mt-4">
              <Card>
                <CardContent className="p-6">
                  <p>Mostrando pacientes con citas próximas.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
