"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

import { KpiCard } from "@/app/components/KpiCard";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const depensesData = [
  { month: "Janvier", amount: 700 },
  { month: "Février", amount: 600 },
  { month: "Mars", amount: 800 },
  { month: "Avril", amount: 900 },
  { month: "Mai", amount: 1200 },
  { month: "Juin", amount: 1100 },
  { month: "Juillet", amount: 950 },
  { month: "Août", amount: 1050 },
  { month: "Septembre", amount: 1150 },
  { month: "Octobre", amount: 1300 },
  { month: "Novembre", amount: 1500 },
  { month: "Décembre", amount: 1700 },
];

const revenusData = [
  { month: "Janvier", amount: 1200 },
  { month: "Février", amount: 900 },
  { month: "Mars", amount: 1100 },
  { month: "Avril", amount: 1500 },
  { month: "Mai", amount: 1700 },
  { month: "Juin", amount: 1400 },
  { month: "Juillet", amount: 1600 },
  { month: "Août", amount: 1800 },
  { month: "Septembre", amount: 1900 },
  { month: "Octobre", amount: 2000 },
  { month: "Novembre", amount: 2200 },
  { month: "Décembre", amount: 2500 },
];

const chartConfig = {
  amount: {
    label: "Montant (€)",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export default function KpiPage() {
  return (
    <div className="p-6 grid gap-6">
      <div className="grid grid-cols-4 gap-6">
        <KpiCard title="Nombre de Clients" value={120} />
        <KpiCard title="Nombre Total de Factures" value={230} />
        <KpiCard title="Factures Payées" value={200} />
        <KpiCard title="Total Dépenses" value="15 000€" />
        <KpiCard title="Total Paiements Reçus" value="25 000€" />
        <KpiCard title="Paiements en Attente Reçu" value="5 000€" />
        <KpiCard title="Paiements en Attente Payé" value="3 000€" />
        <KpiCard title="Paiements Reçus" value="20 000€" />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Dépenses des 12 Derniers Mois</CardTitle>
            <CardDescription>Analyse des dépenses mensuelles</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <BarChart data={depensesData} margin={{ top: 20 }}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                <Bar dataKey="amount" fill="var(--color-desktop)" radius={8}>
                  <LabelList position="top" offset={12} className="fill-foreground" fontSize={12} />
                </Bar>
              </BarChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col items-start gap-2 text-sm">
            <div className="flex gap-2 font-medium leading-none">
              Dépenses mensuelles <TrendingUp className="h-4 w-4" />
            </div>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Revenus des 12 Derniers Mois</CardTitle>
            <CardDescription>Analyse des revenus mensuels</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <BarChart data={revenusData} margin={{ top: 20 }}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                <Bar dataKey="amount" fill="var(--color-desktop)" radius={8}>
                  <LabelList position="top" offset={12} className="fill-foreground" fontSize={12} />
                </Bar>
              </BarChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col items-start gap-2 text-sm">
            <div className="flex gap-2 font-medium leading-none">
              Revenus mensuels <TrendingUp className="h-4 w-4" />
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
