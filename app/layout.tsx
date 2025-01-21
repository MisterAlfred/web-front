import '@/app/globals.css';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { AppSidebar } from "@/app/components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

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
        <SidebarProvider>
          <AppSidebar />
          <main className="p-4 w-full">
            <SidebarTrigger />
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
