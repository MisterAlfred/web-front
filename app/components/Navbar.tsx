"use client";

import { useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronDown, Menu } from "lucide-react";

const Navbar = () => {
  const [currentModule, setCurrentModule] = useState("Création de Facture");

  return (
    <nav className="flex items-center justify-between bg-white p-4 shadow-sm">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        {/* Dropdown Menu des modules */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
              aria-label="Modules"
            >
              <Menu size={20} />
              <ChevronDown size={16} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setCurrentModule("Création de Facture")}>
              Création de Facture
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setCurrentModule("Clients")}>
              Clients
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setCurrentModule("KPI")}>
              KPI
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Module Actuel */}
        <span className="text-lg font-medium">{currentModule}</span>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Avatar Utilisateur */}
        <Avatar>
          <AvatarImage src="/public/window.svg" alt="User" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <span className="text-gray-700 font-medium">John Doe</span>
      </div>
    </nav>
  );
};

export default Navbar;
