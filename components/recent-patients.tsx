"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Calendar, FileText, Plus, ArrowUpRight, Baby } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Datos de ejemplo para pacientes pediátricos recientes
const recentPatients = [
  {
    id: "PED-2023-0042",
    name: "María Pérez González",
    age: "5 años",
    gender: "Femenino",
    lastVisit: "15/04/2023",
    nextVisit: "15/05/2023",
    diagnosis: "Faringoamigdalitis aguda",
    doctor: "Dra. Rodríguez",
    status: "regular",
    avatar: "/placeholder.svg",
  },
  {
    id: "PED-2023-0043",
    name: "Juan López Martínez",
    age: "3 años",
    gender: "Masculino",
    lastVisit: "14/04/2023",
    nextVisit: "14/05/2023",
    diagnosis: "Otitis media aguda",
    doctor: "Dr. Sánchez",
    status: "nuevo",
    avatar: "/placeholder.svg",
  },
  {
    id: "PED-2023-0039",
    name: "Ana García Flores",
    age: "7 años",
    gender: "Femenino",
    lastVisit: "13/04/2023",
    nextVisit: "13/05/2023",
    diagnosis: "Asma bronquial",
    doctor: "Dra. Rodríguez",
    status: "control",
    avatar: "/placeholder.svg",
  },
  {
    id: "PED-2023-0038",
    name: "Carlos Ramírez Vega",
    age: "2 años",
    gender: "Masculino",
    lastVisit: "12/04/2023",
    nextVisit: "12/05/2023",
    diagnosis: "Dermatitis atópica",
    doctor: "Dr. Sánchez",
    status: "regular",
    avatar: "/placeholder.svg",
  },
  {
    id: "PED-2023-0037",
    name: "Sofía Hernández Luna",
    age: "4 años",
    gender: "Femenino",
    lastVisit: "11/04/2023",
    nextVisit: "11/05/2023",
    diagnosis: "Rinitis alérgica",
    doctor: "Dra. Rodríguez",
    status: "control",
    avatar: "/placeholder.svg",
  },
  {
    id: "PED-2023-0036",
    name: "Diego Torres Rojas",
    age: "6 años",
    gender: "Masculino",
    lastVisit: "10/04/2023",
    nextVisit: "10/05/2023",
    diagnosis: "Gastroenteritis aguda",
    doctor: "Dr. Sánchez",
    status: "nuevo",
    avatar: "/placeholder.svg",
  },
  {
    id: "PED-2023-0035",
    name: "Valentina Díaz Mora",
    age: "1 año",
    gender: "Femenino",
    lastVisit: "09/04/2023",
    nextVisit: "09/05/2023",
    diagnosis: "Bronquiolitis",
    doctor: "Dra. Rodríguez",
    status: "regular",
    avatar: "/placeholder.svg",
  },
  {
    id: "PED-2023-0034",
    name: "Mateo Vargas Soto",
    age: "8 años",
    gender: "Masculino",
    lastVisit: "08/04/2023",
    nextVisit: "08/05/2023",
    diagnosis: "Amigdalitis",
    doctor: "Dr. Sánchez",
    status: "control",
    avatar: "/placeholder.svg",
  },
]

export default function RecentPatients() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filter, setFilter] = useState("all")

  // Filtrar pacientes según el término de búsqueda y el filtro seleccionado
  const filteredPatients = recentPatients.filter((patient) => {
    const matchesSearch =
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.id.toLowerCase().includes(searchTerm.toLowerCase())

    if (filter === "all") return matchesSearch
    return matchesSearch && patient.status === filter
  })

  // Función para renderizar la etiqueta de estado del paciente
  const renderStatusBadge = (status: string) => {
    switch (status) {
      case "nuevo":
        return (
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            Nuevo
          </Badge>
        )
      case "regular":
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            Regular
          </Badge>
        )
      case "control":
        return (
          <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
            Control
          </Badge>
        )
      default:
        return null
    }
  }

  return (
    <Card className="border-sky-100 shadow-md overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-sky-50 to-blue-50 border-b border-sky-100">
        <div className="flex justify-between items-center">
          <div>
            <div className="flex items-center gap-2">
              <Baby className="h-5 w-5 text-sky-700" />
              <CardTitle className="text-sky-800">Pacientes Pediátricos Recientes</CardTitle>
            </div>
            <CardDescription>Listado de pacientes pediátricos recientes</CardDescription>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="text-sky-700 border-sky-200">
              <Calendar className="h-4 w-4 mr-2" />
              Programar
            </Button>
            <Button className="bg-sky-700 hover:bg-sky-800">
              <Plus className="h-4 w-4 mr-2" />
              Nuevo Paciente
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6 bg-gradient-to-br from-white to-sky-50">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Buscar paciente..."
                className="pl-9 bg-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Tabs value={filter} onValueChange={setFilter} className="w-full sm:w-auto">
              <TabsList className="bg-sky-50 w-full sm:w-auto border border-sky-100 rounded-md p-1">
                <TabsTrigger value="all" className="data-[state=active]:bg-sky-100 data-[state=active]:text-sky-800">
                  Todos
                </TabsTrigger>
                <TabsTrigger value="nuevo" className="data-[state=active]:bg-sky-100 data-[state=active]:text-sky-800">
                  Nuevos
                </TabsTrigger>
                <TabsTrigger
                  value="regular"
                  className="data-[state=active]:bg-sky-100 data-[state=active]:text-sky-800"
                >
                  Regulares
                </TabsTrigger>
                <TabsTrigger
                  value="control"
                  className="data-[state=active]:bg-sky-100 data-[state=active]:text-sky-800"
                >
                  Controles
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="rounded-md border border-sky-100 shadow-sm overflow-hidden">
            <Table>
              <TableHeader className="bg-sky-50">
                <TableRow>
                  <TableHead>Paciente</TableHead>
                  <TableHead>Edad</TableHead>
                  <TableHead>Última Visita</TableHead>
                  <TableHead>Diagnóstico</TableHead>
                  <TableHead>Pediatra</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPatients.length > 0 ? (
                  filteredPatients.map((patient) => (
                    <TableRow key={patient.id} className="hover:bg-sky-50">
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8 bg-gradient-to-br from-sky-100 to-blue-100">
                            <AvatarImage src={patient.avatar || "/placeholder.svg"} alt={patient.name} />
                            <AvatarFallback className="bg-sky-100 text-sky-700">
                              {patient.gender === "Masculino" ? (
                                <Baby className="h-4 w-4" />
                              ) : (
                                <Baby className="h-4 w-4" />
                              )}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-sky-800">{patient.name}</p>
                            <p className="text-xs text-slate-500">{patient.id}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{patient.age}</TableCell>
                      <TableCell>
                        <div className="flex flex-col">
                          <span>{patient.lastVisit}</span>
                          <span className="text-xs text-slate-500">Próxima: {patient.nextVisit}</span>
                        </div>
                      </TableCell>
                      <TableCell>{patient.diagnosis}</TableCell>
                      <TableCell>{patient.doctor}</TableCell>
                      <TableCell>{renderStatusBadge(patient.status)}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon" className="text-slate-500 hover:text-sky-700">
                            <FileText className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="text-sky-700">
                            <ArrowUpRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-4 text-slate-500">
                      No se encontraron pacientes que coincidan con la búsqueda.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
