import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import DashboardHeader from "@/components/dashboard-header"
import DashboardNav from "@/components/dashboard-nav"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Search,
  Plus,
  Filter,
  FileText,
  Calendar,
  MoreHorizontal,
  Download,
  Printer,
  Share2,
  Pill,
  Clipboard,
  ClipboardCheck,
  AlertCircle,
} from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function PrescriptionsPage() {
  // Datos de ejemplo para recetas
  const prescriptions = [
    {
      id: "RX-1001",
      patient: "María Pérez González",
      patientId: "P-1001",
      age: 5,
      gender: "Femenino",
      date: "15/04/2023",
      medications: [
        { name: "Paracetamol", dosage: "160mg/5mL", instructions: "7.5mL vía oral cada 6 horas por 3 días" },
        { name: "Loratadina", dosage: "5mg/5mL", instructions: "5mL vía oral cada 24 horas por 7 días" },
      ],
      doctor: "Dra. Sara Jiménez",
      status: "Activa",
    },
    {
      id: "RX-1002",
      patient: "Juan Rodríguez López",
      patientId: "P-1002",
      age: 8,
      gender: "Masculino",
      date: "12/04/2023",
      medications: [
        { name: "Salbutamol", dosage: "100mcg/dosis", instructions: "2 inhalaciones cada 8 horas por 5 días" },
        { name: "Fluticasona", dosage: "50mcg/dosis", instructions: "2 inhalaciones cada 12 horas por 14 días" },
      ],
      doctor: "Dra. Sara Jiménez",
      status: "Activa",
    },
    {
      id: "RX-1003",
      patient: "Ana Martínez Sánchez",
      patientId: "P-1003",
      age: 3,
      gender: "Femenino",
      date: "10/04/2023",
      medications: [
        {
          name: "Hidrocortisona",
          dosage: "1% crema",
          instructions: "Aplicar en áreas afectadas 2 veces al día por 7 días",
        },
      ],
      doctor: "Dra. Sara Jiménez",
      status: "Activa",
    },
    {
      id: "RX-1004",
      patient: "Carlos Gómez Fernández",
      patientId: "P-1004",
      age: 10,
      gender: "Masculino",
      date: "08/04/2023",
      medications: [
        { name: "Cetirizina", dosage: "10mg", instructions: "1 tableta vía oral cada 24 horas por 14 días" },
      ],
      doctor: "Dra. Sara Jiménez",
      status: "Completada",
    },
  ]

  // Datos de ejemplo para medicamentos
  const medications = [
    {
      id: "M-1001",
      name: "Paracetamol",
      category: "Analgésico",
      presentations: ["Jarabe 160mg/5mL", "Tabletas 500mg"],
    },
    {
      id: "M-1002",
      name: "Amoxicilina",
      category: "Antibiótico",
      presentations: ["Suspensión 250mg/5mL", "Cápsulas 500mg"],
    },
    {
      id: "M-1003",
      name: "Loratadina",
      category: "Antihistamínico",
      presentations: ["Jarabe 5mg/5mL", "Tabletas 10mg"],
    },
    {
      id: "M-1004",
      name: "Salbutamol",
      category: "Broncodilatador",
      presentations: ["Inhalador 100mcg/dosis", "Solución para nebulizar 5mg/mL"],
    },
    {
      id: "M-1005",
      name: "Ibuprofeno",
      category: "Antiinflamatorio",
      presentations: ["Suspensión 100mg/5mL", "Tabletas 200mg", "Tabletas 400mg"],
    },
    {
      id: "M-1006",
      name: "Cetirizina",
      category: "Antihistamínico",
      presentations: ["Jarabe 5mg/5mL", "Tabletas 10mg"],
    },
    {
      id: "M-1007",
      name: "Fluticasona",
      category: "Corticosteroide",
      presentations: ["Inhalador 50mcg/dosis", "Spray nasal 50mcg/dosis"],
    },
    { id: "M-1008", name: "Hidrocortisona", category: "Corticosteroide", presentations: ["Crema 1%", "Ungüento 1%"] },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50">
      <DashboardHeader />
      <div className="flex">
        <DashboardNav />
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-slate-800">Recetas Médicas</h1>
              <p className="text-slate-500">Gestión de recetas y medicamentos</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input placeholder="Buscar receta..." className="pl-9 w-64 bg-white" />
              </div>
              <Button variant="outline" className="text-sky-700 border-sky-200">
                <Filter className="h-4 w-4 mr-2" />
                Filtrar
              </Button>
              <Button className="bg-sky-700 hover:bg-sky-800">
                <Plus className="h-4 w-4 mr-2" />
                Nueva Receta
              </Button>
            </div>
          </div>

          <Tabs defaultValue="active" className="mb-6">
            <TabsList className="mb-4 bg-white border border-slate-200 shadow-sm">
              <TabsTrigger value="active">Recetas Activas</TabsTrigger>
              <TabsTrigger value="history">Historial de Recetas</TabsTrigger>
              <TabsTrigger value="medications">Medicamentos</TabsTrigger>
              <TabsTrigger value="new">Nueva Receta</TabsTrigger>
            </TabsList>

            <TabsContent value="active">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Recetas Activas</CardTitle>
                    <Button variant="outline" className="text-sky-700 border-sky-200">
                      <Download className="h-4 w-4 mr-2" />
                      Exportar
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {prescriptions
                      .filter((p) => p.status === "Activa")
                      .map((prescription) => (
                        <div
                          key={prescription.id}
                          className="border rounded-lg overflow-hidden hover:border-sky-200 transition-colors"
                        >
                          <div className="flex items-center justify-between p-4 bg-sky-50 border-b border-slate-200">
                            <div className="flex items-center gap-3">
                              <Avatar className="h-10 w-10">
                                <AvatarFallback className="bg-sky-100 text-sky-700">
                                  {prescription.patient
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")
                                    .substring(0, 2)}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="flex items-center gap-2">
                                  <h3 className="font-medium">{prescription.patient}</h3>
                                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                    {prescription.status}
                                  </Badge>
                                </div>
                                <div className="text-sm text-slate-500">
                                  {prescription.age} años • {prescription.gender} • ID: {prescription.patientId}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="text-sm text-slate-500">
                                <div className="flex items-center gap-1">
                                  <Calendar className="h-3 w-3" />
                                  <span>{prescription.date}</span>
                                </div>
                                <div>{prescription.doctor}</div>
                              </div>
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
                            </div>
                          </div>
                          <div className="p-4">
                            <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                              <Pill className="h-4 w-4 text-sky-700" />
                              Medicamentos
                            </h4>
                            <div className="space-y-2">
                              {prescription.medications.map((medication, index) => (
                                <div key={index} className="p-3 bg-white border rounded-md">
                                  <div className="font-medium">
                                    {medication.name} ({medication.dosage})
                                  </div>
                                  <div className="text-sm text-slate-600">{medication.instructions}</div>
                                </div>
                              ))}
                            </div>
                            <div className="flex justify-end mt-4 gap-2">
                              <Button variant="outline" size="sm">
                                <Printer className="h-4 w-4 mr-2" />
                                Imprimir
                              </Button>
                              <Button variant="outline" size="sm" className="text-amber-600 border-amber-200">
                                <Clipboard className="h-4 w-4 mr-2" />
                                Renovar
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="history">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Historial de Recetas</CardTitle>
                    <div className="flex items-center gap-2">
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
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader className="bg-sky-50">
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Paciente</TableHead>
                        <TableHead>Fecha</TableHead>
                        <TableHead>Medicamentos</TableHead>
                        <TableHead>Doctor</TableHead>
                        <TableHead>Estado</TableHead>
                        <TableHead className="text-right">Acciones</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {prescriptions.map((prescription) => (
                        <TableRow key={prescription.id} className="hover:bg-sky-50">
                          <TableCell className="font-medium">{prescription.id}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Avatar className="h-6 w-6">
                                <AvatarFallback className="bg-sky-100 text-sky-700 text-xs">
                                  {prescription.patient
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")
                                    .substring(0, 2)}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-medium">{prescription.patient}</div>
                                <div className="text-xs text-slate-500">
                                  {prescription.age} años • {prescription.gender}
                                </div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>{prescription.date}</TableCell>
                          <TableCell>
                            <div className="text-sm">
                              {prescription.medications.map((med, i) => (
                                <div key={i} className="text-slate-600">
                                  {med.name}
                                  {i < prescription.medications.length - 1 ? ", " : ""}
                                </div>
                              ))}
                            </div>
                          </TableCell>
                          <TableCell>{prescription.doctor}</TableCell>
                          <TableCell>
                            <Badge
                              variant="outline"
                              className={
                                prescription.status === "Activa"
                                  ? "bg-green-50 text-green-700 border-green-200"
                                  : "bg-slate-50 text-slate-700 border-slate-200"
                              }
                            >
                              {prescription.status}
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
                                  <Clipboard className="mr-2 h-4 w-4" />
                                  Renovar
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

            <TabsContent value="medications">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Catálogo de Medicamentos</CardTitle>
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <Input placeholder="Buscar medicamento..." className="pl-9 w-64 bg-white" />
                      </div>
                      <Button variant="outline" className="text-sky-700 border-sky-200">
                        <Filter className="h-4 w-4 mr-2" />
                        Filtrar
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {medications.map((medication) => (
                      <div
                        key={medication.id}
                        className="border rounded-lg p-4 hover:border-sky-200 hover:bg-sky-50 transition-colors"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div className="bg-sky-100 p-2 rounded-full">
                            <Pill className="h-5 w-5 text-sky-700" />
                          </div>
                          <div>
                            <h3 className="font-medium">{medication.name}</h3>
                            <p className="text-sm text-slate-500">{medication.category}</p>
                          </div>
                        </div>
                        <div className="mt-3">
                          <h4 className="text-sm font-medium mb-1">Presentaciones:</h4>
                          <div className="space-y-1">
                            {medication.presentations.map((presentation, index) => (
                              <div key={index} className="text-sm text-slate-600 flex items-center gap-2">
                                <div className="w-1 h-1 rounded-full bg-sky-700"></div>
                                <span>{presentation}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="mt-4 flex justify-end">
                          <Button variant="outline" size="sm">
                            <Plus className="h-4 w-4 mr-2" />
                            Recetar
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="new">
              <Card>
                <CardHeader>
                  <CardTitle>Nueva Receta</CardTitle>
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
                        <Label htmlFor="diagnosis">Diagnóstico</Label>
                        <Input id="diagnosis" placeholder="Diagnóstico principal" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="prescription-date">Fecha</Label>
                        <Input id="prescription-date" type="date" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="prescription-notes">Notas</Label>
                        <Textarea
                          id="prescription-notes"
                          placeholder="Notas adicionales..."
                          className="min-h-[100px]"
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <Label>Medicamentos</Label>
                          <Button variant="outline" size="sm" className="h-8">
                            <Plus className="h-3 w-3 mr-1" />
                            Añadir
                          </Button>
                        </div>

                        <div className="space-y-3">
                          <div className="border rounded-md p-3">
                            <div className="grid grid-cols-1 gap-3">
                              <div className="space-y-2">
                                <Label htmlFor="medication-1">Medicamento</Label>
                                <Select>
                                  <SelectTrigger id="medication-1">
                                    <SelectValue placeholder="Seleccionar medicamento" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {medications.map((med) => (
                                      <SelectItem key={med.id} value={med.id}>
                                        {med.name}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="presentation-1">Presentación</Label>
                                <Select>
                                  <SelectTrigger id="presentation-1">
                                    <SelectValue placeholder="Seleccionar presentación" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="jarabe-160">Jarabe 160mg/5mL</SelectItem>
                                    <SelectItem value="tableta-500">Tableta 500mg</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="dosage-1">Dosis e Instrucciones</Label>
                                <Textarea
                                  id="dosage-1"
                                  placeholder="Ej: 7.5mL vía oral cada 6 horas por 3 días"
                                  className="min-h-[60px]"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="border rounded-md p-3">
                            <div className="grid grid-cols-1 gap-3">
                              <div className="space-y-2">
                                <Label htmlFor="medication-2">Medicamento</Label>
                                <Select>
                                  <SelectTrigger id="medication-2">
                                    <SelectValue placeholder="Seleccionar medicamento" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {medications.map((med) => (
                                      <SelectItem key={med.id} value={med.id}>
                                        {med.name}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="presentation-2">Presentación</Label>
                                <Select>
                                  <SelectTrigger id="presentation-2">
                                    <SelectValue placeholder="Seleccionar presentación" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="jarabe-5">Jarabe 5mg/5mL</SelectItem>
                                    <SelectItem value="tableta-10">Tableta 10mg</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="dosage-2">Dosis e Instrucciones</Label>
                                <Textarea
                                  id="dosage-2"
                                  placeholder="Ej: 5mL vía oral cada 24 horas por 7 días"
                                  className="min-h-[60px]"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 p-3 bg-amber-50 border border-amber-200 rounded-md">
                        <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0" />
                        <p className="text-sm text-amber-800">
                          Verifique las dosis y posibles interacciones antes de generar la receta.
                        </p>
                      </div>

                      <div className="pt-4 flex justify-end gap-2">
                        <Button variant="outline">Cancelar</Button>
                        <Button className="bg-sky-700 hover:bg-sky-800">
                          <ClipboardCheck className="h-4 w-4 mr-2" />
                          Generar Receta
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
