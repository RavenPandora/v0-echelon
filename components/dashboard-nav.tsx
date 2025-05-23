"use client"

import { useState } from "react"
import Link from "next/link"
import { Calendar, ClipboardList, Clock, FileText, Home, LayoutDashboard, PieChart, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export default function DashboardNav() {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { icon: LayoutDashboard, label: "Panel de Control", href: "/dashboard" },
    { icon: Users, label: "Pacientes", href: "/dashboard/patients" },
    { icon: Calendar, label: "Citas", href: "/dashboard/appointments" },
    { icon: ClipboardList, label: "Registros Médicos", href: "/dashboard/records" },
    { icon: FileText, label: "Recetas", href: "/dashboard/prescriptions" },
    { icon: Clock, label: "Historial", href: "/dashboard/history" },
    { icon: PieChart, label: "Análisis", href: "/dashboard/analytics" },
  ]

  return (
    <aside
      className={cn(
        "h-[calc(100vh-4rem)] bg-white border-r border-slate-200 transition-all duration-300 overflow-y-auto",
        collapsed ? "w-16" : "w-64",
      )}
    >
      <div className="p-4">
        <Button variant="outline" size="sm" className="w-full justify-start" onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? <Home className="h-4 w-4" /> : <span>Menú</span>}
        </Button>
      </div>
      <nav className="space-y-1 px-2">
        {navItems.map((item, index) => (
          <Link href={item.href} key={index}>
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start text-slate-600 hover:text-sky-700 hover:bg-sky-50",
                pathname === item.href && "text-sky-700 bg-sky-50",
              )}
            >
              <item.icon className="h-4 w-4 mr-3" />
              {!collapsed && <span>{item.label}</span>}
            </Button>
          </Link>
        ))}
      </nav>
    </aside>
  )
}
