"use client";

import { useState } from "react";
import { useAppDispatch } from "@/redux/store";
import { register } from "@/redux/authSlice";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !email || !password) return;
    dispatch(register({ username, email, password }));
    alert("Inscription réussie !");
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50 dark:bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md max-w-md w-full"
      >
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-600 dark:text-blue-400">
          Inscription
        </h1>
        <input
          type="text"
          placeholder="Nom d’utilisateur"
          className="w-full px-4 py-2 mb-4 rounded border dark:bg-gray-900"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Adresse e-mail"
          className="w-full px-4 py-2 mb-4 rounded border dark:bg-gray-900"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          className="w-full px-4 py-2 mb-4 rounded border dark:bg-gray-900"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
        >
          S’inscrire
        </button>
      </form>
    </div>
  );
}
