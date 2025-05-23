"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Baby, Ruler, Scale, Activity, Download, FileText, Filter, ArrowUpDown } from "lucide-react"

// Datos de ejemplo para las gráficas de crecimiento
const weightDataBoys = [
  { age: 0, p3: 2.9, p15: 3.2, p50: 3.5, p85: 3.9, p97: 4.2, patient: null },
  { age: 1, p3: 4.3, p15: 4.7, p50: 5.1, p85: 5.5, p97: 5.8, patient: null },
  { age: 2, p3: 5.6, p15: 6.0, p50: 6.4, p85: 6.9, p97: 7.3, patient: null },
  { age: 3, p3: 6.6, p15: 7.0, p50: 7.4, p85: 8.0, p97: 8.4, patient: null },
  { age: 4, p3: 7.3, p15: 7.8, p50: 8.3, p85: 8.9, p97: 9.4, patient: null },
  { age: 5, p3: 8.0, p15: 8.5, p50: 9.1, p85: 9.8, p97: 10.3, patient: 9.1 },
]

const weightDataGirls = [
  { age: 0, p3: 2.8, p15: 3.0, p50: 3.3, p85: 3.7, p97: 4.0, patient: null },
  { age: 1, p3: 4.0, p15: 4.3, p50: 4.7, p85: 5.1, p97: 5.4, patient: null },
  { age: 2, p3: 5.1, p15: 5.5, p50: 5.9, p85: 6.4, p97: 6.8, patient: null },
  { age: 3, p3: 6.0, p15: 6.5, p50: 7.0, p85: 7.5, p97: 8.0, patient: null },
  { age: 4, p3: 6.8, p15: 7.3, p50: 7.9, p85: 8.5, p97: 9.0, patient: null },
  { age: 5, p3: 7.5, p15: 8.1, p50: 8.7, p85: 9.4, p97: 10.0, patient: 9.0 },
]

const heightDataBoys = [
  { age: 0, p3: 48.0, p15: 49.2, p50: 50.5, p85: 51.8, p97: 53.0, patient: null },
  { age: 1, p3: 57.3, p15: 58.8, p50: 60.5, p85: 62.2, p97: 63.7, patient: null },
  { age: 2, p3: 63.8, p15: 65.5, p50: 67.4, p85: 69.3, p97: 71.0, patient: null },
  { age: 3, p3: 69.0, p15: 70.8, p50: 72.9, p85: 75.0, p97: 76.8, patient: null },
  { age: 4, p3: 73.5, p15: 75.5, p50: 77.7, p85: 80.0, p97: 82.0, patient: null },
  { age: 5, p3: 77.5, p15: 79.6, p50: 82.0, p85: 84.4, p97: 86.5, patient: 82.0 },
]

const heightDataGirls = [
  { age: 0, p3: 47.3, p15: 48.4, p50: 49.7, p85: 51.0, p97: 52.1, patient: null },
  { age: 1, p3: 56.0, p15: 57.4, p50: 59.0, p85: 60.6, p97: 62.0, patient: null },
  { age: 2, p3: 62.5, p15: 64.0, p50: 65.9, p85: 67.8, p97: 69.3, patient: null },
  { age: 3, p3: 67.7, p15: 69.5, p50: 71.5, p85: 73.5, p97: 75.3, patient: null },
  { age: 4, p3: 72.3, p15: 74.2, p50: 76.4, p85: 78.6, p97: 80.5, patient: null },
  { age: 5, p3: 76.5, p15: 78.5, p50: 80.8, p85: 83.1, p97: 85.1, patient: 80.8 },
]

const headCircumferenceDataBoys = [
  { age: 0, p3: 32.4, p15: 33.2, p50: 34.2, p85: 35.2, p97: 36.0, patient: null },
  { age: 1, p3: 37.0, p15: 38.0, p50: 39.1, p85: 40.2, p97: 41.2, patient: null },
  { age: 2, p3: 40.0, p15: 41.0, p50: 42.2, p85: 43.4, p97: 44.4, patient: null },
  { age: 3, p3: 42.1, p15: 43.1, p50: 44.3, p85: 45.5, p97: 46.5, patient: null },
  { age: 4, p3: 43.5, p15: 44.5, p50: 45.7, p85: 46.9, p97: 47.9, patient: null },
  { age: 5, p3: 44.5, p15: 45.5, p50: 46.7, p85: 47.9, p97: 48.9, patient: 46.7 },
]

