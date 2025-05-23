"use client"

import { useState } from "react"
import Link from "next/link"
import { Calendar, FileText, Home, LayoutDashboard, Stethoscope } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export default function PatientNav() {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { icon: LayoutDashboard, label: "Panel Principal", href: "/patient-dashboard" },
    { icon: Calendar, label: "Mis Citas", href: "/patient-dashboard/appointments" },
    { icon: Stethoscope, label: "Mis Doctores", href: "/patient-dashboard/doctors" },
    { icon: FileText, label: "Historial Médico", href: "/patient-dashboard/records" },
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
