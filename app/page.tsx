'use client';

import * as React from 'react';
import { KpiCard } from '@/app/components/KpiCard';

export default function HomePage() {
  return (
    <div className="p-6 grid gap-6">
      <section>
        <h1 className="text-2xl font-bold">Bonjour, John Doe 👋</h1>
        <p className="text-muted-foreground">
          Voici un aperçu rapide de vos performances.
        </p>
      </section>

      <section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <KpiCard title="Nombre de Clients" value={120} />
          <KpiCard title="Nombre Total de Factures" value={230} />
          <KpiCard title="Factures Payées" value={200} />
          <KpiCard title="Total Dépenses" value="15 000€" />
          <KpiCard title="Total Paiements Reçus" value="25 000€" />
          <KpiCard title="Paiements en Attente Reçu" value="5 000€" />
        </div>
      </section>
    </div>
  );
}