const headCircumferenceDataGirls = [
  { age: 0, p3: 31.9, p15: 32.7, p50: 33.7, p85: 34.7, p97: 35.5, patient: null },
  { age: 1, p3: 36.3, p15: 37.2, p50: 38.3, p85: 39.4, p97: 40.3, patient: null },
  { age: 2, p3: 39.2, p15: 40.1, p50: 41.2, p85: 42.3, p97: 43.2, patient: null },
  { age: 3, p3: 41.2, p15: 42.1, p50: 43.2, p85: 44.3, p97: 45.2, patient: null },
  { age: 4, p3: 42.5, p15: 43.4, p50: 44.5, p85: 45.6, p97: 46.5, patient: null },
  { age: 5, p3: 43.5, p15: 44.4, p50: 45.5, p85: 46.6, p97: 47.5, patient: 45.5 },
]

// Datos de crecimiento del paciente actual
const patientGrowthData = [
  { age: 0, weight: 3.2, height: 49.5, headCircumference: 33.5 },
  { age: 1, weight: 4.8, height: 59.2, headCircumference: 38.0 },
  { age: 2, weight: 6.1, height: 66.0, headCircumference: 41.5 },
  { age: 3, weight: 7.2, height: 72.0, headCircumference: 43.5 },
  { age: 4, weight: 8.1, height: 76.5, headCircumference: 44.5 },
  { age: 5, weight: 9.0, height: 80.8, headCircumference: 45.5 },
]

