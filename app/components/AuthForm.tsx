"use client"; // Rendre ce composant client

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface AuthFormProps {
  title: string;
  type: "login" | "register";
}

export default function AuthForm({ title, type }: AuthFormProps) {
  const [formData, setFormData] = useState({ email: "", password: "", confirmPassword: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Ici tu ajouteras ta logique d'API (ex : fetch POST vers ton backend)
  };

  return (
    <div className="w-full max-w-md mx-auto mt-12 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">{title}</h2>
      <form onSubmit={handleSubmit}>
        {/* Email Input */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <Input
            type="email"
            id="email"
            placeholder="Entrez votre email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium">
            Mot de passe
          </label>
          <Input
            type="password"
            id="password"
            placeholder="Entrez votre mot de passe"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {/* Confirm Password Input (Register seulement) */}
        {type === "register" && (
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-medium">
              Confirmez le mot de passe
            </label>
            <Input
              type="password"
              id="confirmPassword"
              placeholder="Confirmez votre mot de passe"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
        )}

        {/* Submit Button */}
        <Button type="submit" className="w-full">
          {type === "login" ? "Connexion" : "Inscription"}
        </Button>
      </form>

      {/* Lien vers une autre page */}
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
