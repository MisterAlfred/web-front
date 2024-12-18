"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface AuthFormProps {
  title: string;
  type: "login" | "register";
  onSubmit: (data: FormData) => void;
}

export default function AuthForm({ title, type, onSubmit }: AuthFormProps) {
  return (
    <div className="w-full max-w-md mx-auto mt-12 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">{title}</h2>
      <form onSubmit={(e) => { e.preventDefault(); onSubmit(new FormData(e.currentTarget)); }}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <Input type="email" id="email" placeholder="Entrez votre email" required />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium">
            Mot de passe
          </label>
          <Input type="password" id="password" placeholder="Entrez votre mot de passe" required />
        </div>

        {type === "register" && (
          <div className="mb-4">
            <label htmlFor="confirm-password" className="block text-sm font-medium">
              Confirmez le mot de passe
            </label>
            <Input
              type="password"
              id="confirm-password"
              placeholder="Confirmez votre mot de passe"
              required
            />
          </div>
        )}

        <Button type="submit" className="w-full">
          {type === "login" ? "Connexion" : "Inscription"}
        </Button>
      </form>

      <p className="mt-4 text-center text-sm">
        {type === "login" ? (
          <>
            Pas encore de compte ?{" "}
            <Link href="/register" className="text-blue-600 hover:underline">
              Inscrivez-vous
            </Link>
          </>
        ) : (
          <>
            Déjà un compte ?{" "}
            <Link href="/login" className="text-blue-600 hover:underline">
              Connectez-vous
            </Link>
          </>
        )}
      </p>
    </div>
  );
}
