'use client';

import React, { JSX } from 'react';
import { Badge } from '@/components/ui/badge';
import { DataTable } from '@/app/components/DataTable';

interface RowData {
  object: string;
  client: string;
  reference: string;
  date: string;
  totalHT: number;
  totalTTC: number;
  status: string;
  archived: boolean;
}

const fakeFactureData: RowData[] = [
  {
    object: 'Facture 1',
    client: 'Client 1',
    reference: 'FAC-001',
    date: '16/10/23',
    totalHT: 100,
    totalTTC: 110,
    status: 'En attente',
    archived: false,
  },
  {
    object: 'Facture 2',
    client: 'Client 2',
    reference: 'FAC-002',
    date: '17/10/23',
    totalHT: 200,
    totalTTC: 220,
    status: 'Payé',
    archived: false,
  },
  {
    object: 'Facture 3',
    client: 'Client 3',
    reference: 'FAC-003',
    date: '18/10/23',
    totalHT: 300,
    totalTTC: 330,
    status: 'Annulé',
    archived: false,
  },
  {
    object: 'Facture 4',
    client: 'Client 4',
    reference: 'FAC-004',
    date: '19/10/23',
    totalHT: 400,
    totalTTC: 440,
    status: 'En attente',
    archived: false,
  },
  {
    object: 'Facture 5',
    client: 'Client 5',
    reference: 'FAC-005',
    date: '20/10/23',
    totalHT: 500,
    totalTTC: 550,
    status: 'Payé',
    archived: false,
  },
  {
    object: 'Facture 6',
    client: 'Client 6',
    reference: 'FAC-006',
    date: '21/10/23',
    totalHT: 600,
    totalTTC: 660,
    status: 'Annulé',
    archived: false,
  },
  {
    object: 'Facture 7',
    client: 'Client 7',
    reference: 'FAC-007',
    date: '22/10/23',
    totalHT: 700,
    totalTTC: 770,
    status: 'En attente',
    archived: false,
  },
  {
    object: 'Facture 8',
    client: 'Client 8',
    reference: 'FAC-008',
    date: '23/10/23',
    totalHT: 800,
    totalTTC: 880,
    status: 'Payé',
    archived: false,
  },
  {
    object: 'Facture 9',
    client: 'Client 9',
    reference: 'FAC-009',
    date: '24/10/23',
    totalHT: 900,
    totalTTC: 990,
    status: 'Annulé',
    archived: false,
  },
  {
    object: 'Facture 10',
    client: 'Client 10',
    reference: 'FAC-010',
    date: '25/10/23',
    totalHT: 1000,
    totalTTC: 1100,
    status: 'En attente',
    archived: false,
  },
  {
    object: 'Facture 11',
    client: 'Client 11',
    reference: 'FAC-011',
    date: '26/10/23',
    totalHT: 1100,
    totalTTC: 1210,
    status: 'Payé',
    archived: true,
  },
  {
    object: 'Facture 12',
    client: 'Client 12',
    reference: 'FAC-012',
    date: '27/10/23',
    totalHT: 1200,
    totalTTC: 1320,
    status: 'Annulé',
    archived: false,
  },
];

export default function FacturePage() {
  const columns: {
    key: keyof RowData;
    label: string;
    sortable?: boolean;
    render?: (row: RowData) => JSX.Element;
  }[] = [
    { key: 'object', label: 'Objet', sortable: true },
    { key: 'client', label: 'Client', sortable: true },
    { key: 'reference', label: 'Référence', sortable: true },
    { key: 'date', label: 'Date', sortable: true },
    { key: 'totalHT', label: 'Total HT', sortable: true },
    { key: 'totalTTC', label: 'Total TTC', sortable: true },
    {
      key: 'status',
      label: 'Status',
      render: (row: RowData) => {
        switch (row.status) {
          case 'En attente':
            return (
              <Badge className="bg-yellow-100 text-yellow-800">
                {row.status}
              </Badge>
            );
          case 'Payé':
            return (
              <Badge className="bg-green-100 text-green-800">
                {row.status}
              </Badge>
            );
          case 'Annulé':
            return (
              <Badge className="bg-red-100 text-red-800">{row.status}</Badge>
            );
          default:
            return <Badge>{row.status}</Badge>;
        }
      },
    },
  ];

  return (
    <DataTable<RowData>
      title="Liste des Factures"
      data={fakeFactureData}
      columns={columns}
      addPath="/facture"
    />
  );
}
