'use client';

import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronLeft, ChevronRight, Archive } from 'lucide-react';

interface DataTableProps {
  title: string;
  data: any[];
  columns: {
    key: string;
    label: string;
    sortable?: boolean;
    render?: (row: any) => React.ReactNode;
  }[];
  addPath?: string;
}

export const DataTable = ({ title, data, columns, addPath = '/ajouter' }: DataTableProps) => {
  const [search, setSearch] = useState('');
  const [showArchived, setShowArchived] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const [sortKey, setSortKey] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  const filteredData = data
    .filter((item) =>
      showArchived ? true : !item.archived
    )
    .filter((item) =>
      columns.some((col) =>
        `${item[col.key]}`.toLowerCase().includes(search.toLowerCase())
      )
    )
    .sort((a, b) => {
      if (!sortKey) return 0;

      const valueA = a[sortKey];
      const valueB = b[sortKey];

      if (typeof valueA === 'string') {
        return sortOrder === 'asc'
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      }

      return sortOrder === 'asc' ? Number(valueA) - Number(valueB) : Number(valueB) - Number(valueA);
    });

  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">{title}</h1>
        <Button
          onClick={() => (window.location.href = addPath)}
          className="bg-blue-500 text-white hover:bg-blue-600"
        >
          Ajouter
        </Button>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <Input
          type="text"
          placeholder={`Rechercher dans ${title.toLowerCase()}...`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-1/3"
        />
        <Button
          variant="ghost"
          className={`flex items-center gap-2 ${showArchived ? 'text-blue-500' : 'text-gray-500'}`}
          onClick={() => setShowArchived(!showArchived)}
        >
          <Archive className="w-4 h-4" />
          {showArchived ? 'Afficher tout' : 'Afficher archivés'}
        </Button>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((col) => (
                <TableHead
                  key={col.key}
                  onClick={() => col.sortable && handleSort(col.key)}
                  className={col.sortable ? 'cursor-pointer' : ''}
                >
                  {col.label}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.map((row, index) => (
                <TableRow
                key={index}
                className={
                  row.archived
                  ? 'bg-orange-100'
                  : index % 2 === 0
                  ? 'bg-gray-50'
                  : 'bg-white'
                }
                >
                {columns.map((col) => (
                  <TableCell key={col.key}>
                  {col.render ? col.render(row) : row[col.key]}
                  </TableCell>
                ))}
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex justify-between items-center mt-4">
        <Button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          variant="outline"
        >
          <ChevronLeft className="w-4 h-4" />
          Précédent
        </Button>
        <span>
          Page {currentPage} sur {totalPages}
        </span>
        <Button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          variant="outline"
        >
          Suivant
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};
