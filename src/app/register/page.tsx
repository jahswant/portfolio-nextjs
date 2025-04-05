"use client";

import { useState } from "react";
import { useAppDispatch, RootState } from "@/redux/store";
import { register } from "@/redux/authSlice";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export default function RegisterPage() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const users = useSelector((state: RootState) => state.auth.registeredUsers);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    exists: "",
  });

  const validate = () => {
    const newErrors = {
      username: "",
      email: "",
      password: "",
      exists: "",
    };

    if (username.trim().length < 3) {
      newErrors.username = "Le nom d'utilisateur doit contenir au moins 3 caractères.";
    }

    if (!email.includes("@") || !email.includes(".")) {
      newErrors.email = "Adresse e-mail invalide.";
    }

    if (password.length < 6) {
      newErrors.password = "Le mot de passe doit contenir au moins 6 caractères.";
    }

    const emailExists = users.find(
      (u) => u.email.trim().toLowerCase() === email.trim().toLowerCase()
    );
    if (emailExists) {
      newErrors.exists = "Cet e-mail est déjà utilisé.";
    }

    setErrors(newErrors);

    return !Object.values(newErrors).some((e) => e !== "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    dispatch(register({ username, email, password }));
    alert("Inscription réussie !");
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50 dark:bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md max-w-md w-full space-y-4"
      >
        <h1 className="text-2xl font-bold text-center text-blue-600 dark:text-blue-400">
          Inscription
        </h1>

        <div>
          <input
            type="text"
            placeholder="Nom d’utilisateur"
            className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && (
            <p className="text-red-500 text-sm mt-1">{errors.username}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            placeholder="Adresse e-mail"
            className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
          {errors.exists && (
            <p className="text-red-500 text-sm mt-1">{errors.exists}</p>
          )}
        </div>

        <div>
          <input
            type="password"
            placeholder="Mot de passe"
            className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
        >
          S’inscrire
        </button>
      </form>
    </div>
  );
}