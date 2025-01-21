'use client';

import * as React from 'react';
import { ReceiptText, Wallet, Euro, ChartLine, Contact } from 'lucide-react';

import { NavMain } from '@/app/components/Nav/NavMain';
import { NavUser } from '@/app/components/Nav/NavUser';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';
import { NavHeader } from '@/app/components/Nav/NavHeader';

const data = {
  user: {
    name: 'John Doe',
    email: 'john@doe.com',
  },
  header: {
    name: 'Airbus',
    logo: 'https://www.mulesoft.com/sites/default/files/2018-05/MS_CustomerStory_Airbus_Logo.png',
    plan: 'Enterprise',
  },
  firstGroup: [
    {
      title: 'Devis',
      url: '/devis',
      icon: ReceiptText,
    },
    {
      title: 'Facturations',
      url: '/facture',
      icon: Euro,
    },
    {
      title: 'Paiements',
      url: '/paiement',
      icon: Wallet,
    },
  ],
  secondGroup: [
    {
      title: 'Clients',
      url: '/clients',
      icon: Contact,
    },
    {
      title: 'KPIs',
      url: '/kpi',
      icon: ChartLine,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <NavHeader team={data.header} />
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
  );
}
