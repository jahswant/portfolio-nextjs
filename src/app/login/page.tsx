"use client";

import { useEffect, useState } from "react";
import { useAppDispatch, RootState } from "@/redux/store";
import { login } from "@/redux/authSlice";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import Link from "next/link";

export default function LoginPage() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const users = useSelector((state: RootState) => state.auth.registeredUsers);
  const currentUser = useSelector((state: RootState) => state.auth.user);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    login: "",
  });

  useEffect(() => {
    if (currentUser) {
      router.push("/");
    }
  }, [currentUser, router]);

  const validate = () => {
    const newErrors = {
      email: "",
      password: "",
      login: "",
    };

    if (!email.trim()) {
      newErrors.email = "L'adresse e-mail est requise.";
    } else if (!email.includes("@") || !email.includes(".")) {
      newErrors.email = "Adresse e-mail invalide.";
    }

    if (!password) {
      newErrors.password = "Le mot de passe est requis.";
    } else if (password.length < 6) {
      newErrors.password = "Le mot de passe doit contenir au moins 6 caractères.";
    }

    setErrors(newErrors);

    return !Object.values(newErrors).some((e) => e !== "");
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    const userExists = users.find(
      (u) =>
        u.email.trim().toLowerCase() === email.trim().toLowerCase() &&
        u.password === password
    );

    if (userExists) {
      dispatch(login({ email, password }));
      router.push("/");
    } else {
      setErrors((prev) => ({
        ...prev,
        login: "Email ou mot de passe incorrect !",
      }));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            Connexion à votre compte
          </h2>
        </div>
        <form
          onSubmit={handleLogin}
          className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md space-y-6"
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Adresse e-mail
            </label>
            <input
              id="email"
              type="email"
              placeholder="Votre adresse e-mail"
              className="w-full px-4 py-2 mt-1 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="text-sm text-red-600 dark:text-red-400 mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Mot de passe
            </label>
            <input
              id="password"
              type="password"
              placeholder="Votre mot de passe"
              className="w-full px-4 py-2 mt-1 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <p className="text-sm text-red-600 dark:text-red-400 mt-1">{errors.password}</p>
            )}
          </div>

          {errors.login && (
            <p className="text-sm text-red-600 dark:text-red-400 text-center">
              {errors.login}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition"
          >
            Se connecter
          </button>

          <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-300">
            Vous n'avez pas de compte ?{" "}
            <Link
              href="/register"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Inscrivez-vous
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
