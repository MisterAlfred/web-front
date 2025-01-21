"use client"

import * as React from "react"
import { SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar"

export function TeamSwitcher({
  teams,
}: {
  teams: {
    name: string
    logo: React.ElementType
    plan: string
  }[]
}) {
  const [activeTeam] = React.useState(teams[0])

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div className="flex items-center gap-2 p-2 rounded-lg bg-sidebar-accent text-sidebar-accent-foreground">
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            <activeTeam.logo className="size-4" />
          </div>
          <span className="truncate font-semibold">{activeTeam.name}</span>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
