import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import DashboardHeader from "@/components/dashboard-header"
import DashboardNav from "@/components/dashboard-nav"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  BarChart,
  LineChart,
  PieChart,
  Download,
  Calendar,
  Users,
  TrendingUp,
  TrendingDown,
  Stethoscope,
  Pill,
} from "lucide-react"

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50">
      <DashboardHeader />
      <div className="flex">
        <DashboardNav />
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-slate-800">Análisis y Estadísticas</h1>
              <p className="text-slate-500">Visualización de datos y métricas clave</p>
            </div>
            <div className="flex items-center gap-4">
              <Select defaultValue="month">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Seleccionar periodo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="week">Esta semana</SelectItem>
                  <SelectItem value="month">Este mes</SelectItem>
                  <SelectItem value="quarter">Este trimestre</SelectItem>
                  <SelectItem value="year">Este año</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="text-sky-700 border-sky-200">
                <Download className="h-4 w-4 mr-2" />
                Exportar
              </Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6">
            <Card className="bg-gradient-to-br from-sky-50 to-blue-50 border-sky-100 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-slate-500">Total de Pacientes</span>
                    <span className="text-3xl font-bold text-slate-800">487</span>
                    <span className="text-xs text-green-600 flex items-center">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      12% desde el mes pasado
                    </span>
                  </div>
                  <div className="bg-sky-100 p-2 rounded-md">
                    <Users className="h-6 w-6 text-sky-700" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-sky-50 to-blue-50 border-sky-100 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-slate-500">Citas Realizadas</span>
                    <span className="text-3xl font-bold text-slate-800">124</span>
                    <span className="text-xs text-green-600 flex items-center">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      8% desde el mes pasado
                    </span>
                  </div>
                  <div className="bg-sky-100 p-2 rounded-md">
                    <Calendar className="h-6 w-6 text-sky-700" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-sky-50 to-blue-50 border-sky-100 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-slate-500">Diagnósticos</span>
                    <span className="text-3xl font-bold text-slate-800">98</span>
                    <span className="text-xs text-amber-600 flex items-center">
                      <TrendingDown className="h-3 w-3 mr-1" />
                      3% desde el mes pasado
                    </span>
                  </div>
                  <div className="bg-sky-100 p-2 rounded-md">
                    <Stethoscope className="h-6 w-6 text-sky-700" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-sky-50 to-blue-50 border-sky-100 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-slate-500">Recetas Emitidas</span>
                    <span className="text-3xl font-bold text-slate-800">156</span>
                    <span className="text-xs text-green-600 flex items-center">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      15% desde el mes pasado
                    </span>
                  </div>
                  <div className="bg-sky-100 p-2 rounded-md">
                    <Pill className="h-6 w-6 text-sky-700" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="patients" className="mb-6">
            <TabsList className="mb-4 bg-white border border-slate-200 shadow-sm">
              <TabsTrigger value="patients">Pacientes</TabsTrigger>
              <TabsTrigger value="appointments">Citas</TabsTrigger>
              <TabsTrigger value="diagnoses">Diagnósticos</TabsTrigger>
              <TabsTrigger value="prescriptions">Recetas</TabsTrigger>
            </TabsList>

            <TabsContent value="patients">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart className="h-5 w-5 text-sky-700" />
                      Pacientes por Edad
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="h-80 flex items-center justify-center bg-slate-50 rounded-md border border-slate-200">
                      <div className="text-center p-4">
                        <BarChart className="h-10 w-10 text-sky-300 mx-auto mb-2" />
                        <p className="text-slate-500">Gráfico de distribución de pacientes por edad</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <PieChart className="h-5 w-5 text-sky-700" />
                      Pacientes por Género
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="h-80 flex items-center justify-center bg-slate-50 rounded-md border border-slate-200">
                      <div className="text-center p-4">
                        <PieChart className="h-10 w-10 text-sky-300 mx-auto mb-2" />
                        <p className="text-slate-500">Gráfico de distribución de pacientes por género</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <LineChart className="h-5 w-5 text-sky-700" />
                      Nuevos Pacientes por Mes
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="h-80 flex items-center justify-center bg-slate-50 rounded-md border border-slate-200">
                      <div className="text-center p-4">
                        <LineChart className="h-10 w-10 text-sky-300 mx-auto mb-2" />
                        <p className="text-slate-500">Gráfico de tendencia de nuevos pacientes por mes</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="appointments">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart className="h-5 w-5 text-sky-700" />
                      Citas por Día de la Semana
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="h-80 flex items-center justify-center bg-slate-50 rounded-md border border-slate-200">
                      <div className="text-center p-4">
                        <BarChart className="h-10 w-10 text-sky-300 mx-auto mb-2" />
                        <p className="text-slate-500">Gráfico de distribución de citas por día de la semana</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <PieChart className="h-5 w-5 text-sky-700" />
                      Citas por Tipo
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="h-80 flex items-center justify-center bg-slate-50 rounded-md border border-slate-200">
                      <div className="text-center p-4">
                        <PieChart className="h-10 w-10 text-sky-300 mx-auto mb-2" />
                        <p className="text-slate-500">Gráfico de distribución de citas por tipo</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <LineChart className="h-5 w-5 text-sky-700" />
                      Tendencia de Citas
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="h-80 flex items-center justify-center bg-slate-50 rounded-md border border-slate-200">
                      <div className="text-center p-4">
                        <LineChart className="h-10 w-10 text-sky-300 mx-auto mb-2" />
                        <p className="text-slate-500">Gráfico de tendencia de citas a lo largo del tiempo</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="diagnoses">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart className="h-5 w-5 text-sky-700" />
                      Diagnósticos Más Comunes
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="h-80 flex items-center justify-center bg-slate-50 rounded-md border border-slate-200">
                      <div className="text-center p-4">
                        <BarChart className="h-10 w-10 text-sky-300 mx-auto mb-2" />
                        <p className="text-slate-500">Gráfico de diagnósticos más frecuentes</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <PieChart className="h-5 w-5 text-sky-700" />
                      Diagnósticos por Grupo de Edad
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="h-80 flex items-center justify-center bg-slate-50 rounded-md border border-slate-200">
                      <div className="text-center p-4">
                        <PieChart className="h-10 w-10 text-sky-300 mx-auto mb-2" />
                        <p className="text-slate-500">Gráfico de distribución de diagnósticos por grupo de edad</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <LineChart className="h-5 w-5 text-sky-700" />
                      Tendencia de Diagnósticos por Mes
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="h-80 flex items-center justify-center bg-slate-50 rounded-md border border-slate-200">
                      <div className="text-center p-4">
                        <LineChart className="h-10 w-10 text-sky-300 mx-auto mb-2" />
                        <p className="text-slate-500">Gráfico de tendencia de diagnósticos a lo largo del tiempo</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="prescriptions">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart className="h-5 w-5 text-sky-700" />
                      Medicamentos Más Recetados
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="h-80 flex items-center justify-center bg-slate-50 rounded-md border border-slate-200">
                      <div className="text-center p-4">
                        <BarChart className="h-10 w-10 text-sky-300 mx-auto mb-2" />
                        <p className="text-slate-500">Gráfico de medicamentos más frecuentemente recetados</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <PieChart className="h-5 w-5 text-sky-700" />
                      Recetas por Categoría de Medicamento
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="h-80 flex items-center justify-center bg-slate-50 rounded-md border border-slate-200">
                      <div className="text-center p-4">
                        <PieChart className="h-10 w-10 text-sky-300 mx-auto mb-2" />
                        <p className="text-slate-500">
                          Gráfico de distribución de recetas por categoría de medicamento
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <LineChart className="h-5 w-5 text-sky-700" />
                      Tendencia de Recetas por Mes
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="h-80 flex items-center justify-center bg-slate-50 rounded-md border border-slate-200">
                      <div className="text-center p-4">
                        <LineChart className="h-10 w-10 text-sky-300 mx-auto mb-2" />
                        <p className="text-slate-500">Gráfico de tendencia de recetas a lo largo del tiempo</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
