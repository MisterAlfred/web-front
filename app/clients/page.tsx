'use client';

import React, { useState } from 'react';
import { UserCard } from '@/app/components/UserCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const initialClients = [
  {
    id: 1,
    nom: 'Dupont',
    prenom: 'Jean',
    email: 'jean.dupont@mail.com',
    phone: '0601010101',
    dateAdded: '2023-01-15',
  },
  {
    id: 2,
    nom: 'Martin',
    prenom: 'Claire',
    email: 'claire.martin@mail.com',
    phone: '0602020202',
    dateAdded: '2023-01-14',
  },
  {
    id: 3,
    nom: 'Bernard',
    prenom: 'Paul',
    email: 'paul.bernard@mail.com',
    phone: '0603030303',
    dateAdded: '2023-01-13',
  },
  {
    id: 4,
    nom: 'Lemoine',
    prenom: 'Sophie',
    email: 'sophie.lemoine@mail.com',
    phone: '0604040404',
    dateAdded: '2023-01-12',
  },
  {
    id: 5,
    nom: 'Morel',
    prenom: 'Lucas',
    email: 'lucas.morel@mail.com',
    phone: '0605050505',
    dateAdded: '2023-01-11',
  },
  {
    id: 6,
    nom: 'Dubois',
    prenom: 'Alice',
    email: 'alice.dubois@mail.com',
    phone: '0606060606',
    dateAdded: '2023-01-10',
  },
  {
    id: 7,
    nom: 'Petit',
    prenom: 'Julien',
    email: 'julien.petit@mail.com',
    phone: '0607070707',
    dateAdded: '2023-01-09',
  },
  {
    id: 8,
    nom: 'Garcia',
    prenom: 'Marie',
    email: 'marie.garcia@mail.com',
    phone: '0608080808',
    dateAdded: '2023-01-08',
  },
  {
    id: 9,
    nom: 'Leroy',
    prenom: 'Manon',
    email: 'manon.leroy@mail.com',
    phone: '0609090909',
    dateAdded: '2023-01-07',
  },
  {
    id: 10,
    nom: 'Roux',
    prenom: 'Lucie',
    email: 'lucie.roux@mail.com',
    phone: '0610101010',
    dateAdded: '2023-01-06',
  },
  {
    id: 11,
    nom: 'Fournier',
    prenom: 'Benoit',
    email: 'benoit.fournier@mail.com',
    phone: '0611111111',
    dateAdded: '2023-01-05',
  },
  {
    id: 12,
    nom: 'Blanc',
    prenom: 'Emilie',
    email: 'emilie.blanc@mail.com',
    phone: '0612121212',
    dateAdded: '2023-01-04',
  },
];

export default function ClientsPage() {
  const [clients, setClients] = useState(initialClients);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState<'dateAdded' | 'alphabetical'>(
    'dateAdded',
  );

  const filteredClients = clients
    .filter((client) =>
      `${client.nom} ${client.prenom}`
        .toLowerCase()
        .includes(search.toLowerCase()),
    )
    .sort((a, b) => {
      if (sortBy === 'alphabetical') {
        return a.nom.localeCompare(b.nom);
      } else if (sortBy === 'dateAdded') {
        return (
          new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
        );
      }
      return 0;
    });

  const handleAddClient = () => {
    const newClient = {
      id: clients.length + 1,
      nom: 'Nouveau',
      prenom: 'Client',
      email: 'nouveau.client@mail.com',
      phone: '0613141516',
      dateAdded: new Date().toISOString().split('T')[0],
    };
    setClients([newClient, ...clients]);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Liste des clients</h1>
        <Button
          onClick={handleAddClient}
          className="bg-blue-500 hover:bg-blue-600 text-white"
        >
          Ajouter un client
        </Button>
      </div>

      <div className="flex flex-wrap gap-4 mb-6">
        <Input
          type="text"
          placeholder="Rechercher un client..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2"
        />
        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value as 'dateAdded' | 'alphabetical')
          }
          className="w-full md:w-1/3 p-2 border border-gray-300 rounded-md"
        >
          <option value="dateAdded">
            Date
          </option>
          <option value="alphabetical">
            Nom
          </option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredClients.map((client) => (
          <UserCard
            key={client.id}
            nom={client.nom}
            prenom={client.prenom}
            email={client.email}
            phone={client.phone}
          />
        ))}
      </div>
    </div>
  );
}
