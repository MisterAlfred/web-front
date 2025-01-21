'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface KpiCardProps {
  title: string;
  value: string | number;
}

export const KpiCard = ({ title, value }: KpiCardProps) => {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-semibold">{value}</p>
      </CardContent>
    </Card>
  );
};
