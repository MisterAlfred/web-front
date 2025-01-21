'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, Euro, FileText, Edit, Archive } from 'lucide-react';

interface UserCardProps {
  nom: string;
  prenom: string;
  email: string;
  phone: string;
}

export const UserCard = ({ nom, prenom, email, phone }: UserCardProps) => {
  return (
    <Card className="shadow-sm w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-4">
          <div className="w-1/3">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>
                {prenom[0]}
                {nom[0]}
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="w-2/3">
            <div className="font-semibold text-lg">
              {prenom} {nom}
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Email */}
        <div className="flex justify-between items-center border-b py-2">
          <span className="text-sm text-gray-600">{email}</span>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-500 hover:text-gray-800"
            onClick={() => navigator.clipboard.writeText(email)}
          >
            <Copy className="h-4 w-4" />
          </Button>
        </div>
        {/* Phone */}
        <div className="flex justify-between items-center py-2">
          <span className="text-sm text-gray-600">{phone}</span>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-500 hover:text-gray-800"
          >
            <Copy className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        {/* Left side */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-500 hover:text-gray-800"
          >
            <FileText className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-500 hover:text-gray-800"
          >
            <Euro className="h-4 w-4" />
          </Button>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-500 hover:text-gray-800"
          >
            <Edit className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-500 hover:text-gray-800"
          >
            <Archive className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
