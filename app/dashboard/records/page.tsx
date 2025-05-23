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
  Plus,
  Filter,
  FileText,
  Calendar,
  MoreHorizontal,
  Download,
  Upload,
  FileUp,
  Printer,
  Share2,
} from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function MedicalRecordsPage() {
  // Datos de ejemplo para registros médicos
  const records = [
    {
      id: "R-1001",
      patient: "María Pérez González",
      patientId: "P-1001",
      age: 5,
      gender: "Femenino",
      date: "15/04/2023",
      type: "Consulta",
      diagnosis: "Faringoamigdalitis aguda",
      doctor: "Dra. Sara Jiménez",
      status: "Completado",
    },
    {
      id: "R-1002",
      patient: "Juan Rodríguez López",
      patientId: "P-1002",
      age: 8,
      gender: "Masculino",
      date: "12/04/2023",
      type: "Revisión",
      diagnosis: "Asma controlada",
      doctor: "Dra. Sara Jiménez",
      status: "Completado",
    },
    {
      id: "R-1003",
      patient: "Ana Martínez Sánchez",
      patientId: "P-1003",
      age: 3,
      gender: "Femenino",
      date: "10/04/2023",
      type: "Primera vez",
      diagnosis: "Dermatitis atópica",
      doctor: "Dra. Sara Jiménez",
      status: "Completado",
    },
    {
      id: "R-1004",
      patient: "Carlos Gómez Fernández",
      patientId: "P-1004",
      age: 10,
      gender: "Masculino",
      date: "08/04/2023",
      type: "Consulta",
      diagnosis: "Rinitis alérgica",
      doctor: "Dra. Sara Jiménez",
      status: "Pendiente",
    },
  ]

  // Datos de ejemplo para documentos
  const documents = [
    {
      id: "D-1001",
      name: "Resultados de laboratorio - María Pérez",
      patient: "María Pérez González",
      patientId: "P-1001",
      date: "16/04/2023",
      type: "Laboratorio",
      size: "2.4 MB",
      format: "PDF",
    },
    {
      id: "D-1002",
      name: "Radiografía de tórax - Juan Rodríguez",
      patient: "Juan Rodríguez López",
      patientId: "P-1002",
      date: "13/04/2023",
      type: "Imagen",
      size: "8.7 MB",
      format: "DICOM",
    },
    {
      id: "D-1003",
      name: "Historial clínico - Ana Martínez",
      patient: "Ana Martínez Sánchez",
      patientId: "P-1003",
      date: "11/04/2023",
      type: "Documento",
      size: "1.2 MB",
      format: "PDF",
    },
    {
      id: "D-1004",
      name: "Pruebas de alergia - Carlos Gómez",
      patient: "Carlos Gómez Fernández",
      patientId: "P-1004",
      date: "09/04/2023",
      type: "Laboratorio",
      size: "3.5 MB",
      format: "PDF",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50">
      <DashboardHeader />
      <div className="flex">
        <DashboardNav />
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-slate-800">Registros Médicos</h1>
              <p className="text-slate-500">Gestión de expedientes y documentos clínicos</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input placeholder="Buscar registro..." className="pl-9 w-64 bg-white" />
              </div>
              <Button variant="outline" className="text-sky-700 border-sky-200">
                <Filter className="h-4 w-4 mr-2" />
                Filtrar
              </Button>
              <Button className="bg-sky-700 hover:bg-sky-800">
                <Plus className="h-4 w-4 mr-2" />
                Nuevo Registro
              </Button>
            </div>
          </div>

          <Tabs defaultValue="records" className="mb-6">
            <TabsList className="mb-4 bg-white border border-slate-200 shadow-sm">
              <TabsTrigger value="records">Registros Clínicos</TabsTrigger>
              <TabsTrigger value="documents">Documentos</TabsTrigger>
              <TabsTrigger value="upload">Subir Documentos</TabsTrigger>
            </TabsList>

            <TabsContent value="records">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Registros Clínicos Recientes</CardTitle>
                    <Button variant="outline" className="text-sky-700 border-sky-200">
                      <Download className="h-4 w-4 mr-2" />
                      Exportar
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader className="bg-sky-50">
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Paciente</TableHead>
                        <TableHead>Fecha</TableHead>
                        <TableHead>Tipo</TableHead>
                        <TableHead>Diagnóstico</TableHead>
                        <TableHead>Doctor</TableHead>
                        <TableHead>Estado</TableHead>
                        <TableHead className="text-right">Acciones</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {records.map((record) => (
                        <TableRow key={record.id} className="hover:bg-sky-50">
                          <TableCell className="font-medium">{record.id}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Avatar className="h-6 w-6">
                                <AvatarFallback className="bg-sky-100 text-sky-700 text-xs">
                                  {record.patient
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")
                                    .substring(0, 2)}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-medium">{record.patient}</div>
                                <div className="text-xs text-slate-500">
                                  {record.age} años • {record.gender}
                                </div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>{record.date}</TableCell>
                          <TableCell>{record.type}</TableCell>
                          <TableCell>{record.diagnosis}</TableCell>
                          <TableCell>{record.doctor}</TableCell>
                          <TableCell>
                            <Badge
                              variant="outline"
                              className={
                                record.status === "Completado"
                                  ? "bg-green-50 text-green-700 border-green-200"
                                  : "bg-amber-50 text-amber-700 border-amber-200"
                              }
                            >
                              {record.status}
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
                                  <Download className="mr-2 h-4 w-4" />
                                  Descargar
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

            <TabsContent value="documents">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Documentos Clínicos</CardTitle>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" className="text-sky-700 border-sky-200">
                        <Upload className="h-4 w-4 mr-2" />
                        Subir
                      </Button>
                      <Button variant="outline" className="text-sky-700 border-sky-200">
                        <Download className="h-4 w-4 mr-2" />
                        Exportar
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {documents.map((document) => (
                      <div
                        key={document.id}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-sky-50 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className="bg-sky-100 p-2 rounded-md">
                            <FileText className="h-6 w-6 text-sky-700" />
                          </div>
                          <div>
                            <h3 className="font-medium">{document.name}</h3>
                            <div className="flex items-center gap-4 text-sm text-slate-500">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                <span>{document.date}</span>
                              </div>
                              <div>{document.type}</div>
                              <div>{document.size}</div>
                              <Badge variant="outline" className="bg-slate-50 text-slate-700 border-slate-200">
                                {document.format}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            <FileText className="h-4 w-4 mr-2" />
                            Ver
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            Descargar
                          </Button>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Share2 className="mr-2 h-4 w-4" />
                                Compartir
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Printer className="mr-2 h-4 w-4" />
                                Imprimir
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="upload">
              <Card>
                <CardHeader>
                  <CardTitle>Subir Documentos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-slate-200 rounded-lg p-10 text-center">
                    <div className="flex flex-col items-center gap-4">
                      <div className="bg-sky-50 p-4 rounded-full">
                        <FileUp className="h-8 w-8 text-sky-700" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Arrastre archivos aquí o haga clic para seleccionar</h3>
                        <p className="text-sm text-slate-500 mt-1">
                          Soporta archivos PDF, JPEG, PNG, DICOM y más (máx. 50MB)
                        </p>
                      </div>
                      <Button className="bg-sky-700 hover:bg-sky-800">
                        <Upload className="h-4 w-4 mr-2" />
                        Seleccionar Archivos
                      </Button>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="font-medium mb-4">Archivos Recientes</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 bg-sky-50 rounded-md">
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-sky-700" />
                          <div>
                            <p className="font-medium">Resultados_Laboratorio_Maria.pdf</p>
                            <p className="text-xs text-slate-500">Subido hace 2 días • 2.4 MB</p>
                          </div>
                        </div>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          Completado
                        </Badge>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-sky-50 rounded-md">
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-sky-700" />
                          <div>
                            <p className="font-medium">Radiografia_Juan.dicom</p>
                            <p className="text-xs text-slate-500">Subido hace 5 días • 8.7 MB</p>
                          </div>
                        </div>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          Completado
                        </Badge>
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
