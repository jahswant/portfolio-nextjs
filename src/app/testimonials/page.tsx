"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Link from "next/link";

export default function TestimonialsPage() {
  const testimonials = useSelector((state: RootState) => state.testimonials.list || []);
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <section className="min-h-screen px-6 py-12 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-700 dark:text-blue-400 mb-10 text-center">
          Témoignages
        </h1>

        {testimonials.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400 text-lg italic">
            Aucun témoignage pour le moment.
          </p>
        ) : (
          <ul className="space-y-6">
            {testimonials.map((t) => (
              <li
                key={t.id}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
              >
                <p className="text-gray-800 dark:text-gray-100 text-lg italic">“{t.message}”</p>
                <div className="mt-4 flex justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>— {t.name}</span>
                  <span>{t.date}</span>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="text-center mt-10">
          {user ? (
            <Link
              href="/testimonials/new"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-blue-700 transition"
            >
              Laisser un témoignage
            </Link>
          ) : (
            <p className="text-sm text-gray-600 dark:text-gray-400">
              🔒 Connectez-vous pour laisser un témoignage.
              <Link href="/login" className="text-blue-600 underline ml-1 hover:text-blue-800">
                Se connecter
              </Link>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
