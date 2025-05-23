"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import {
  CalendarIcon,
  Save,
  FileText,
  Stethoscope,
  Users,
  FileImage,
  Activity,
  Thermometer,
  Ruler,
  Scale,
  Heart,
  TreesIcon as Lungs,
  Droplet,
  Plus,
  Trash2,
  FileCheck,
  ClipboardList,
  Pill,
  Upload,
  AlertCircle,
  History,
  User,
  Baby,
  Dna,
  Microscope,
  HeartPulse,
  Scan,
  Beaker,
  Clipboard,
  PillIcon as Prescription,
  CakeIcon as Cupcake,
  PieChartIcon as Pie,
  CandyIcon as Chocolate,
  CakeIcon as Cupcake,
  PieChartIcon as Pie,
  CandyIcon as Chocolate,
  CakeIcon as Cupcake,
  PieChartIcon as Pie,
  CandyIcon as Chocolate,
  CakeIcon as Cupcake,
  PieChartIcon as Pie,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, Printer } from "@/components/ui/tooltip"

export default function PediatricProfile() {
  const [date, setDate] = useState<Date>()
  const [birthDate, setBirthDate] = useState<Date>()
  const [photoUploaded, setPhotoUploaded] = useState<boolean>(false)
  const [spellCheck, setSpellCheck] = useState<boolean>(true)

  const handlePhotoUpload = () => {
    setPhotoUploaded(true)
  }

  return (
    <Card className="border-sky-100 shadow-md overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-sky-50 to-blue-50 border-b border-sky-100">
        <div className="flex justify-between items-center">
          <div>
            <div className="flex items-center gap-2">
              <Baby className="h-5 w-5 text-sky-700" />
              <CardTitle className="text-sky-800">Perfil Pediátrico</CardTitle>
              <Badge variant="outline" className="bg-sky-100 text-sky-700 border-sky-200">
                Pediatría
              </Badge>
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                Regular
              </Badge>
            </div>
            <CardDescription>Gestión completa de pacientes pediátricos</CardDescription>
          </div>
          <div className="flex gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" className="text-sky-700 border-sky-200">
                    <FileText className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Exportar expediente</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <Button className="bg-sky-700 hover:bg-sky-800">
              <Save className="h-4 w-4 mr-2" />
              Guardar Cambios
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6 bg-gradient-to-br from-white to-sky-50">
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          <div className="w-full md:w-1/4 flex flex-col items-center gap-4">
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-sky-100 shadow-md bg-gradient-to-br from-sky-100 to-blue-100">
              {photoUploaded ? (
                <Avatar className="w-full h-full">
                  <AvatarImage src="/placeholder.svg" alt="Foto del paciente" />
                  <AvatarFallback className="bg-sky-100 text-sky-700 text-xl">MP</AvatarFallback>
                </Avatar>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-sky-50">
                  <Baby className="h-16 w-16 text-sky-300" />
                </div>
              )}
              <Button
                variant="secondary"
                size="sm"
                className="absolute bottom-2 right-2 rounded-full w-8 h-8 p-0 bg-sky-100 hover:bg-sky-200 text-sky-700"
                onClick={handlePhotoUpload}
              >
                <Upload className="h-4 w-4" />
              </Button>
            </div>
            <div className="text-center">
              <h3 className="font-medium text-lg text-sky-800">María Pérez González</h3>
              <p className="text-sm text-slate-500">ID: PED-2023-0042</p>
            </div>
            <div className="grid grid-cols-2 gap-2 w-full">
              <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-3 rounded-md text-center border border-sky-100 shadow-sm">
                <p className="text-xs text-slate-500">Edad</p>
                <p className="font-medium text-sky-800">5 años</p>
              </div>
              <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-3 rounded-md text-center border border-sky-100 shadow-sm">
                <p className="text-xs text-slate-500">Sexo</p>
                <p className="font-medium text-sky-800">Femenino</p>
              </div>
            </div>
            <div className="w-full">
              <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-3 rounded-md border border-sky-100 shadow-sm">
                <p className="text-xs text-slate-500 mb-1">Última visita</p>
                <p className="font-medium text-sky-800">15 de abril, 2023</p>
              </div>
            </div>
            <div className="w-full">
              <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-3 rounded-md border border-sky-100 shadow-sm">
                <p className="text-xs text-slate-500 mb-1">Próxima cita</p>
                <p className="font-medium text-sky-800">15 de mayo, 2023</p>
              </div>
            </div>
            <div className="w-full">
              <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-3 rounded-md border border-sky-100 shadow-sm">
                <p className="text-xs text-slate-500 mb-1">Pediatra asignado</p>
                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarFallback className="bg-sky-700 text-white text-xs">DR</AvatarFallback>
                  </Avatar>
                  <p className="font-medium text-sky-800">Dra. Sara Rodríguez</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-3/4">
            <Tabs defaultValue="info" className="w-full">
              <TabsList className="mb-6 bg-sky-50 w-full justify-start border border-sky-100 rounded-md p-1">
                <TabsTrigger value="info" className="data-[state=active]:bg-sky-100 data-[state=active]:text-sky-800">
                  <User className="h-4 w-4 mr-2" />
                  Información
                </TabsTrigger>
                <TabsTrigger value="vitals" className="data-[state=active]:bg-sky-100 data-[state=active]:text-sky-800">
                  <Activity className="h-4 w-4 mr-2" />
                  Signos Vitales
                </TabsTrigger>
                <TabsTrigger
                  value="history"
                  className="data-[state=active]:bg-sky-100 data-[state=active]:text-sky-800"
                >
                  <History className="h-4 w-4 mr-2" />
                  Historial
                </TabsTrigger>
                <TabsTrigger
                  value="studies"
                  className="data-[state=active]:bg-sky-100 data-[state=active]:text-sky-800"
                >
                  <Microscope className="h-4 w-4 mr-2" />
                  Estudios
                </TabsTrigger>
                <TabsTrigger
                  value="treatment"
                  className="data-[state=active]:bg-sky-100 data-[state=active]:text-sky-800"
                >
                  <Pill className="h-4 w-4 mr-2" />
                  Tratamiento
                </TabsTrigger>
              </TabsList>

              <TabsContent value="info" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <Card className="border-sky-100 shadow-sm overflow-hidden">
                      <CardHeader className="bg-gradient-to-r from-sky-50 to-blue-50 py-3">
                        <CardTitle className="text-base flex items-center gap-2 text-sky-800">
                          <User className="h-4 w-4 text-sky-700" />
                          Datos Personales
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="registration-date">Fecha de Alta</Label>
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button variant="outline" className="w-full justify-start text-left font-normal">
                                  <CalendarIcon className="mr-2 h-4 w-4" />
                                  {date ? format(date, "PPP", { locale: es }) : "Seleccionar fecha"}
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0">
                                <Calendar mode="single" selected={date} onSelect={setDate} initialFocus locale={es} />
                              </PopoverContent>
                            </Popover>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="department">Departamento</Label>
                            <Select defaultValue="pediatrics">
                              <SelectTrigger>
                                <SelectValue placeholder="Seleccionar departamento" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="pediatrics">Pediatría</SelectItem>
                                <SelectItem value="neonatology">Neonatología</SelectItem>
                                <SelectItem value="pediatric-cardiology">Cardiología Pediátrica</SelectItem>
                                <SelectItem value="pediatric-neurology">Neurología Pediátrica</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="full-name">Nombre Completo</Label>
                          <Input
                            id="full-name"
                            placeholder="Nombre y apellidos del paciente"
                            defaultValue="María Pérez González"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="birth-place">Lugar de Nacimiento</Label>
                            <Input
                              id="birth-place"
                              placeholder="Ciudad, País"
                              defaultValue="Ciudad de México, México"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="birth-date">Fecha de Nacimiento</Label>
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button variant="outline" className="w-full justify-start text-left font-normal">
                                  <CalendarIcon className="mr-2 h-4 w-4" />
                                  {birthDate ? format(birthDate, "PPP", { locale: es }) : "Seleccionar fecha"}
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0">
                                <Calendar
                                  mode="single"
                                  selected={birthDate}
                                  onSelect={setBirthDate}
                                  initialFocus
                                  locale={es}
                                />
                              </PopoverContent>
                            </Popover>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="age">Edad</Label>
                            <Input id="age" type="text" placeholder="Edad" defaultValue="5 años" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="gender">Sexo</Label>
                            <Select defaultValue="female">
                              <SelectTrigger>
                                <SelectValue placeholder="Seleccionar sexo" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="male">Masculino</SelectItem>
                                <SelectItem value="female">Femenino</SelectItem>
                                <SelectItem value="other">Otro</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="patient-type">Tipo de Paciente</Label>
                          <Select defaultValue="regular">
                            <SelectTrigger>
                              <SelectValue placeholder="Seleccionar tipo" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="new">Nuevo</SelectItem>
                              <SelectItem value="regular">Regular</SelectItem>
                              <SelectItem value="control">Control</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="space-y-4">
                    <Card className="border-sky-100 shadow-sm overflow-hidden">
                      <CardHeader className="bg-gradient-to-r from-sky-50 to-blue-50 py-3">
                        <CardTitle className="text-base flex items-center gap-2 text-sky-800">
                          <Dna className="h-4 w-4 text-sky-700" />
                          Antecedentes Médicos
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="allergies" className="flex items-center">
                            <AlertCircle className="h-4 w-4 mr-2 text-amber-500" />
                            Alergias
                          </Label>
                          <Textarea
                            id="allergies"
                            placeholder="Listar todas las alergias conocidas"
                            className="min-h-[80px]"
                            defaultValue="Alergia al polen y a la penicilina. Dermatitis por contacto con látex."
                            spellCheck={spellCheck}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="family-history" className="flex items-center">
                            <Users className="h-4 w-4 mr-2 text-sky-700" />
                            Antecedentes Familiares
                          </Label>
                          <Textarea
                            id="family-history"
                            placeholder="Historial de enfermedades familiares"
                            className="min-h-[80px]"
                            defaultValue="Madre con hipertensión. Abuela materna con diabetes tipo 2. Tío paterno con asma. Padre con antecedentes de migraña. Hermano mayor con dermatitis atópica."
                            spellCheck={spellCheck}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="personal-history" className="flex items-center">
                            <History className="h-4 w-4 mr-2 text-sky-700" />
                            Antecedentes Personales
                          </Label>
                          <Textarea
                            id="personal-history"
                            placeholder="Historial de enfermedades personales"
                            className="min-h-[80px]"
                            defaultValue="Varicela a los 3 años. Fractura de brazo derecho a los 4 años. Bronquiolitis a los 2 años que requirió hospitalización por 3 días. Otitis media recurrente (3 episodios en el último año). Desarrollo psicomotor normal. Esquema de vacunación completo para la edad."
                            spellCheck={spellCheck}
                          />
                        </div>

                        <div className="flex items-center justify-end gap-2 mt-2">
                          <Label htmlFor="spellcheck" className="text-sm text-slate-500">
                            Corrector ortográfico
                          </Label>
                          <Button
                            variant={spellCheck ? "default" : "outline"}
                            size="sm"
                            onClick={() => setSpellCheck(!spellCheck)}
                            className={spellCheck ? "bg-sky-700" : ""}
                          >
                            <FileCheck className="h-4 w-4 mr-1" />
                            {spellCheck ? "Activado" : "Desactivado"}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="vitals" className="space-y-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium flex items-center gap-2 text-sky-800">
                    <Activity className="h-5 w-5 text-sky-700" />
                    Signos Vitales
                  </h3>
                  <Button className="bg-sky-700 hover:bg-sky-800">
                    <Plus className="h-4 w-4 mr-2" />
                    Nuevo Registro
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="border-sky-100 shadow-sm overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-sky-50 to-blue-50 py-3">
                      <CardTitle className="text-base flex items-center gap-2 text-sky-800">
                        <Activity className="h-4 w-4 text-sky-700" />
                        Último Registro (15/04/2023)
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2 p-3 bg-gradient-to-br from-sky-50 to-blue-50 rounded-md border border-sky-100 shadow-sm">
                          <Thermometer className="h-5 w-5 text-sky-700" />
                          <div>
                            <p className="text-xs text-slate-500">Temperatura</p>
                            <p className="font-medium text-sky-800">36.5 °C</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 p-3 bg-gradient-to-br from-sky-50 to-blue-50 rounded-md border border-sky-100 shadow-sm">
                          <Scale className="h-5 w-5 text-sky-700" />
                          <div>
                            <p className="text-xs text-slate-500">Peso</p>
                            <p className="font-medium text-sky-800">18 kg</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 p-3 bg-gradient-to-br from-sky-50 to-blue-50 rounded-md border border-sky-100 shadow-sm">
                          <Ruler className="h-5 w-5 text-sky-700" />
                          <div>
                            <p className="text-xs text-slate-500">Talla</p>
                            <p className="font-medium text-sky-800">110 cm</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 p-3 bg-gradient-to-br from-sky-50 to-blue-50 rounded-md border border-sky-100 shadow-sm">
                          <Baby className="h-5 w-5 text-sky-700" />
                          <div>
                            <p className="text-xs text-slate-500">Perímetro Cefálico</p>
                            <p className="font-medium text-sky-800">52 cm</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 p-3 bg-gradient-to-br from-sky-50 to-blue-50 rounded-md border border-sky-100 shadow-sm">
                          <Droplet className="h-5 w-5 text-sky-700" />
                          <div>
                            <p className="text-xs text-slate-500">Saturación de Oxígeno</p>
                            <p className="font-medium text-sky-800">98%</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 p-3 bg-gradient-to-br from-sky-50 to-blue-50 rounded-md border border-sky-100 shadow-sm">
                          <Heart className="h-5 w-5 text-sky-700" />
                          <div>
                            <p className="text-xs text-slate-500">Frecuencia Cardíaca</p>
                            <p className="font-medium text-sky-800">90 lpm</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 p-3 bg-gradient-to-br from-sky-50 to-blue-50 rounded-md border border-sky-100 shadow-sm">
                          <Lungs className="h-5 w-5 text-sky-700" />
                          <div>
                            <p className="text-xs text-slate-500">Frecuencia Respiratoria</p>
                            <p className="font-medium text-sky-800">20 rpm</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 p-3 bg-gradient-to-br from-sky-50 to-blue-50 rounded-md border border-sky-100 shadow-sm">
                          <HeartPulse className="h-5 w-5 text-sky-700" />
                          <div>
                            <p className="text-xs text-slate-500">Presión Arterial</p>
                            <p className="font-medium text-sky-800">100/60 mmHg</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-sky-100 shadow-sm overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-sky-50 to-blue-50 py-3">
                      <CardTitle className="text-base flex items-center gap-2 text-sky-800">
                        <Clipboard className="h-4 w-4 text-sky-700" />
                        Formulario de Registro
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="temperature">Temperatura (°C)</Label>
                            <Input id="temperature" type="number" step="0.1" placeholder="36.5" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="weight">Peso (kg)</Label>
                            <Input id="weight" type="number" step="0.1" placeholder="18.0" />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="height">Talla (cm)</Label>
                            <Input id="height" type="number" placeholder="110" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="head-circumference">Perímetro Cefálico (cm)</Label>
                            <Input id="head-circumference" type="number" step="0.1" placeholder="52.0" />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="oxygen-saturation">Saturación de Oxígeno (%)</Label>
                            <Input id="oxygen-saturation" type="number" placeholder="98" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="heart-rate">Frecuencia Cardíaca (lpm)</Label>
                            <Input id="heart-rate" type="number" placeholder="90" />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="respiratory-rate">Frecuencia Respiratoria (rpm)</Label>
                            <Input id="respiratory-rate" type="number" placeholder="20" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="blood-pressure">Presión Arterial (mmHg)</Label>
                            <div className="flex gap-2">
                              <Input id="blood-pressure-systolic" type="number" placeholder="100" />
                              <span className="flex items-center">/</span>
                              <Input id="blood-pressure-diastolic" type="number" placeholder="60" />
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <Button className="bg-sky-700 hover:bg-sky-800">
                            <Save className="h-4 w-4 mr-2" />
                            Guardar Registro
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="border-sky-100 shadow-sm overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-sky-50 to-blue-50 py-3">
                    <CardTitle className="text-base flex items-center gap-2 text-sky-800">
                      <History className="h-4 w-4 text-sky-700" />
                      Historial de Signos Vitales
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <ScrollArea className="h-[300px]">
                      <Table>
                        <TableHeader className="bg-sky-50">
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
                          <TableRow>
                            <TableCell>15/01/2023</TableCell>
                            <TableCell>36.6 °C</TableCell>
                            <TableCell>16.8 kg</TableCell>
                            <TableCell>107 cm</TableCell>
                            <TableCell>50.8 cm</TableCell>
                            <TableCell>99%</TableCell>
                            <TableCell>95 lpm</TableCell>
                            <TableCell>22 rpm</TableCell>
                            <TableCell>95/60</TableCell>
                            <TableCell className="text-right">
                              <Button variant="ghost" size="icon">
                                <FileText className="h-4 w-4" />
                              </Button>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>15/12/2022</TableCell>
                            <TableCell>36.5 °C</TableCell>
                            <TableCell>16.5 kg</TableCell>
                            <TableCell>106 cm</TableCell>
                            <TableCell>50.5 cm</TableCell>
                            <TableCell>98%</TableCell>
                            <TableCell>93 lpm</TableCell>
                            <TableCell>21 rpm</TableCell>
                            <TableCell>94/60</TableCell>
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

              <TabsContent value="history">
                <div className="space-y-6">
                  <Card className="border-sky-100 shadow-sm overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-sky-50 to-blue-50 py-3">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-base flex items-center gap-2 text-sky-800">
                          <FileText className="h-4 w-4 text-sky-700" />
                          Descripción General
                        </CardTitle>
                        <Button variant="outline" size="sm" className="text-sky-700 border-sky-200">
                          <History className="h-4 w-4 mr-2" />
                          Ver Historial
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4">
                      <Textarea
                        id="general-description"
                        placeholder="Ingrese la descripción general del paciente"
                        className="min-h-[150px]"
                        defaultValue="Paciente femenino de 5 años de edad que acude a consulta por presentar fiebre de 38.5°C de 2 días de evolución, acompañada de tos seca y rinorrea hialina. La madre refiere que la niña ha presentado disminución del apetito y malestar general. No ha recibido medicación previa. No hay antecedentes de enfermedades crónicas. Esquema de vacunación completo para la edad. Desarrollo psicomotor acorde a su edad. Alimentación balanceada. Actividad física regular."
                        spellCheck={spellCheck}
                      />
                    </CardContent>
                  </Card>

                  <Card className="border-sky-100 shadow-sm overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-sky-50 to-blue-50 py-3">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-base flex items-center gap-2 text-sky-800">
                          <Stethoscope className="h-4 w-4 text-sky-700" />
                          Revisión Física
                        </CardTitle>
                        <Button variant="outline" size="sm" className="text-sky-700 border-sky-200">
                          <History className="h-4 w-4 mr-2" />
                          Ver Historial
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4">
                      <Textarea
                        id="physical-exam"
                        placeholder="Hallazgos del examen físico"
                        className="min-h-[150px]"
                        defaultValue="Paciente consciente, orientada, hidratada, con buena coloración de tegumentos. Temperatura axilar 38.2°C. Peso 18 kg (percentil 65). Talla 110 cm (percentil 70). FC 90 lpm. FR 20 rpm. Sat. O2 98%. PA 100/60 mmHg. Cabeza normocéfala, fontanelas cerradas, pupilas isocóricas normorreactivas. Orofaringe hiperémica con presencia de exudado blanquecino en amígdalas. Rinorrea hialina. Otoscopia bilateral normal. Cuello sin adenomegalias. Tórax simétrico, campos pulmonares con adecuada entrada y salida de aire, sin agregados. Ruidos cardíacos rítmicos, sin soplos. Abdomen blando, depresible, no doloroso a la palpación, peristalsis presente. Extremidades íntegras, sin alteraciones. Neurológico: sin alteraciones."
                        spellCheck={spellCheck}
                      />
                    </CardContent>
                  </Card>

                  <Card className="border-sky-100 shadow-sm overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-sky-50 to-blue-50 py-3">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-base flex items-center gap-2 text-sky-800">
                          <Stethoscope className="h-4 w-4 text-sky-700" />
                          Diagnósticos
                        </CardTitle>
                        <Button className="bg-sky-700 hover:bg-sky-800" size="sm">
                          <Plus className="h-4 w-4 mr-2" />
                          Añadir Diagnóstico
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-3 bg-gradient-to-br from-sky-50 to-blue-50 rounded-md border border-sky-100 shadow-sm">
                          <div className="flex items-center gap-3">
                            <Stethoscope className="h-5 w-5 text-sky-700" />
                            <div>
                              <p className="font-medium text-sky-800">Faringoamigdalitis aguda</p>
                              <p className="text-sm text-slate-500">Diagnóstico principal • 15/04/2023</p>
                            </div>
                          </div>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </Button>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gradient-to-br from-sky-50 to-blue-50 rounded-md border border-sky-100 shadow-sm">
                          <div className="flex items-center gap-3">
                            <Stethoscope className="h-5 w-5 text-sky-700" />
                            <div>
                              <p className="font-medium text-sky-800">Rinitis alérgica leve intermitente</p>
                              <p className="text-sm text-slate-500">Diagnóstico secundario • 15/04/2023</p>
                            </div>
                          </div>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </Button>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gradient-to-br from-sky-50 to-blue-50 rounded-md border border-sky-100 shadow-sm opacity-70">
                          <div className="flex items-center gap-3">
                            <Stethoscope className="h-5 w-5 text-sky-700" />
                            <div>
                              <p className="font-medium text-sky-800">Otitis media aguda</p>
                              <p className="text-sm text-slate-500">Diagnóstico previo • 10/03/2023</p>
                            </div>
                          </div>
                          <Badge variant="outline" className="bg-slate-50 text-slate-700 border-slate-200">
                            Resuelto
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-sky-100 shadow-sm overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-sky-50 to-blue-50 py-3">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-base flex items-center gap-2 text-sky-800">
                          <Users className="h-4 w-4 text-sky-700" />
                          Interconsultas con Otras Especialidades
                        </CardTitle>
                        <Button className="bg-sky-700 hover:bg-sky-800" size="sm">
                          <Plus className="h-4 w-4 mr-2" />
                          Solicitar Interconsulta
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-3 bg-gradient-to-br from-sky-50 to-blue-50 rounded-md border border-sky-100 shadow-sm">
                          <div className="flex items-center gap-3">
                            <Users className="h-5 w-5 text-sky-700" />
                            <div>
                              <p className="font-medium text-sky-800">Alergología Pediátrica</p>
                              <p className="text-sm text-slate-500">Solicitada: 15/04/2023 • Pendiente</p>
                            </div>
                          </div>
                          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                            Pendiente
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gradient-to-br from-sky-50 to-blue-50 rounded-md border border-sky-100 shadow-sm opacity-70">
                          <div className="flex items-center gap-3">
                            <Users className="h-5 w-5 text-sky-700" />
                            <div>
                              <p className="font-medium text-sky-800">Otorrinolaringología Pediátrica</p>
                              <p className="text-sm text-slate-500">Realizada: 15/03/2023 • Completada</p>
                            </div>
                          </div>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Completada
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="studies">
                <div className="space-y-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium flex items-center gap-2 text-sky-800">
                      <Microscope className="h-5 w-5 text-sky-700" />
                      Estudios Clínicos
                    </h3>
                    <div className="flex gap-2">
                      <Button variant="outline" className="text-sky-700 border-sky-200">
                        <FileImage className="h-4 w-4 mr-2" />
                        Ver Todos
                      </Button>
                      <Button className="bg-sky-700 hover:bg-sky-800">
                        <Plus className="h-4 w-4 mr-2" />
                        Solicitar Estudio
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="border-sky-100 shadow-sm overflow-hidden">
                      <CardHeader className="bg-gradient-to-r from-sky-50 to-blue-50 py-3">
                        <CardTitle className="text-base flex items-center gap-2 text-sky-800">
                          <Beaker className="h-4 w-4 text-sky-700" />
                          Laboratorios
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-4">
                        <div className="space-y-3">
                          <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-4 rounded-md border border-sky-100 shadow-sm space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="font-medium text-sky-800">Biometría Hemática</span>
                              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                Completado
                              </Badge>
                            </div>
                            <p className="text-sm text-slate-500">Fecha: 15/04/2023</p>
                            <div className="grid grid-cols-2 gap-2 text-sm">
                              <div>
                                <p className="text-slate-500">Leucocitos</p>
                                <p className="text-sky-800">8,500 /mm³</p>
                              </div>
                              <div>
                                <p className="text-slate-500">Hemoglobina</p>
                                <p className="text-sky-800">12.5 g/dL</p>
                              </div>
                              <div>
                                <p className="text-slate-500">Plaquetas</p>
                                <p className="text-sky-800">250,000 /mm³</p>
                              </div>
                              <div>
                                <p className="text-slate-500">Neutrófilos</p>
                                <p className="text-sky-800">55%</p>
                              </div>
                            </div>
                            <Button variant="outline" size="sm" className="w-full mt-2 text-sky-700 border-sky-200">
                              <FileText className="h-4 w-4 mr-2" />
                              Ver resultados completos
                            </Button>
                          </div>

                          <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-4 rounded-md border border-sky-100 shadow-sm space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="font-medium text-sky-800">Química Sanguínea</span>
                              <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                                Pendiente
                              </Badge>
                            </div>
                            <p className="text-sm text-slate-500">Programado para 20/04/2023</p>
                            <Button variant="outline" size="sm" className="w-full mt-2 text-sky-700 border-sky-200">
                              <ClipboardList className="h-4 w-4 mr-2" />
                              Solicitar resultados
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-sky-100 shadow-sm overflow-hidden">
                      <CardHeader className="bg-gradient-to-r from-sky-50 to-blue-50 py-3">
                        <CardTitle className="text-base flex items-center gap-2 text-sky-800">
                          <Scan className="h-4 w-4 text-sky-700" />
                          Estudios de Imagenología
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-4">
                        <div className="space-y-3">
                          <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-4 rounded-md border border-sky-100 shadow-sm space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="font-medium text-sky-800">Radiografía de Tórax</span>
                              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                Completado
                              </Badge>
                            </div>
                            <p className="text-sm text-slate-500">Fecha: 15/04/2023</p>
                            <div className="bg-white border border-sky-100 rounded-md p-2 text-sm">
                              <p className="font-medium text-sky-800">Hallazgos:</p>
                              <p className="text-slate-600">
                                Campos pulmonares bien ventilados, sin evidencia de consolidaciones o infiltrados.
                                Silueta cardíaca de tamaño normal. No se observan alteraciones óseas.
                              </p>
                            </div>
                            <div className="flex justify-center p-2 bg-white border border-sky-100 rounded-md">
                              <div className="w-32 h-32 bg-slate-200 flex items-center justify-center">
                                <FileImage className="h-10 w-10 text-slate-400" />
                              </div>
                            </div>
                            <Button variant="outline" size="sm" className="w-full text-sky-700 border-sky-200">
                              <FileImage className="h-4 w-4 mr-2" />
                              Ver imagen completa
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="md:col-span-2 border-sky-100 shadow-sm overflow-hidden">
                      <CardHeader className="bg-gradient-to-r from-sky-50 to-blue-50 py-3">
                        <CardTitle className="text-base flex items-center gap-2 text-sky-800">
                          <Microscope className="h-4 w-4 text-sky-700" />
                          Estudios Especiales
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-4">
                        <div className="space-y-3">
                          <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-4 rounded-md border border-sky-100 shadow-sm">
                            <div className="flex justify-between items-center">
                              <span className="font-medium text-sky-800">Pruebas de Alergia</span>
                              <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                                Solicitado
                              </Badge>
                            </div>
                            <p className="text-sm text-slate-500 mt-1">Fecha de solicitud: 15/04/2023</p>
                            <p className="text-sm text-slate-600 mt-2">
                              Pruebas cutáneas para determinar sensibilización a alérgenos comunes en pacientes
                              pediátricos.
                            </p>
                            <div className="flex justify-end mt-3">
                              <Button variant="outline" size="sm" className="text-sky-700 border-sky-200">
                                <FileText className="h-4 w-4 mr-2" />
                                Ver detalles
                              </Button>
                            </div>
                          </div>

                          <div className="p-4 border border-dashed border-slate-300 rounded-md text-center bg-white">
                            <p className="text-slate-500 mb-2">No hay más estudios especiales registrados</p>
                            <Button className="bg-sky-700 hover:bg-sky-800" size="sm">
                              <Plus className="h-4 w-4 mr-2" />
                              Solicitar nuevo estudio
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="treatment">
                <div className="space-y-6">
                  <Card className="border-sky-100 shadow-sm overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-sky-50 to-blue-50 py-3">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-base flex items-center gap-2 text-sky-800">
                          <Clipboard className="h-4 w-4 text-sky-700" />
                          Plan de Tratamiento
                        </CardTitle>
                        <Button className="bg-sky-700 hover:bg-sky-800" size="sm">
                          <Plus className="h-4 w-4 mr-2" />
                          Nuevo Tratamiento
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4">
                      <Textarea
                        id="treatment-plan"
                        placeholder="Detalles del tratamiento"
                        className="min-h-[150px]"
                        defaultValue="1. Paracetamol 160mg/5mL, 7.5mL vía oral cada 6 horas por 3 días o hasta remisión de la fiebre.\n2. Loratadina 5mg/5mL, 5mL vía oral cada 24 horas por 7 días.\n3. Abundantes líquidos.\n4. Reposo relativo.\n5. Control en 7 días o antes si hay deterioro clínico.\n6. Medidas generales: lavado nasal con solución salina, humidificación ambiental."
                        spellCheck={spellCheck}
                      />
                    </CardContent>
                  </Card>

                  <Card className="border-sky-100 shadow-sm overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-sky-50 to-blue-50 py-3">
                      <CardTitle className="text-base flex items-center gap-2 text-sky-800">
                        <Pill className="h-4 w-4 text-sky-700" />
                        Medicamentos Activos
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                      <ScrollArea className="h-[200px] rounded-md border border-sky-100 bg-white p-4">
                        <div className="space-y-4">
                          <div className="p-3 border border-sky-100 rounded-md bg-gradient-to-br from-sky-50 to-blue-50 shadow-sm">
                            <div className="flex justify-between">
                              <h4 className="font-medium text-sky-800">Paracetamol</h4>
                              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                Activo
                              </Badge>
                            </div>
                            <p className="text-sm text-slate-600 mt-1">160mg/5mL, Suspensión oral pediátrica</p>
                            <p className="text-sm mt-2">
                              <span className="font-medium">Dosis:</span> 7.5mL vía oral cada 6 horas
                            </p>
                            <p className="text-sm">
                              <span className="font-medium">Duración:</span> 3 días o hasta remisión de la fiebre
                            </p>
                            <p className="text-sm">
                              <span className="font-medium">Inicio:</span> 15/04/2023
                            </p>
                          </div>

                          <div className="p-3 border border-sky-100 rounded-md bg-gradient-to-br from-sky-50 to-blue-50 shadow-sm">
                            <div className="flex justify-between">
                              <h4 className="font-medium text-sky-800">Loratadina</h4>
                              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                Activo
                              </Badge>
                            </div>
                            <p className="text-sm text-slate-600 mt-1">5mg/5mL, Jarabe pediátrico</p>
                            <p className="text-sm mt-2">
                              <span className="font-medium">Dosis:</span> 5mL vía oral cada 24 horas
                            </p>
                            <p className="text-sm">
                              <span className="font-medium">Duración:</span> 7 días
                            </p>
                            <p className="text-sm">
                              <span className="font-medium">Inicio:</span> 15/04/2023
                            </p>
                          </div>

                          <div className="p-3 border border-sky-100 rounded-md bg-white opacity-60">
                            <div className="flex justify-between">
                              <h4 className="font-medium text-sky-800">Amoxicilina</h4>
                              <Badge variant="outline" className="bg-slate-100 text-slate-700 border-slate-200">
                                Completado
                              </Badge>
                            </div>
                            <p className="text-sm text-slate-600 mt-1">250mg/5mL, Suspensión oral pediátrica</p>
                            <p className="text-sm mt-2">
                              <span className="font-medium">Dosis:</span> 5mL vía oral cada 8 horas
                            </p>
                            <p className="text-sm">
                              <span className="font-medium">Duración:</span> 7 días
                            </p>
                            <p className="text-sm">
                              <span className="font-medium">Inicio:</span> 01/03/2023
                            </p>
                            <p className="text-sm">
                              <span className="font-medium">Fin:</span> 08/03/2023
                            </p>
                          </div>
                        </div>
                      </ScrollArea>
                      <div className="flex justify-end mt-3">
                        <Button size="sm" className="bg-sky-700 hover:bg-sky-800">
                          <Pill className="h-4 w-4 mr-2" />
                          Añadir medicamento
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-sky-100 shadow-sm overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-sky-50 to-blue-50 py-3">
                      <CardTitle className="text-base flex items-center gap-2 text-sky-800">
                        <Prescription className="h-4 w-4 text-sky-700" />
                        Recetas Pediátricas
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="space-y-3">
                        <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-4 rounded-md border border-sky-100 shadow-sm">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <Prescription className="h-5 w-5 text-sky-700" />
                              <span className="font-medium text-sky-800">Receta #RX-2023-0156</span>
                            </div>
                            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                              Activa
                            </Badge>
                          </div>
                          <p className="text-sm text-slate-500 mt-1">Fecha: 15/04/2023</p>
                          <div className="mt-3 space-y-2">
                            <div className="bg-white p-2 rounded-md border border-sky-100">
                              <p className="text-sm font-medium text-sky-800">Paracetamol 160mg/5mL</p>
                              <p className="text-xs text-slate-600">7.5mL vía oral cada 6 horas por 3 días</p>
                            </div>
                            <div className="bg-white p-2 rounded-md border border-sky-100">
                              <p className="text-sm font-medium text-sky-800">Loratadina 5mg/5mL</p>
                              <p className="text-xs text-slate-600">5mL vía oral cada 24 horas por 7 días</p>
                            </div>
                          </div>
                          <div className="flex justify-end mt-3 gap-2">
                            <Button variant="outline" size="sm" className="text-sky-700 border-sky-200">
                              <FileText className="h-4 w-4 mr-2" />
                              Ver
                            </Button>
                            <Button variant="outline" size="sm" className="text-sky-700 border-sky-200">
                              <Printer className="h-4 w-4 mr-2" />
                              Imprimir
                            </Button>
                          </div>
                        </div>

                        <div className="bg-white p-4 rounded-md border border-dashed border-slate-300 text-center">
                          <p className="text-slate-500 mb-2">Crear nueva receta pediátrica</p>
                          <Button className="bg-sky-700 hover:bg-sky-800" size="sm">
                            <Plus className="h-4 w-4 mr-2" />
                            Nueva Receta
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
