import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft } from "lucide-react"

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-sky-50 to-white py-8">
      <div className="w-full max-w-md px-4">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Image src="/logo.png" alt="Logo de Echelon" width={80} height={80} className="h-20 w-auto" />
          </div>
          <h1 className="text-3xl font-bold text-sky-800">Echelon</h1>
          <p className="text-slate-600 mt-2">Sistema de Registros Médicos Electrónicos</p>
        </div>

        <Card className="w-full shadow-lg border-sky-100">
          <CardHeader>
            <div className="flex items-center mb-2">
              <Link href="/" className="text-sky-700 hover:text-sky-800 mr-4">
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <CardTitle className="text-xl text-sky-800">Registro de Usuario</CardTitle>
            </div>
            <CardDescription>Cree una nueva cuenta para acceder a la plataforma</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="patient" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="patient">Paciente</TabsTrigger>
                <TabsTrigger value="doctor">Doctor</TabsTrigger>
              </TabsList>

              <TabsContent value="patient">
                <form action="/patient-dashboard">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="patient-first-name">Nombre</Label>
                        <Input id="patient-first-name" placeholder="Nombre" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="patient-last-name">Apellidos</Label>
                        <Input id="patient-last-name" placeholder="Apellidos" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="patient-email">Correo Electrónico</Label>
                      <Input id="patient-email" placeholder="paciente@ejemplo.com" type="email" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="patient-phone">Teléfono</Label>
                      <Input id="patient-phone" placeholder="(555) 123-4567" type="tel" required />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="patient-dob">Fecha de Nacimiento</Label>
                        <Input id="patient-dob" type="date" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="patient-gender">Sexo</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccionar" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Masculino</SelectItem>
                            <SelectItem value="female">Femenino</SelectItem>
                            <SelectItem value="other">Otro</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="patient-password">Contraseña</Label>
                        <Input id="patient-password" placeholder="••••••••" type="password" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="patient-confirm-password">Confirmar Contraseña</Label>
                        <Input id="patient-confirm-password" placeholder="••••••••" type="password" required />
                      </div>
                    </div>
                    <div className="flex items-start space-x-2 pt-2">
                      <Checkbox id="patient-terms" />
                      <label htmlFor="patient-terms" className="text-sm text-slate-600">
                        Acepto los{" "}
                        <Link href="/terms" className="text-sky-700 hover:text-sky-600">
                          términos y condiciones
                        </Link>{" "}
                        y la{" "}
                        <Link href="/privacy" className="text-sky-700 hover:text-sky-600">
                          política de privacidad
                        </Link>
                      </label>
                    </div>
                    <Button type="submit" className="w-full bg-sky-700 hover:bg-sky-800">
                      Crear Cuenta
                    </Button>
                  </div>
                </form>
              </TabsContent>

              <TabsContent value="doctor">
                <form action="/dashboard">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="doctor-first-name">Nombre</Label>
                        <Input id="doctor-first-name" placeholder="Nombre" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="doctor-last-name">Apellidos</Label>
                        <Input id="doctor-last-name" placeholder="Apellidos" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="doctor-email">Correo Electrónico</Label>
                      <Input id="doctor-email" placeholder="doctor@hospital.com" type="email" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="doctor-phone">Teléfono</Label>
                      <Input id="doctor-phone" placeholder="(555) 123-4567" type="tel" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="doctor-license">Número de Licencia Médica</Label>
                      <Input id="doctor-license" placeholder="Ej. MED-12345" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="doctor-specialty">Especialidad</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar especialidad" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pediatrics">Pediatría</SelectItem>
                          <SelectItem value="cardiology">Cardiología</SelectItem>
                          <SelectItem value="neurology">Neurología</SelectItem>
                          <SelectItem value="traumatology">Traumatología</SelectItem>
                          <SelectItem value="general">Medicina General</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="doctor-password">Contraseña</Label>
                        <Input id="doctor-password" placeholder="••••••••" type="password" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="doctor-confirm-password">Confirmar Contraseña</Label>
                        <Input id="doctor-confirm-password" placeholder="••••••••" type="password" required />
                      </div>
                    </div>
                    <div className="flex items-start space-x-2 pt-2">
                      <Checkbox id="doctor-terms" />
                      <label htmlFor="doctor-terms" className="text-sm text-slate-600">
                        Acepto los{" "}
                        <Link href="/terms" className="text-sky-700 hover:text-sky-600">
                          términos y condiciones
                        </Link>{" "}
                        y la{" "}
                        <Link href="/privacy" className="text-sky-700 hover:text-sky-600">
                          política de privacidad
                        </Link>
                      </label>
                    </div>
                    <Button type="submit" className="w-full bg-sky-700 hover:bg-sky-800">
                      Crear Cuenta
                    </Button>
                  </div>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-center border-t border-slate-100 pt-4">
            <p className="text-sm text-slate-600">
              ¿Ya tiene una cuenta?{" "}
              <Link href="/" className="text-sky-700 hover:text-sky-600">
                Iniciar Sesión
              </Link>
            </p>
          </CardFooter>
        </Card>

        <div className="text-center mt-8">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Echelon Soluciones de Salud. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </div>
  )
}
