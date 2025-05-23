import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-sky-50 to-white">
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
            <CardTitle className="text-xl text-center text-sky-800">Iniciar Sesión</CardTitle>
            <CardDescription className="text-center">Ingrese sus credenciales para acceder a su cuenta</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="doctor" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="doctor">Doctor</TabsTrigger>
                <TabsTrigger value="patient">Paciente</TabsTrigger>
              </TabsList>

              <TabsContent value="doctor">
                <form action="/dashboard">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="doctor-email">Correo Electrónico</Label>
                      <Input id="doctor-email" placeholder="doctor@hospital.com" type="email" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="doctor-password">Contraseña</Label>
                      <Input id="doctor-password" placeholder="••••••••" type="password" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="specialty">Especialidad</Label>
                      <Select defaultValue="pediatrics">
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
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="remember" className="rounded border-gray-300" />
                        <label htmlFor="remember" className="text-sm text-slate-600">
                          Recordarme
                        </label>
                      </div>
                      <Link href="/forgot-password" className="text-sm text-sky-700 hover:text-sky-600">
                        ¿Olvidó su contraseña?
                      </Link>
                    </div>
                    <Button type="submit" className="w-full bg-sky-700 hover:bg-sky-800">
                      Iniciar Sesión
                    </Button>
                  </div>
                </form>
              </TabsContent>

              <TabsContent value="patient">
                <form action="/patient-dashboard">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="patient-email">Correo Electrónico</Label>
                      <Input id="patient-email" placeholder="paciente@ejemplo.com" type="email" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="patient-password">Contraseña</Label>
                      <Input id="patient-password" placeholder="••••••••" type="password" required />
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="remember-patient" className="rounded border-gray-300" />
                        <label htmlFor="remember-patient" className="text-sm text-slate-600">
                          Recordarme
                        </label>
                      </div>
                      <Link href="/forgot-password" className="text-sm text-sky-700 hover:text-sky-600">
                        ¿Olvidó su contraseña?
                      </Link>
                    </div>
                    <Button type="submit" className="w-full bg-sky-700 hover:bg-sky-800">
                      Iniciar Sesión
                    </Button>
                  </div>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex flex-col gap-4 border-t border-slate-100 pt-4">
            <div className="w-full">
              <Link href="/register">
                <Button variant="outline" className="w-full">
                  Registrarse
                </Button>
              </Link>
            </div>
            <p className="text-sm text-slate-600 text-center">
              ¿Necesita ayuda?{" "}
              <Link href="/contact" className="text-sky-700 hover:text-sky-600">
                Contacte a Soporte TI
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
