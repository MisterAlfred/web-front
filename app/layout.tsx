import '@/app/globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/app/components/Navbar';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: '',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={cn(inter.className, 'bg-gray-50 text-gray-900')}>
        <Navbar />

        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
