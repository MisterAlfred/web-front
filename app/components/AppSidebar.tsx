"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/app/components/Nav/NavMain"
import { NavUser } from "@/app/components/Nav/NavUser"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { TeamSwitcher } from "@/app/components/Nav/NavHeader"

const data = {
  user: {
    name: "John Doe",
    email: "john@doe.com",
  },
  header: [
    {
      name: "Airbus",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    }
  ],
  firstGroup: [
    {
      title: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      title: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      title: "Travel",
      url: "#",
      icon: Map,
    },
  ],
  secondGroup: [
    {
      title: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      title: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      title: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.header} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain sectionTitle="Financement" items={data.firstGroup} />
        <NavMain sectionTitle="Gestion" items={data.secondGroup} />
      </SidebarContent>
      <SidebarFooter>
        <h2></h2>
      </SidebarFooter>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