export default function PediatricGrowthCharts() {
  return (
    <Card className="border-sky-100 shadow-md overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-sky-50 to-blue-50 border-b border-sky-100">
        <div className="flex justify-between items-center">
          <div>
            <div className="flex items-center gap-2">
              <Baby className="h-5 w-5 text-sky-700" />
              <CardTitle className="text-sky-800">Curvas de Crecimiento Pediátricas</CardTitle>
            </div>
            <CardDescription>Seguimiento del crecimiento y desarrollo infantil</CardDescription>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="text-sky-700 border-sky-200">
              <Download className="h-4 w-4 mr-2" />
              Exportar
            </Button>
            <Button variant="outline" className="text-sky-700 border-sky-200">
              <FileText className="h-4 w-4 mr-2" />
              Informe
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6 bg-gradient-to-br from-white to-sky-50">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <div className="flex flex-wrap gap-2">
              <Select defaultValue="female">
                <SelectTrigger className="w-[180px] bg-white">
                  <SelectValue placeholder="Seleccionar sexo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Masculino</SelectItem>
                  <SelectItem value="female">Femenino</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="who">
                <SelectTrigger className="w-[180px] bg-white">
                  <SelectValue placeholder="Seleccionar estándar" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="who">OMS</SelectItem>
                  <SelectItem value="cdc">CDC</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="text-sky-700 border-sky-200">
                <Filter className="h-4 w-4 mr-2" />
                Filtrar
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-sky-700"></div>
                <span className="text-xs text-slate-500">Paciente</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-xs text-slate-500">P50</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <span className="text-xs text-slate-500">P3-P97</span>
              </div>
            </div>
          </div>

          <Tabs defaultValue="weight" className="w-full">
            <TabsList className="mb-6 bg-sky-50 w-full justify-start border border-sky-100 rounded-md p-1">
              <TabsTrigger value="weight" className="data-[state=active]:bg-sky-100 data-[state=active]:text-sky-800">
                <Scale className="h-4 w-4 mr-2" />
                Peso
              </TabsTrigger>
              <TabsTrigger value="height" className="data-[state=active]:bg-sky-100 data-[state=active]:text-sky-800">
                <Ruler className="h-4 w-4 mr-2" />
                Talla
              </TabsTrigger>
              <TabsTrigger value="head" className="data-[state=active]:bg-sky-100 data-[state=active]:text-sky-800">
                <Activity className="h-4 w-4 mr-2" />
                Perímetro Cefálico
              </TabsTrigger>
              <TabsTrigger value="bmi" className="data-[state=active]:bg-sky-100 data-[state=active]:text-sky-800">
                <ArrowUpDown className="h-4 w-4 mr-2" />
                IMC
              </TabsTrigger>
            </TabsList>

            <TabsContent value="weight">
              <Card className="border-sky-100 shadow-sm">
                <CardHeader className="py-3 bg-gradient-to-r from-sky-50 to-blue-50">
                  <CardTitle className="text-base flex items-center gap-2 text-sky-800">
                    <Scale className="h-4 w-4 text-sky-700" />
                    Curva de Peso para la Edad (kg)
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="h-[400px]">
                    <ChartContainer
                      config={{
                        p3: {
                          label: "P3",
                          color: "hsl(var(--amber-300))",
                        },
                        p15: {
                          label: "P15",
                          color: "hsl(var(--amber-400))",
                        },
                        p50: {
                          label: "P50",
                          color: "hsl(var(--green-500))",
                        },
                        p85: {
                          label: "P85",
                          color: "hsl(var(--amber-400))",
                        },
                        p97: {
                          label: "P97",
                          color: "hsl(var(--amber-300))",
                        },
                        patient: {
                          label: "Paciente",
                          color: "hsl(var(--sky-700))",
                        },
                      }}
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                          data={weightDataGirls}
                          margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 20,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis
                            dataKey="age"
                            label={{ value: "Edad (años)", position: "insideBottom", offset: -15 }}
                          />
                          <YAxis
                            label={{ value: "Peso (kg)", angle: -90, position: "insideLeft", offset: -5 }}
                            domain={[0, "dataMax + 2"]}
                          />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Line
                            type="monotone"
                            dataKey="p3"
                            stroke="var(--color-p3)"
                            strokeWidth={1}
                            dot={false}
                            activeDot={false}
                          />
                          <Line
                            type="monotone"
                            dataKey="p15"
                            stroke="var(--color-p15)"
                            strokeWidth={1}
                            dot={false}
                            activeDot={false}
                          />
                          <Line type="monotone" dataKey="p50" stroke="var(--color-p50)" strokeWidth={2} dot={false} />
                          <Line
                            type="monotone"
                            dataKey="p85"
                            stroke="var(--color-p85)"
                            strokeWidth={1}
                            dot={false}
                            activeDot={false}
                          />
                          <Line
                            type="monotone"
                            dataKey="p97"
                            stroke="var(--color-p97)"
                            strokeWidth={1}
                            dot={false}
                            activeDot={false}
                          />
                          <Line
                            type="monotone"
                            dataKey="patient"
                            stroke="var(--color-patient)"
                            strokeWidth={3}
                            dot={{ r: 5 }}
                            connectNulls={true}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="height">
              <Card className="border-sky-100 shadow-sm">
                <CardHeader className="py-3 bg-gradient-to-r from-sky-50 to-blue-50">
                  <CardTitle className="text-base flex items-center gap-2 text-sky-800">
                    <Ruler className="h-4 w-4 text-sky-700" />
                    Curva de Talla para la Edad (cm)
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="h-[400px]">
                    <ChartContainer
                      config={{
                        p3: {
                          label: "P3",
                          color: "hsl(var(--amber-300))",
                        },
                        p15: {
                          label: "P15",
                          color: "hsl(var(--amber-400))",
                        },
                        p50: {
                          label: "P50",
                          color: "hsl(var(--green-500))",
                        },
                        p85: {
                          label: "P85",
                          color: "hsl(var(--amber-400))",
                        },
                        p97: {
                          label: "P97",
                          color: "hsl(var(--amber-300))",
                        },
                        patient: {
                          label: "Paciente",
                          color: "hsl(var(--sky-700))",
                        },
                      }}
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                          data={heightDataGirls}
                          margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 20,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis
                            dataKey="age"
                            label={{ value: "Edad (años)", position: "insideBottom", offset: -15 }}
                          />
                          <YAxis
                            label={{ value: "Talla (cm)", angle: -90, position: "insideLeft", offset: -5 }}
                            domain={[40, "dataMax + 10"]}
                          />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Line
                            type="monotone"
                            dataKey="p3"
                            stroke="var(--color-p3)"
                            strokeWidth={1}
                            dot={false}
                            activeDot={false}
                          />
                          <Line
                            type="monotone"
                            dataKey="p15"
                            stroke="var(--color-p15)"
                            strokeWidth={1}
                            dot={false}
                            activeDot={false}
                          />
                          <Line type="monotone" dataKey="p50" stroke="var(--color-p50)" strokeWidth={2} dot={false} />
                          <Line
                            type="monotone"
                            dataKey="p85"
                            stroke="var(--color-p85)"
                            strokeWidth={1}
                            dot={false}
                            activeDot={false}
                          />
                          <Line
                            type="monotone"
                            dataKey="p97"
                            stroke="var(--color-p97)"
                            strokeWidth={1}
                            dot={false}
                            activeDot={false}
                          />
                          <Line
                            type="monotone"
                            dataKey="patient"
                            stroke="var(--color-patient)"
                            strokeWidth={3}
                            dot={{ r: 5 }}
                            connectNulls={true}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="head">
              <Card className="border-sky-100 shadow-sm">
                <CardHeader className="py-3 bg-gradient-to-r from-sky-50 to-blue-50">
                  <CardTitle className="text-base flex items-center gap-2 text-sky-800">
                    <Activity className="h-4 w-4 text-sky-700" />
                    Curva de Perímetro Cefálico para la Edad (cm)
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="h-[400px]">
                    <ChartContainer
                      config={{
                        p3: {
                          label: "P3",
                          color: "hsl(var(--amber-300))",
                        },
                        p15: {
                          label: "P15",
                          color: "hsl(var(--amber-400))",
                        },
                        p50: {
                          label: "P50",
                          color: "hsl(var(--green-500))",
                        },
                        p85: {
                          label: "P85",
                          color: "hsl(var(--amber-400))",
                        },
                        p97: {
                          label: "P97",
                          color: "hsl(var(--amber-300))",
                        },
                        patient: {
                          label: "Paciente",
                          color: "hsl(var(--sky-700))",
                        },
                      }}
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                          data={headCircumferenceDataGirls}
                          margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 20,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis
                            dataKey="age"
                            label={{ value: "Edad (años)", position: "insideBottom", offset: -15 }}
                          />
                          <YAxis
                            label={{ value: "Perímetro Cefálico (cm)", angle: -90, position: "insideLeft", offset: -5 }}
                            domain={[30, "dataMax + 5"]}
                          />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Line
                            type="monotone"
                            dataKey="p3"
                            stroke="var(--color-p3)"
                            strokeWidth={1}
                            dot={false}
                            activeDot={false}
                          />
                          <Line
                            type="monotone"
                            dataKey="p15"
                            stroke="var(--color-p15)"
                            strokeWidth={1}
                            dot={false}
                            activeDot={false}
                          />
                          <Line type="monotone" dataKey="p50" stroke="var(--color-p50)" strokeWidth={2} dot={false} />
                          <Line
                            type="monotone"
                            dataKey="p85"
                            stroke="var(--color-p85)"
                            strokeWidth={1}
                            dot={false}
                            activeDot={false}
                          />
                          <Line
                            type="monotone"
                            dataKey="p97"
                            stroke="var(--color-p97)"
                            strokeWidth={1}
                            dot={false}
                            activeDot={false}
                          />
                          <Line
                            type="monotone"
                            dataKey="patient"
                            stroke="var(--color-patient)"
                            strokeWidth={3}
                            dot={{ r: 5 }}
                            connectNulls={true}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="bmi">
              <Card className="border-sky-100 shadow-sm">
                <CardHeader className="py-3 bg-gradient-to-r from-sky-50 to-blue-50">
                  <CardTitle className="text-base flex items-center gap-2 text-sky-800">
                    <ArrowUpDown className="h-4 w-4 text-sky-700" />
                    Índice de Masa Corporal para la Edad (kg/m²)
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="h-[400px] flex items-center justify-center">
                    <p className="text-slate-500">Datos de IMC en desarrollo</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <Card className="border-sky-100 shadow-sm overflow-hidden">
            <CardHeader className="py-3 bg-gradient-to-r from-sky-50 to-blue-50">
              <CardTitle className="text-base flex items-center gap-2 text-sky-800">
                <FileText className="h-4 w-4 text-sky-700" />
                Registro de Mediciones
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="rounded-md border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-sky-50">
                      <th className="h-10 px-4 text-left font-medium">Fecha</th>
                      <th className="h-10 px-4 text-left font-medium">Edad</th>
                      <th className="h-10 px-4 text-left font-medium">Peso (kg)</th>
                      <th className="h-10 px-4 text-left font-medium">Talla (cm)</th>
                      <th className="h-10 px-4 text-left font-medium">P. Cefálico (cm)</th>
                      <th className="h-10 px-4 text-left font-medium">IMC</th>
                      <th className="h-10 px-4 text-left font-medium">Percentil Peso</th>
                      <th className="h-10 px-4 text-left font-medium">Percentil Talla</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-sky-50">
                      <td className="p-4">15/04/2023</td>
                      <td className="p-4">5 años</td>
                      <td className="p-4">18.0 kg</td>
                      <td className="p-4">110.0 cm</td>
                      <td className="p-4">52.0 cm</td>
                      <td className="p-4">14.9</td>
                      <td className="p-4">P50</td>
                      <td className="p-4">P50</td>
                    </tr>
                    <tr className="border-b hover:bg-sky-50">
                      <td className="p-4">15/01/2023</td>
                      <td className="p-4">4 años 9 meses</td>
                      <td className="p-4">17.5 kg</td>
                      <td className="p-4">108.5 cm</td>
                      <td className="p-4">51.5 cm</td>
                      <td className="p-4">14.8</td>
                      <td className="p-4">P50</td>
                      <td className="p-4">P50</td>
                    </tr>
                    <tr className="border-b hover:bg-sky-50">
                      <td className="p-4">15/10/2022</td>
                      <td className="p-4">4 años 6 meses</td>
                      <td className="p-4">17.0 kg</td>
                      <td className="p-4">107.0 cm</td>
                      <td className="p-4">51.0 cm</td>
                      <td className="p-4">14.8</td>
                      <td className="p-4">P50</td>
                      <td className="p-4">P50</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  )
}
