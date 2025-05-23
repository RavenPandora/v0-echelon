import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import DashboardHeader from "@/components/dashboard-header"
import DashboardNav from "@/components/dashboard-nav"
import PatientProfile from "@/components/patient-profile"
import AppointmentCalendar from "@/components/appointment-calendar"
import RecentPatients from "@/components/recent-patients"
import { CalendarDays, Plus, Users, FileText } from "lucide-react"

export default function DashboardPage() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50"
      style={{
        backgroundImage: `
          radial-gradient(circle at 25px 25px, rgba(0, 120, 212, 0.05) 2%, transparent 0%), 
          radial-gradient(circle at 75px 75px, rgba(0, 120, 212, 0.05) 2%, transparent 0%)
        `,
        backgroundSize: "100px 100px",
      }}
    >
      <DashboardHeader />
      <div className="flex">
        <DashboardNav />
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-slate-800">Panel de Control</h1>
            <div className="flex items-center gap-4">
              <Button variant="outline" className="text-sky-700 border-sky-200">
                <CalendarDays className="h-4 w-4 mr-2" />
                Nueva Cita
              </Button>
              <Button className="bg-sky-700 hover:bg-sky-800">
                <Plus className="h-4 w-4 mr-2" />
                Nuevo Paciente
              </Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-6">
            <Card className="bg-gradient-to-br from-sky-50 to-blue-50 border-sky-100 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-slate-500">Citas de Hoy</span>
                    <span className="text-3xl font-bold text-slate-800">12</span>
                    <span className="text-xs text-amber-600">8 pendientes</span>
                  </div>
                  <div className="bg-sky-100 p-2 rounded-md">
                    <CalendarDays className="h-6 w-6 text-sky-700" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-sky-50 to-blue-50 border-sky-100 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-slate-500">Total de Pacientes</span>
                    <span className="text-3xl font-bold text-slate-800">348</span>
                    <span className="text-xs text-green-600">↑ 8% desde el mes pasado</span>
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
                    <span className="text-sm font-medium text-slate-500">Registros Pendientes</span>
                    <span className="text-3xl font-bold text-slate-800">24</span>
                    <span className="text-xs text-slate-500">Actualizar hoy</span>
                  </div>
                  <div className="bg-sky-100 p-2 rounded-md">
                    <FileText className="h-6 w-6 text-sky-700" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="patients" className="mb-6">
            <TabsList className="mb-4 bg-white border border-slate-200 shadow-sm">
              <TabsTrigger value="patients">Pacientes Recientes</TabsTrigger>
              <TabsTrigger value="appointments">Próximas Citas</TabsTrigger>
              <TabsTrigger value="records">Registros de Pacientes</TabsTrigger>
            </TabsList>
            <TabsContent value="patients">
              <RecentPatients />
            </TabsContent>
            <TabsContent value="appointments">
              <AppointmentCalendar />
            </TabsContent>
            <TabsContent value="records">
              <PatientProfile />
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
