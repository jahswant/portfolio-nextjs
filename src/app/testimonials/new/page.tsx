"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/store";
import { addTestimonial } from "@/redux/testimonialsSlice";

export default function NewTestimonialPage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !message.trim()) {
      setError("Tous les champs sont obligatoires.");
      return;
    }

    dispatch(addTestimonial({ name, message }));
    router.push("/testimonials");
  };

  return (
    <section className="min-h-screen px-6 py-12 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 dark:text-blue-400 mb-6 text-center">
          Laisser un témoignage
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md">
          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Nom
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900"
              placeholder="Votre nom"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900"
              rows={4}
              placeholder="Votre message..."
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
}
