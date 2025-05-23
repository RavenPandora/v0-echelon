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
  BarChart2,
  Droplet,
  Plus,
  Trash2,
  ClipboardList,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function PatientProfile() {
  const [date, setDate] = useState<Date>()
  const [birthDate, setBirthDate] = useState<Date>()
  const [spellCheck, setSpellCheck] = useState<boolean>(true)

  return (
    <Card className="border-sky-100">
      <CardHeader className="bg-sky-50 border-b border-sky-100">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-sky-800">Perfil del Paciente</CardTitle>
            <CardDescription>Ver y gestionar información del paciente</CardDescription>
          </div>
          <Button className="bg-sky-700 hover:bg-sky-800">
            <Save className="h-4 w-4 mr-2" />
            Guardar Cambios
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <Tabs defaultValue="personal">
          <TabsList className="mb-6 bg-sky-50">
            <TabsTrigger value="personal">Información Personal</TabsTrigger>
            <TabsTrigger value="vitals">Signos Vitales</TabsTrigger>
            <TabsTrigger value="medical">Historial Médico</TabsTrigger>
            <TabsTrigger value="studies">Estudios</TabsTrigger>
            <TabsTrigger value="treatment">Tratamiento</TabsTrigger>
            <TabsTrigger value="family">Historial Familiar</TabsTrigger>
            <TabsTrigger value="appointments">Citas</TabsTrigger>
            <TabsTrigger value="documents">Documentos</TabsTrigger>
          </TabsList>

          <TabsContent value="personal" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
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
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar departamento" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cardiology">Cardiología</SelectItem>
                        <SelectItem value="neurology">Neurología</SelectItem>
                        <SelectItem value="pediatrics">Pediatría</SelectItem>
                        <SelectItem value="orthopedics">Ortopedia</SelectItem>
                        <SelectItem value="general">Medicina General</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="full-name">Nombre Completo</Label>
                  <Input id="full-name" placeholder="Ingrese el nombre completo del paciente" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="birth-place">Lugar de Nacimiento</Label>
                    <Input id="birth-place" placeholder="Ciudad, País" />
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
                        <Calendar mode="single" selected={birthDate} onSelect={setBirthDate} initialFocus locale={es} />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="age">Edad</Label>
                    <Input id="age" type="number" placeholder="Edad" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gender">Sexo</Label>
                    <Select>
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
                  <Label htmlFor="patient-id">ID de Referencia del Paciente</Label>
                  <Input id="patient-id" placeholder="ID de Referencia" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="allergies">Alergias</Label>
                  <Textarea id="allergies" placeholder="Listar todas las alergias conocidas" className="min-h-[80px]" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="blood-group">Grupo Sanguíneo</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="a+">A+</SelectItem>
                        <SelectItem value="a-">A-</SelectItem>
                        <SelectItem value="b+">B+</SelectItem>
                        <SelectItem value="b-">B-</SelectItem>
                        <SelectItem value="ab+">AB+</SelectItem>
                        <SelectItem value="ab-">AB-</SelectItem>
                        <SelectItem value="o+">O+</SelectItem>
                        <SelectItem value="o-">O-</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="rh-factor">Factor RH</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="positive">Positivo</SelectItem>
                        <SelectItem value="negative">Negativo</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Dirección</Label>
                  <Textarea id="address" placeholder="Dirección completa" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input id="phone" placeholder="Número de teléfono" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo Electrónico</Label>
                    <Input id="email" type="email" placeholder="Dirección de correo" />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="vitals" className="space-y-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Signos Vitales</h3>
              <Button className="bg-sky-700 hover:bg-sky-800">
                <Plus className="h-4 w-4 mr-2" />
                Nuevo Registro
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Último Registro (15/04/2023)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 p-3 bg-sky-50 rounded-md">
                      <Thermometer className="h-5 w-5 text-sky-700" />
                      <div>
                        <p className="text-xs text-slate-500">Temperatura</p>
                        <p className="font-medium">36.5 °C</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-sky-50 rounded-md">
                      <Scale className="h-5 w-5 text-sky-700" />
                      <div>
                        <p className="text-xs text-slate-500">Peso</p>
                        <p className="font-medium">18 kg</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-sky-50 rounded-md">
                      <Ruler className="h-5 w-5 text-sky-700" />
                      <div>
                        <p className="text-xs text-slate-500">Talla</p>
                        <p className="font-medium">110 cm</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-sky-50 rounded-md">
                      <Activity className="h-5 w-5 text-sky-700" />
                      <div>
                        <p className="text-xs text-slate-500">Perímetro Cefálico</p>
                        <p className="font-medium">52 cm</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-sky-50 rounded-md">
                      <Droplet className="h-5 w-5 text-sky-700" />
                      <div>
                        <p className="text-xs text-slate-500">Saturación de Oxígeno</p>
                        <p className="font-medium">98%</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-sky-50 rounded-md">
                      <Heart className="h-5 w-5 text-sky-700" />
                      <div>
                        <p className="text-xs text-slate-500">Frecuencia Cardíaca</p>
                        <p className="font-medium">90 lpm</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-sky-50 rounded-md">
                      <Lungs className="h-5 w-5 text-sky-700" />
                      <div>
                        <p className="text-xs text-slate-500">Frecuencia Respiratoria</p>
                        <p className="font-medium">20 rpm</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-sky-50 rounded-md">
                      <BarChart2 className="h-5 w-5 text-sky-700" />
                      <div>
                        <p className="text-xs text-slate-500">Presión Arterial</p>
                        <p className="font-medium">100/60 mmHg</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Formulario de Registro</CardTitle>
                </CardHeader>
                <CardContent>
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

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Historial de Signos Vitales</CardTitle>
              </CardHeader>
              <CardContent>
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
                    </TableBody>
                  </Table>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="medical">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">Descripción General</h3>
                  <Button variant="outline" size="sm">
                    <FileText className="h-4 w-4 mr-2" />
                    Ver Historial
                  </Button>
                </div>
                <Textarea
                  id="general-description"
                  placeholder="Ingrese la descripción general del paciente"
                  className="min-h-[150px]"
                  defaultValue="Paciente femenino de 5 años de edad que acude a consulta por presentar fiebre de 38.5°C de 2 días de evolución, acompañada de tos seca y rinorrea hialina."
                  spellCheck={spellCheck}
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">Revisión Física</h3>
                  <Button variant="outline" size="sm">
                    <FileText className="h-4 w-4 mr-2" />
                    Ver Historial
                  </Button>
                </div>
                <Textarea
                  id="physical-exam"
                  placeholder="Hallazgos del examen físico"
                  className="min-h-[150px]"
                  defaultValue="Paciente consciente, orientada, hidratada, con buena coloración de tegumentos. Orofaringe hiperémica con presencia de exudado blanquecino en amígdalas. Rinorrea hialina. Campos pulmonares con adecuada entrada y salida de aire, sin agregados. Abdomen blando, depresible, no doloroso a la palpación. Extremidades íntegras, sin alteraciones."
                  spellCheck={spellCheck}
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">Diagnósticos</h3>
                  <Button className="bg-sky-700 hover:bg-sky-800" size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Añadir Diagnóstico
                  </Button>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-white border rounded-md">
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
                  <div className="flex items-center justify-between p-3 bg-white border rounded-md">
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
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">Interconsultas con Otras Especialidades</h3>
                  <Button className="bg-sky-700 hover:bg-sky-800" size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Solicitar Interconsulta
                  </Button>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-white border rounded-md">
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
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Embarazo</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Sí</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                      <SelectItem value="n/a">N/A</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Anestesia</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="local">Local</SelectItem>
                      <SelectItem value="general">General</SelectItem>
                      <SelectItem value="regional">Regional</SelectItem>
                      <SelectItem value="none">Ninguna</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="studies">
            <div className="space-y-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">Estudios Clínicos</h3>
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
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2">
                      <ClipboardList className="h-5 w-5 text-sky-700" />
                      Laboratorios
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="bg-sky-50 p-4 rounded-md space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Biometría Hemática</span>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Completado
                          </Badge>
                        </div>
                        <p className="text-sm text-slate-500">Fecha: 15/04/2023</p>
                        <div className="grid grid-cols-2 gap-2 text-sm">
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
                        <Button variant="outline" size="sm" className="w-full mt-2">
                          Ver resultados completos
                        </Button>
                      </div>

                      <div className="bg-sky-50 p-4 rounded-md space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Química Sanguínea</span>
                          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                            Pendiente
                          </Badge>
                        </div>
                        <p className="text-sm text-slate-500">Programado para 20/04/2023</p>
                        <Button variant="outline" size="sm" className="w-full mt-2">
                          Solicitar resultados
                        </Button>
                      </div>

                      <div className="bg-sky-50 p-4 rounded-md space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Examen General de Orina</span>
                          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                            Pendiente
                          </Badge>
                        </div>
                        <p className="text-sm text-slate-500">Programado para 20/04/2023</p>
                        <Button variant="outline" size="sm" className="w-full mt-2">
                          Solicitar resultados
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2">
                      <FileImage className="h-5 w-5 text-sky-700" />
                      Estudios de Imagenología
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="bg-sky-50 p-4 rounded-md space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Radiografía de Tórax</span>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Completado
                          </Badge>
                        </div>
                        <p className="text-sm">Fecha: 15/04/2023</p>
                        <div className="bg-white border border-sky-100 rounded-md p-2 text-sm">
                          <p className="font-medium">Hallazgos:</p>
                          <p className="text-slate-600">
                            Campos pulmonares bien ventilados, sin evidencia de consolidaciones o infiltrados. Silueta
                            cardíaca de tamaño normal. No se observan alteraciones óseas.
                          </p>
                        </div>
                        <div className="flex justify-center p-2 bg-white border border-sky-100 rounded-md">
                          <div className="w-32 h-32 bg-slate-200 flex items-center justify-center">
                            <FileImage className="h-10 w-10 text-slate-400" />
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="w-full">
                          Ver imagen completa
                        </Button>
                      </div>

                      <div className="bg-sky-50 p-4 rounded-md space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Ecografía Abdominal</span>
                          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                            Pendiente
                          </Badge>
                        </div>
                        <p className="text-sm text-slate-500">Programado para 22/04/2023</p>
                        <Button variant="outline" size="sm" className="w-full mt-2">
                          Verificar estado
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="md:col-span-2">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2">
                      <FileText className="h-5 w-5 text-sky-700" />
                      Estudios Especiales
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="bg-sky-50 p-4 rounded-md">
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
                          <Button variant="outline" size="sm">
                            Ver detalles
                          </Button>
                        </div>
                      </div>

                      <div className="p-4 border border-dashed border-slate-300 rounded-md text-center">
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
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">Plan de Tratamiento</h3>
                  <Button className="bg-sky-700 hover:bg-sky-800" size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Nuevo Tratamiento
                  </Button>
                </div>
                <Textarea
                  id="treatment-plan"
                  placeholder="Detalles del tratamiento"
                  className="min-h-[150px]"
                  defaultValue="1. Paracetamol 160mg/5mL, 7.5mL vía oral cada 6 horas por 3 días o hasta remisión de la fiebre.\n2. Loratadina 5mg/5mL, 5mL vía oral cada 24 horas por 7 días.\n3. Abundantes líquidos.\n4. Reposo relativo.\n5. Control en 7 días o antes si hay deterioro clínico."
                  spellCheck={spellCheck}
                />
              </div>

              <div className="bg-sky-50 p-4 rounded-md">
                <h3 className="font-medium mb-3">Medicamentos Activos</h3>
                <ScrollArea className="h-[200px] rounded-md border border-sky-100 bg-white p-4">
                  <div className="space-y-4">
                    <div className="p-3 border border-sky-100 rounded-md">
                      <div className="flex justify-between">
                        <h4 className="font-medium">Paracetamol</h4>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          Activo
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-600 mt-1">160mg/5mL, Suspensión oral</p>
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

                    <div className="p-3 border border-sky-100 rounded-md">
                      <div className="flex justify-between">
                        <h4 className="font-medium">Loratadina</h4>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          Activo
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-600 mt-1">5mg/5mL, Jarabe</p>
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

                    <div className="p-3 border border-sky-100 rounded-md opacity-60">
                      <div className="flex justify-between">
                        <h4 className="font-medium">Amoxicilina</h4>
                        <Badge variant="outline" className="bg-slate-100 text-slate-700 border-slate-200">
                          Completado
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-600 mt-1">250mg/5mL, Suspensión oral</p>
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
              </div>
            </div>
          </TabsContent>

          <TabsContent value="family">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Información de la Madre</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="mother-name">Nombre</Label>
                    <Input id="mother-name" placeholder="Nombre de la madre" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mother-age">Edad</Label>
                    <Input id="mother-age" type="number" placeholder="Edad" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mother-occupation">Ocupación</Label>
                    <Input id="mother-occupation" placeholder="Ocupación" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Información del Padre</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="father-name">Nombre</Label>
                    <Input id="father-name" placeholder="Nombre del padre" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="father-age">Edad</Label>
                    <Input id="father-age" type="number" placeholder="Edad" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="father-occupation">Ocupación</Label>
                    <Input id="father-occupation" placeholder="Ocupación" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="family-medical-history">Historial Médico Familiar</Label>
                <Textarea
                  id="family-medical-history"
                  placeholder="Ingrese historial médico familiar relevante"
                  className="min-h-[150px]"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="appointments">
            <p className="text-slate-500">No hay citas programadas.</p>
          </TabsContent>

          <TabsContent value="documents">
            <p className="text-slate-500">No hay documentos disponibles.</p>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
