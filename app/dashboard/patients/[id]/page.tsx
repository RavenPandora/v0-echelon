import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import DashboardHeader from "@/components/dashboard-header"
import DashboardNav from "@/components/dashboard-nav"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  Clock,
  FileText,
  Heart,
  Activity,
  Pill,
  MessageSquare,
  CalendarDays,
  Thermometer,
  Scale,
  Ruler,
  Droplet,
  TreesIcon as Lungs,
  BarChart2,
  Stethoscope,
  ClipboardList,
  FileImage,
  Users,
  Baby,
  Plus,
  Trash2,
} from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function PatientDetailPage({ params }: { params: { id: string } }) {
  // En una aplicación real, obtendríamos los datos del paciente desde una API o base de datos
  const patient = {
    id: params.id,
    name: "María Pérez González",
    age: 5,
    gender: "Femenino",
    birthDate: "10/05/2018",
    lastVisit: "15/04/2023",
    nextVisit: "22/05/2023",
    condition: "Faringoamigdalitis",
    status: "Activo",
    doctor: "Dra. Sara Jiménez",
    specialty: "Pediatría",
    allergies: "Polen, Penicilina",
    bloodType: "O+",
    weight: "18 kg",
    height: "110 cm",
    headCircumference: "52 cm",
    temperature: "36.5 °C",
    oxygenSaturation: "98%",
    heartRate: "90 lpm",
    respiratoryRate: "20 rpm",
    bloodPressure: "100/60 mmHg",
    address: "Calle Principal 123, Ciudad de México",
    phone: "(555) 123-4567",
    email: "padres.maria@ejemplo.com",
    insurance: "Seguro Médico Nacional",
    policyNumber: "SMN-12345678",
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <DashboardHeader />
      <div className="flex">
        <DashboardNav />
        <main className="flex-1 p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 bg-white p-4 rounded-lg shadow-sm border border-sky-100">
            <div className="flex items-center gap-4">
              <Avatar className="h-20 w-20 border-4 border-white shadow-md bg-gradient-to-br from-sky-100 to-sky-200">
                <AvatarImage src={`/placeholder.svg?text=${patient.name.charAt(0)}`} />
                <AvatarFallback className="bg-sky-100 text-sky-700 text-xl">
                  {patient.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .substring(0, 2)}
                </AvatarFallback>
                <Baby className="absolute bottom-0 right-0 h-6 w-6 text-sky-700 bg-white rounded-full p-1 shadow-sm" />
              </Avatar>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-bold text-slate-800">{patient.name}</h1>
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
                </div>
                <div className="flex items-center gap-4 text-slate-500 mt-1">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {patient.age} años
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart className="h-4 w-4" />
                    {patient.bloodType}
                  </span>
                  <span className="flex items-center gap-1">
                    <FileText className="h-4 w-4" />
                    ID: {patient.id}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" className="text-sky-700 border-sky-200 hover:bg-sky-50">
                <MessageSquare className="h-4 w-4 mr-2" />
                Enviar Mensaje
              </Button>
              <Button variant="outline" className="text-sky-700 border-sky-200 hover:bg-sky-50">
                <CalendarDays className="h-4 w-4 mr-2" />
                Programar Cita
              </Button>
              <Button className="bg-sky-700 hover:bg-sky-800">
                <FileText className="h-4 w-4 mr-2" />
                Editar Expediente
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <Card className="border-sky-100 shadow-sm hover:shadow transition-shadow">
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
            <Card className="border-sky-100 shadow-sm hover:shadow transition-shadow">
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
            <Card className="border-sky-100 shadow-sm hover:shadow transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-sky-700" />
                  <div>
                    <p className="text-sm font-medium">Condición</p>
                    <p className="text-lg">{patient.condition}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-sky-100 shadow-sm hover:shadow transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <Pill className="h-5 w-5 text-sky-700" />
                  <div>
                    <p className="text-sm font-medium">Alergias</p>
                    <p className="text-lg">{patient.allergies}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="info" className="mb-6">
            <TabsList className="bg-white border border-slate-200 rounded-lg p-1">
              <TabsTrigger value="info" className="data-[state=active]:bg-sky-50 data-[state=active]:text-sky-700">
                Información Personal
              </TabsTrigger>
              <TabsTrigger value="vitals" className="data-[state=active]:bg-sky-50 data-[state=active]:text-sky-700">
                Signos Vitales
              </TabsTrigger>
              <TabsTrigger value="medical" className="data-[state=active]:bg-sky-50 data-[state=active]:text-sky-700">
                Historial Médico
              </TabsTrigger>
              <TabsTrigger value="studies" className="data-[state=active]:bg-sky-50 data-[state=active]:text-sky-700">
                Estudios
              </TabsTrigger>
              <TabsTrigger value="treatment" className="data-[state=active]:bg-sky-50 data-[state=active]:text-sky-700">
                Tratamiento
              </TabsTrigger>
              <TabsTrigger
                value="appointments"
                className="data-[state=active]:bg-sky-50 data-[state=active]:text-sky-700"
              >
                Citas
              </TabsTrigger>
              <TabsTrigger value="documents" className="data-[state=active]:bg-sky-50 data-[state=active]:text-sky-700">
                Documentos
              </TabsTrigger>
            </TabsList>

            {/* Información Personal */}
            <TabsContent value="info" className="mt-4">
              <Card className="border-sky-100 shadow-sm">
                <CardHeader className="bg-gradient-to-r from-sky-50 to-white border-b border-sky-100">
                  <CardTitle className="text-sky-800">Información Personal</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-sm font-medium text-slate-500">Nombre Completo</h3>
                        <p className="font-medium">{patient.name}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-slate-500">Fecha de Nacimiento</h3>
                        <p>{patient.birthDate}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-slate-500">Edad</h3>
                        <p>{patient.age} años</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-slate-500">Sexo</h3>
                        <p>{patient.gender}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-slate-500">Tipo de Sangre</h3>
                        <p>{patient.bloodType}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-slate-500">Alergias</h3>
                        <p>{patient.allergies}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-sm font-medium text-slate-500">Dirección</h3>
                        <p>{patient.address}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-slate-500">Teléfono</h3>
                        <p>{patient.phone}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-slate-500">Correo Electrónico</h3>
                        <p>{patient.email}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-slate-500">Seguro Médico</h3>
                        <p>{patient.insurance}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-slate-500">Número de Póliza</h3>
                        <p>{patient.policyNumber}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-slate-500">Médico Tratante</h3>
                        <p>
                          {patient.doctor} - {patient.specialty}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Signos Vitales */}
            <TabsContent value="vitals" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Card className="border-sky-100 shadow-sm">
                  <CardHeader className="bg-gradient-to-r from-sky-50 to-white border-b border-sky-100">
                    <CardTitle className="text-sky-800">Último Registro (15/04/2023)</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2 p-3 bg-sky-50 rounded-md border border-sky-100">
                        <Thermometer className="h-5 w-5 text-sky-700" />
                        <div>
                          <p className="text-xs text-slate-500">Temperatura</p>
                          <p className="font-medium">{patient.temperature}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 p-3 bg-sky-50 rounded-md border border-sky-100">
                        <Scale className="h-5 w-5 text-sky-700" />
                        <div>
                          <p className="text-xs text-slate-500">Peso</p>
                          <p className="font-medium">{patient.weight}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 p-3 bg-sky-50 rounded-md border border-sky-100">
                        <Ruler className="h-5 w-5 text-sky-700" />
                        <div>
                          <p className="text-xs text-slate-500">Talla</p>
                          <p className="font-medium">{patient.height}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 p-3 bg-sky-50 rounded-md border border-sky-100">
                        <Activity className="h-5 w-5 text-sky-700" />
                        <div>
                          <p className="text-xs text-slate-500">Perímetro Cefálico</p>
                          <p className="font-medium">{patient.headCircumference}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 p-3 bg-sky-50 rounded-md border border-sky-100">
                        <Droplet className="h-5 w-5 text-sky-700" />
                        <div>
                          <p className="text-xs text-slate-500">Saturación de Oxígeno</p>
                          <p className="font-medium">{patient.oxygenSaturation}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 p-3 bg-sky-50 rounded-md border border-sky-100">
                        <Heart className="h-5 w-5 text-sky-700" />
                        <div>
                          <p className="text-xs text-slate-500">Frecuencia Cardíaca</p>
                          <p className="font-medium">{patient.heartRate}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 p-3 bg-sky-50 rounded-md border border-sky-100">
                        <Lungs className="h-5 w-5 text-sky-700" />
                        <div>
                          <p className="text-xs text-slate-500">Frecuencia Respiratoria</p>
                          <p className="font-medium">{patient.respiratoryRate}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 p-3 bg-sky-50 rounded-md border border-sky-100">
                        <BarChart2 className="h-5 w-5 text-sky-700" />
                        <div>
                          <p className="text-xs text-slate-500">Presión Arterial</p>
                          <p className="font-medium">{patient.bloodPressure}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-sky-100 shadow-sm">
                  <CardHeader className="bg-gradient-to-r from-sky-50 to-white border-b border-sky-100">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-sky-800">Registrar Nuevos Signos Vitales</CardTitle>
                      <Button className="bg-sky-700 hover:bg-sky-800">
                        <Plus className="h-4 w-4 mr-2" />
                        Guardar
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Temperatura (°C)</label>
                        <input
                          type="number"
                          step="0.1"
                          placeholder="36.5"
                          className="w-full p-2 border border-sky-100 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Peso (kg)</label>
                        <input
                          type="number"
                          step="0.1"
                          placeholder="18.0"
                          className="w-full p-2 border border-sky-100 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Talla (cm)</label>
                        <input
                          type="number"
                          placeholder="110"
                          className="w-full p-2 border border-sky-100 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Perímetro Cefálico (cm)</label>
                        <input
                          type="number"
                          step="0.1"
                          placeholder="52.0"
                          className="w-full p-2 border border-sky-100 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Saturación de Oxígeno (%)</label>
                        <input
                          type="number"
                          placeholder="98"
                          className="w-full p-2 border border-sky-100 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Frecuencia Cardíaca (lpm)</label>
                        <input
                          type="number"
                          placeholder="90"
                          className="w-full p-2 border border-sky-100 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Frecuencia Respiratoria (rpm)</label>
                        <input
                          type="number"
                          placeholder="20"
                          className="w-full p-2 border border-sky-100 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Presión Arterial (mmHg)</label>
                        <div className="flex gap-2">
                          <input
                            type="number"
                            placeholder="100"
                            className="w-full p-2 border border-sky-100 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                          />
                          <span className="flex items-center">/</span>
                          <input
                            type="number"
                            placeholder="60"
                            className="w-full p-2 border border-sky-100 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-sky-100 shadow-sm">
                <CardHeader className="bg-gradient-to-r from-sky-50 to-white border-b border-sky-100">
                  <CardTitle className="text-sky-800">Historial de Signos Vitales</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ScrollArea className="h-[300px]">
                    <Table>
                      <TableHeader className="bg-sky-50 sticky top-0">
                        <TableRow>
                          <TableHead>Fecha</TableHead>
                          <TableHead>Temp.</TableHead>
                          <TableHead>Peso</TableHead>
                          <TableHead>Talla</TableHead>
                          <TableHead>P. Cefálico</TableHead>
                          <TableHead>Sat. O₂</TableHead>
                          <TableHead>FC</TableHead>
                          <TableHead>FR</TableHead>
                          <TableHead>PA</TableHead>
                          <TableHead className="text-right">Acciones</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>15/04/2023</TableCell>
                          <TableCell>36.5 °C</TableCell>
                          <TableCell>18 kg</TableCell>
                          <TableCell>110 cm</TableCell>
                          <TableCell>52 cm</TableCell>
                          <TableCell>98%</TableCell>
                          <TableCell>90 lpm</TableCell>
                          <TableCell>20 rpm</TableCell>
                          <TableCell>100/60</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="icon">
                              <FileText className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>10/03/2023</TableCell>
                          <TableCell>36.7 °C</TableCell>
                          <TableCell>17.5 kg</TableCell>
                          <TableCell>109 cm</TableCell>
                          <TableCell>51.5 cm</TableCell>
                          <TableCell>99%</TableCell>
                          <TableCell>92 lpm</TableCell>
                          <TableCell>22 rpm</TableCell>
                          <TableCell>98/60</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="icon">
                              <FileText className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>15/02/2023</TableCell>
                          <TableCell>36.8 °C</TableCell>
                          <TableCell>17 kg</TableCell>
                          <TableCell>108 cm</TableCell>
                          <TableCell>51 cm</TableCell>
                          <TableCell>98%</TableCell>
                          <TableCell>94 lpm</TableCell>
                          <TableCell>21 rpm</TableCell>
                          <TableCell>95/60</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="icon">
                              <FileText className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Historial Médico */}
            <TabsContent value="medical" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Card className="border-sky-100 shadow-sm">
                  <CardHeader className="bg-gradient-to-r from-sky-50 to-white border-b border-sky-100">
                    <CardTitle className="text-sky-800">Antecedentes Personales</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="p-3 bg-sky-50 rounded-md border border-sky-100">
                        <h3 className="font-medium mb-2">Enfermedades Previas</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Varicela (Enero 2021)</li>
                          <li>Otitis media aguda (Marzo 2022)</li>
                          <li>Bronquiolitis (Noviembre 2022)</li>
                        </ul>
                      </div>

                      <div className="p-3 bg-sky-50 rounded-md border border-sky-100">
                        <h3 className="font-medium mb-2">Cirugías</h3>
                        <p className="text-sm">No se reportan cirugías previas</p>
                      </div>

                      <div className="p-3 bg-sky-50 rounded-md border border-sky-100">
                        <h3 className="font-medium mb-2">Hospitalizaciones</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Noviembre 2022 - Bronquiolitis (3 días)</li>
                        </ul>
                      </div>

                      <div className="p-3 bg-sky-50 rounded-md border border-sky-100">
                        <h3 className="font-medium mb-2">Desarrollo</h3>
                        <p className="text-sm">
                          Desarrollo psicomotor normal para la edad. Sostén cefálico a los 3 meses, sedestación a los 6
                          meses, bipedestación a los 11 meses, marcha a los 13 meses.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-sky-100 shadow-sm">
                  <CardHeader className="bg-gradient-to-r from-sky-50 to-white border-b border-sky-100">
                    <CardTitle className="text-sky-800">Antecedentes Familiares</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="p-3 bg-sky-50 rounded-md border border-sky-100">
                        <h3 className="font-medium mb-2">Madre</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Asma bronquial</li>
                          <li>Rinitis alérgica</li>
                        </ul>
                      </div>

                      <div className="p-3 bg-sky-50 rounded-md border border-sky-100">
                        <h3 className="font-medium mb-2">Padre</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Hipertensión arterial</li>
                        </ul>
                      </div>

                      <div className="p-3 bg-sky-50 rounded-md border border-sky-100">
                        <h3 className="font-medium mb-2">Abuelos Maternos</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Abuela: Diabetes mellitus tipo 2</li>
                          <li>Abuelo: Enfermedad coronaria</li>
                        </ul>
                      </div>

                      <div className="p-3 bg-sky-50 rounded-md border border-sky-100">
                        <h3 className="font-medium mb-2">Abuelos Paternos</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Abuela: Hipertensión arterial</li>
                          <li>Abuelo: Cáncer de próstata</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="border-sky-100 shadow-sm">
                  <CardHeader className="bg-gradient-to-r from-sky-50 to-white border-b border-sky-100">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-sky-800">Descripción General</CardTitle>
                      <Button variant="outline" size="sm" className="text-sky-700 border-sky-200 hover:bg-sky-50">
                        <FileText className="h-4 w-4 mr-2" />
                        Ver Historial
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="p-4 bg-sky-50 rounded-md border border-sky-100">
                      <p className="text-sm">
                        Paciente femenino de 5 años de edad que acude a consulta por presentar fiebre de 38.5°C de 2
                        días de evolución, acompañada de tos seca y rinorrea hialina. La madre refiere que la niña ha
                        presentado disminución del apetito y malestar general. No ha recibido medicación previa. No hay
                        antecedentes de contacto con personas enfermas.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-sky-100 shadow-sm">
                  <CardHeader className="bg-gradient-to-r from-sky-50 to-white border-b border-sky-100">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-sky-800">Revisión Física</CardTitle>
                      <Button variant="outline" size="sm" className="text-sky-700 border-sky-200 hover:bg-sky-50">
                        <FileText className="h-4 w-4 mr-2" />
                        Ver Historial
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="p-4 bg-sky-50 rounded-md border border-sky-100">
                      <p className="text-sm">
                        Paciente consciente, orientada, hidratada, con buena coloración de tegumentos. Orofaringe
                        hiperémica con presencia de exudado blanquecino en amígdalas. Rinorrea hialina. Campos
                        pulmonares con adecuada entrada y salida de aire, sin agregados. Abdomen blando, depresible, no
                        doloroso a la palpación. Extremidades íntegras, sin alteraciones. Neurológicamente íntegra.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-sky-100 shadow-sm">
                  <CardHeader className="bg-gradient-to-r from-sky-50 to-white border-b border-sky-100">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-sky-800">Diagnósticos</CardTitle>
                      <Button className="bg-sky-700 hover:bg-sky-800" size="sm">
                        <Plus className="h-4 w-4 mr-2" />
                        Añadir Diagnóstico
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-sky-50 rounded-md border border-sky-100">
                        <div className="flex items-center gap-3">
                          <Stethoscope className="h-5 w-5 text-sky-700" />
                          <div>
                            <p className="font-medium">Faringoamigdalitis aguda</p>
                            <p className="text-sm text-slate-500">Diagnóstico principal • 15/04/2023</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-sky-50 rounded-md border border-sky-100">
                        <div className="flex items-center gap-3">
                          <Stethoscope className="h-5 w-5 text-sky-700" />
                          <div>
                            <p className="font-medium">Rinitis alérgica leve intermitente</p>
                            <p className="text-sm text-slate-500">Diagnóstico secundario • 15/04/2023</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-sky-100 shadow-sm">
                  <CardHeader className="bg-gradient-to-r from-sky-50 to-white border-b border-sky-100">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-sky-800">Interconsultas con Otras Especialidades</CardTitle>
                      <Button className="bg-sky-700 hover:bg-sky-800" size="sm">
                        <Plus className="h-4 w-4 mr-2" />
                        Solicitar Interconsulta
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-sky-50 rounded-md border border-sky-100">
                        <div className="flex items-center gap-3">
                          <Users className="h-5 w-5 text-sky-700" />
                          <div>
                            <p className="font-medium">Alergología Pediátrica</p>
                            <p className="text-sm text-slate-500">Solicitada: 15/04/2023 • Pendiente</p>
                          </div>
                        </div>
                        <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                          Pendiente
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-sky-50 rounded-md border border-sky-100">
                        <div className="flex items-center gap-3">
                          <Users className="h-5 w-5 text-sky-700" />
                          <div>
                            <p className="font-medium">Otorrinolaringología Pediátrica</p>
                            <p className="text-sm text-slate-500">
                              Solicitada: 15/04/2023 • Programada para 25/04/2023
                            </p>
                          </div>
                        </div>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                          Programada
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Estudios */}
            <TabsContent value="studies" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Card className="border-sky-100 shadow-sm">
                  <CardHeader className="bg-gradient-to-r from-sky-50 to-white border-b border-sky-100">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-sky-800 flex items-center gap-2">
                        <ClipboardList className="h-5 w-5 text-sky-700" />
                        Laboratorios
                      </CardTitle>
                      <Button className="bg-sky-700 hover:bg-sky-800" size="sm">
                        <Plus className="h-4 w-4 mr-2" />
                        Solicitar
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="bg-sky-50 p-4 rounded-md border border-sky-100">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Biometría Hemática</span>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Completado
                          </Badge>
                        </div>
                        <p className="text-sm text-slate-500 mt-1">Fecha: 15/04/2023</p>
                        <div className="grid grid-cols-2 gap-2 text-sm mt-3">
                          <div>
                            <p className="text-slate-500">Leucocitos</p>
                            <p>8,500 /mm³</p>
                          </div>
                          <div>
                            <p className="text-slate-500">Hemoglobina</p>
                            <p>12.5 g/dL</p>
                          </div>
                          <div>
                            <p className="text-slate-500">Plaquetas</p>
                            <p>250,000 /mm³</p>
                          </div>
                          <div>
                            <p className="text-slate-500">Neutrófilos</p>
                            <p>55%</p>
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full mt-3 text-sky-700 border-sky-200 hover:bg-sky-50"
                        >
                          Ver resultados completos
                        </Button>
                      </div>

                      <div className="bg-sky-50 p-4 rounded-md border border-sky-100">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Química Sanguínea</span>
                          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                            Pendiente
                          </Badge>
                        </div>
                        <p className="text-sm text-slate-500 mt-1">Programado para 20/04/2023</p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full mt-3 text-sky-700 border-sky-200 hover:bg-sky-50"
                        >
                          Solicitar resultados
                        </Button>
                      </div>

                      <div className="bg-sky-50 p-4 rounded-md border border-sky-100">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Examen General de Orina</span>
                          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                            Pendiente
                          </Badge>
                        </div>
                        <p className="text-sm text-slate-500 mt-1">Programado para 20/04/2023</p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full mt-3 text-sky-700 border-sky-200 hover:bg-sky-50"
                        >
                          Solicitar resultados
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-sky-100 shadow-sm">
                  <CardHeader className="bg-gradient-to-r from-sky-50 to-white border-b border-sky-100">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-sky-800 flex items-center gap-2">
                        <FileImage className="h-5 w-5 text-sky-700" />
                        Estudios de Imagenología
                      </CardTitle>
                      <Button className="bg-sky-700 hover:bg-sky-800" size="sm">
                        <Plus className="h-4 w-4 mr-2" />
                        Solicitar
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="bg-sky-50 p-4 rounded-md border border-sky-100">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Radiografía de Tórax</span>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Completado
                          </Badge>
                        </div>
                        <p className="text-sm text-slate-500 mt-1">Fecha: 15/04/2023</p>
                        <div className="bg-white border border-sky-100 rounded-md p-3 text-sm mt-3">
                          <p className="font-medium">Hallazgos:</p>
                          <p className="text-slate-600">
                            Campos pulmonares bien ventilados, sin evidencia de consolidaciones o infiltrados. Silueta
                            cardíaca de tamaño normal. No se observan alteraciones óseas.
                          </p>
                        </div>
                        <div className="flex justify-center p-3 bg-white border border-sky-100 rounded-md mt-3">
                          <div className="w-32 h-32 bg-slate-200 flex items-center justify-center">
                            <FileImage className="h-10 w-10 text-slate-400" />
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full mt-3 text-sky-700 border-sky-200 hover:bg-sky-50"
                        >
                          Ver imagen completa
                        </Button>
                      </div>

                      <div className="bg-sky-50 p-4 rounded-md border border-sky-100">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Ecografía Abdominal</span>
                          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                            Pendiente
                          </Badge>
                        </div>
                        <p className="text-sm text-slate-500 mt-1">Programado para 22/04/2023</p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full mt-3 text-sky-700 border-sky-200 hover:bg-sky-50"
                        >
                          Verificar estado
                        </Button>
                      </div>

                      <div className="bg-sky-50 p-4 rounded-md border border-sky-100">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Tomografía Computarizada de Senos Paranasales</span>
                          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                            Programado
                          </Badge>
                        </div>
                        <p className="text-sm text-slate-500 mt-1">Programado para 25/04/2023</p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full mt-3 text-sky-700 border-sky-200 hover:bg-sky-50"
                        >
                          Ver detalles
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-sky-100 shadow-sm">
                <CardHeader className="bg-gradient-to-r from-sky-50 to-white border-b border-sky-100">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-sky-800 flex items-center gap-2">
                      <FileText className="h-5 w-5 text-sky-700" />
                      Estudios Especiales
                    </CardTitle>
                    <Button className="bg-sky-700 hover:bg-sky-800" size="sm">
                      <Plus className="h-4 w-4 mr-2" />
                      Solicitar
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="bg-sky-50 p-4 rounded-md border border-sky-100">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Pruebas de Alergia</span>
                        <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                          Solicitado
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-500 mt-1">Fecha de solicitud: 15/04/2023</p>
                      <p className="text-sm text-slate-600 mt-2">
                        Pruebas cutáneas para determinar sensibilización a alérgenos comunes.
                      </p>
                      <div className="flex justify-end mt-3">
                        <Button variant="outline" size="sm" className="text-sky-700 border-sky-200 hover:bg-sky-50">
                          Ver detalles
                        </Button>
                      </div>
                    </div>

                    <div className="bg-sky-50 p-4 rounded-md border border-sky-100">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Estudio Histopatológico</span>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                          Programado
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-500 mt-1">Fecha de solicitud: 16/04/2023</p>
                      <p className="text-sm text-slate-600 mt-2">
                        Biopsia de piel para descartar dermatitis atópica vs. dermatitis de contacto.
                      </p>
                      <div className="flex justify-end mt-3">
                        <Button variant="outline" size="sm" className="text-sky-700 border-sky-200 hover:bg-sky-50">
                          Ver detalles
                        </Button>
                      </div>
                    </div>

                    <div className="bg-sky-50 p-4 rounded-md border border-sky-100">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Centellograma Óseo</span>
                        <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                          Cancelado
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-500 mt-1">Fecha de solicitud: 10/03/2023</p>
                      <p className="text-sm text-slate-600 mt-2">Estudio cancelado por mejoría clínica del paciente.</p>
                      <div className="flex justify-end mt-3">
                        <Button variant="outline" size="sm" className="text-sky-700 border-sky-200 hover:bg-sky-50">
                          Ver detalles
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Tratamiento */}
            <TabsContent value="treatment" className="mt-4">
              <div className="space-y-6">
                <Card className="border-sky-100 shadow-sm">
                  <CardHeader className="bg-gradient-to-r from-sky-50 to-white border-b border-sky-100">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-sky-800">Plan de Tratamiento</CardTitle>
                      <Button className="bg-sky-700 hover:bg-sky-800" size="sm">
                        <Plus className="h-4 w-4 mr-2" />
                        Nuevo Tratamiento
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="p-4 bg-sky-50 rounded-md border border-sky-100">
                      <h3 className="font-medium mb-3">Tratamiento Actual (15/04/2023)</h3>
                      <ol className="list-decimal list-inside space-y-2 text-sm">
                        <li>
                          Paracetamol 160mg/5mL, 7.5mL vía oral cada 6 horas por 3 días o hasta remisión de la fiebre.
                        </li>
                        <li>Loratadina 5mg/5mL, 5mL vía oral cada 24 horas por 7 días.</li>
                        <li>Abundantes líquidos.</li>
                        <li>Reposo relativo.</li>
                        <li>Control en 7 días o antes si hay deterioro clínico.</li>
                      </ol>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-sky-100 shadow-sm">
                  <CardHeader className="bg-gradient-to-r from-sky-50 to-white border-b border-sky-100">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-sky-800">Medicamentos Activos</CardTitle>
                      <Button className="bg-sky-700 hover:bg-sky-800" size="sm">
                        <Plus className="h-4 w-4 mr-2" />
                        Prescribir
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="p-4 bg-sky-50 rounded-md border border-sky-100">
                        <div className="flex justify-between">
                          <h4 className="font-medium">Paracetamol</h4>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Activo
                          </Badge>
                        </div>
                        <p className="text-sm text-slate-600 mt-1">160mg/5mL, Suspensión oral</p>
                        <div className="grid grid-cols-2 gap-4 mt-3">
                          <div>
                            <p className="text-xs text-slate-500">Dosis</p>
                            <p className="text-sm">7.5mL vía oral cada 6 horas</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500">Duración</p>
                            <p className="text-sm">3 días o hasta remisión de la fiebre</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500">Inicio</p>
                            <p className="text-sm">15/04/2023</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500">Fin estimado</p>
                            <p className="text-sm">18/04/2023</p>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-sky-50 rounded-md border border-sky-100">
                        <div className="flex justify-between">
                          <h4 className="font-medium">Loratadina</h4>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Activo
                          </Badge>
                        </div>
                        <p className="text-sm text-slate-600 mt-1">5mg/5mL, Jarabe</p>
                        <div className="grid grid-cols-2 gap-4 mt-3">
                          <div>
                            <p className="text-xs text-slate-500">Dosis</p>
                            <p className="text-sm">5mL vía oral cada 24 horas</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500">Duración</p>
                            <p className="text-sm">7 días</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500">Inicio</p>
                            <p className="text-sm">15/04/2023</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500">Fin estimado</p>
                            <p className="text-sm">22/04/2023</p>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-sky-50 rounded-md border border-sky-100 opacity-60">
                        <div className="flex justify-between">
                          <h4 className="font-medium">Amoxicilina</h4>
                          <Badge variant="outline" className="bg-slate-100 text-slate-700 border-slate-200">
                            Completado
                          </Badge>
                        </div>
                        <p className="text-sm text-slate-600 mt-1">250mg/5mL, Suspensión oral</p>
                        <div className="grid grid-cols-2 gap-4 mt-3">
                          <div>
                            <p className="text-xs text-slate-500">Dosis</p>
                            <p className="text-sm">5mL vía oral cada 8 horas</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500">Duración</p>
                            <p className="text-sm">7 días</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500">Inicio</p>
                            <p className="text-sm">01/03/2023</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500">Fin</p>
                            <p className="text-sm">08/03/2023</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Citas */}
            <TabsContent value="appointments" className="mt-4">
              <Card className="border-sky-100 shadow-sm">
                <CardHeader className="bg-gradient-to-r from-sky-50 to-white border-b border-sky-100">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-sky-800">Historial de Citas</CardTitle>
                    <Button className="bg-sky-700 hover:bg-sky-800">
                      <Plus className="h-4 w-4 mr-2" />
                      Programar Cita
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader className="bg-sky-50">
                      <TableRow>
                        <TableHead>Fecha</TableHead>
                        <TableHead>Tipo</TableHead>
                        <TableHead>Médico</TableHead>
                        <TableHead>Especialidad</TableHead>
                        <TableHead>Motivo</TableHead>
                        <TableHead>Estado</TableHead>
                        <TableHead className="text-right">Acciones</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>22/05/2023</TableCell>
                        <TableCell>Control</TableCell>
                        <TableCell>Dra. Sara Jiménez</TableCell>
                        <TableCell>Pediatría</TableCell>
                        <TableCell>Seguimiento faringoamigdalitis</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                            Programada
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="icon">
                            <FileText className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>15/04/2023</TableCell>
                        <TableCell>Consulta</TableCell>
                        <TableCell>Dra. Sara Jiménez</TableCell>
                        <TableCell>Pediatría</TableCell>
                        <TableCell>Fiebre y tos</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Completada
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="icon">
                            <FileText className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>10/03/2023</TableCell>
                        <TableCell>Control</TableCell>
                        <TableCell>Dra. Sara Jiménez</TableCell>
                        <TableCell>Pediatría</TableCell>
                        <TableCell>Control de rutina</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Completada
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="icon">
                            <FileText className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Documentos */}
            <TabsContent value="documents" className="mt-4">
              <Card className="border-sky-100 shadow-sm">
                <CardHeader className="bg-gradient-to-r from-sky-50 to-white border-b border-sky-100">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-sky-800">Documentos del Paciente</CardTitle>
                    <Button className="bg-sky-700 hover:bg-sky-800">
                      <Plus className="h-4 w-4 mr-2" />
                      Subir Documento
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-sky-50 rounded-md border border-sky-100">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-sky-700" />
                          <div>
                            <p className="font-medium">Cartilla de Vacunación</p>
                            <p className="text-sm text-slate-500">Subido: 15/04/2023</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="text-sky-700 border-sky-200 hover:bg-sky-50">
                          Ver Documento
                        </Button>
                      </div>
                    </div>

                    <div className="p-4 bg-sky-50 rounded-md border border-sky-100">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <FileImage className="h-5 w-5 text-sky-700" />
                          <div>
                            <p className="font-medium">Radiografía de Tórax</p>
                            <p className="text-sm text-slate-500">Subido: 15/04/2023</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="text-sky-700 border-sky-200 hover:bg-sky-50">
                          Ver Imagen
                        </Button>
                      </div>
                    </div>

                    <div className="p-4 bg-sky-50 rounded-md border border-sky-100">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-sky-700" />
                          <div>
                            <p className="font-medium">Resultados de Laboratorio</p>
                            <p className="text-sm text-slate-500">Subido: 15/04/2023</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="text-sky-700 border-sky-200 hover:bg-sky-50">
                          Ver Documento
                        </Button>
                      </div>
                    </div>

                    <div className="p-4 bg-sky-50 rounded-md border border-sky-100">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-sky-700" />
                          <div>
                            <p className="font-medium">Historial Médico Previo</p>
                            <p className="text-sm text-slate-500">Subido: 10/01/2023</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="text-sky-700 border-sky-200 hover:bg-sky-50">
                          Ver Documento
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
