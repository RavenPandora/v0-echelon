"use client"

import Link from "next/link"
import Image from "next/image"
import { Bell, Search, Settings, User, HelpCircle, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react"

export default function DashboardHeader() {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
    // En una implementación real, aquí cambiaríamos el tema del sistema
  }

  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-gradient-to-r from-sky-600 to-blue-700 shadow-md">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Logo de Echelon" width={32} height={32} className="bg-white rounded-full p-1" />
            <span className="text-xl font-bold text-white">Echelon</span>
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative hidden md:flex items-center">
            <Search className="absolute left-3 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Buscar pacientes, registros..."
              className="w-64 pl-9 rounded-full bg-white/90 border-transparent focus-visible:ring-white"
            />
          </div>
          <Button variant="ghost" size="icon" className="text-white hover:bg-sky-500">
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-sky-500">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-sky-500">
            <HelpCircle className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-sky-500">
            <Settings className="h-5 w-5" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full text-white hover:bg-sky-500">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Dra. Sara Jiménez</DropdownMenuLabel>
              <DropdownMenuLabel className="text-xs text-slate-500 font-normal">Pediatría</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Perfil</DropdownMenuItem>
              <DropdownMenuItem>Mensajes</DropdownMenuItem>
              <DropdownMenuItem>Configuración</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Cerrar sesión</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
