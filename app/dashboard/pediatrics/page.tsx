import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import DashboardHeader from "@/components/dashboard-header"
import DashboardNav from "@/components/dashboard-nav"
import PediatricProfile from "@/components/pediatric-profile"
import AppointmentCalendar from "@/components/appointment-calendar"
import RecentPatients from "@/components/recent-patients"
import PediatricGrowthCharts from "@/components/pediatric-growth-charts"
import { Search, Plus, FileText, BarChart3, Calendar } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function PediatricsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <DashboardHeader />
      <div className="flex">
        <DashboardNav />
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-slate-800">Pediatría</h1>
              <p className="text-slate-500">Gestión de pacientes pediátricos</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input placeholder="Buscar paciente..." className="pl-9 w-64 bg-white" />
              </div>
              <Button variant="outline" className="text-sky-700 border-sky-200">
                <FileText className="h-4 w-4 mr-2" />
                Informes
              </Button>
              <Button variant="outline" className="text-sky-700 border-sky-200">
                <BarChart3 className="h-4 w-4 mr-2" />
                Estadísticas
              </Button>
              <Button className="bg-sky-700 hover:bg-sky-800">
                <Plus className="h-4 w-4 mr-2" />
                Nuevo Paciente
              </Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6">
            <Card className="bg-gradient-to-br from-sky-50 to-blue-50 border-sky-100">
              <CardContent className="p-6">
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-slate-500">Pacientes Pediátricos</span>
                  <span className="text-3xl font-bold text-slate-800">487</span>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      +12%
                    </Badge>
                    <span className="text-xs text-slate-500">desde el mes pasado</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-sky-50 to-blue-50 border-sky-100">
              <CardContent className="p-6">
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-slate-500">Consultas Programadas</span>
                  <span className="text-3xl font-bold text-slate-800">24</span>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                      8 pendientes
                    </Badge>
                    <span className="text-xs text-slate-500">para hoy</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-sky-50 to-blue-50 border-sky-100">
              <CardContent className="p-6">
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-slate-500">Pacientes Nuevos</span>
                  <span className="text-3xl font-bold text-slate-800">18</span>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      Nuevos
                    </Badge>
                    <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                      Controles
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-sky-50 to-blue-50 border-sky-100">
              <CardContent className="p-6">
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-slate-500">Vacunas Programadas</span>
                  <span className="text-3xl font-bold text-slate-800">32</span>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="bg-sky-50 text-sky-700 border-sky-200">
                      <Calendar className="h-3 w-3 mr-1" />
                      Esta semana
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="profile" className="mb-6">
            <TabsList className="mb-4 bg-white border border-slate-200">
              <TabsTrigger value="profile">Perfil del Paciente</TabsTrigger>
              <TabsTrigger value="appointments">Citas</TabsTrigger>
              <TabsTrigger value="patients">Pacientes Recientes</TabsTrigger>
              <TabsTrigger value="growth">Curvas de Crecimiento</TabsTrigger>
              <TabsTrigger value="vaccines">Calendario de Vacunación</TabsTrigger>
            </TabsList>
            <TabsContent value="profile">
              <PediatricProfile />
            </TabsContent>
            <TabsContent value="appointments">
              <AppointmentCalendar />
            </TabsContent>
            <TabsContent value="patients">
              <RecentPatients />
            </TabsContent>
            <TabsContent value="growth">
              <PediatricGrowthCharts />
            </TabsContent>
            <TabsContent value="vaccines">
              <Card>
                <CardContent className="p-6 text-center">
                  <p className="text-slate-500">Módulo de calendario de vacunación en desarrollo</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
