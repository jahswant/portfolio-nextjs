"use client";

import { useState } from "react";
import { useAppDispatch, RootState } from "@/redux/store";
import { login } from "@/redux/authSlice";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export default function LoginPage() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const users = useSelector((state: RootState) => state.auth.registeredUsers);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const userExists = users.find((u) => {
      const match = u.email.trim().toLowerCase() === email.trim().toLowerCase();
      if (match) {
        return true;
      }
      return false;
    });

    if (userExists) {
      dispatch(login({ email, password }));
      router.push("/");
    } else {
      setError("Email ou mot de passe incorrect !");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50 dark:bg-gray-900">
      <form
        onSubmit={handleLogin}
        className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md max-w-md w-full"
      >
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-600 dark:text-blue-400">
          Connexion
        </h1>

        {error && (
          <div className="text-red-500 text-sm text-center mb-4">{error}</div>
        )}

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
          Se connecter
        </button>
      </form>
    </div>
  );
}
