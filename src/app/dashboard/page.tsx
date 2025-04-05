"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import {
  deleteTestimonial,
  editTestimonial,
} from "@/redux/testimonialsSlice";
import { useState } from "react";
import AuthGuard from "@/components/AuthGuard";
import Link from "next/link";

export default function DashboardPage() {
  const dispatch = useDispatch();
  const projects = useSelector((state: RootState) => state.projects.list);
  const testimonials = useSelector((state: RootState) => state.testimonials.list);
  const skills = useSelector((state: RootState) => state.skills.list);

  const [editMode, setEditMode] = useState<string | null>(null);
  const [editedMessage, setEditedMessage] = useState("");

  const handleDelete = (id: string) => {
    dispatch(deleteTestimonial(id));
  };

  const handleEdit = (id: string, currentMessage: string) => {
    setEditMode(id);
    setEditedMessage(currentMessage);
  };

  const handleSave = (id: string) => {
    const original = testimonials.find((t) => t.id === id);
    if (!original) return;

    dispatch(
      editTestimonial({
        id,
        name: original.name,
        message: editedMessage,
        date: new Date().toLocaleDateString(),
      })
    );

    setEditMode(null);
  };

  return (
    <AuthGuard>
      <div className="min-h-screen px-6 py-12 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-950 text-gray-900 dark:text-white">
        <h1 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-12">
          Tableau de bord
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <Link href="/dashboard/projects" className="block">
            <div className="cursor-pointer bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg text-center transition transform hover:-translate-y-1">
              <h2 className="text-lg font-semibold">Projets</h2>
              <p className="text-4xl font-bold text-blue-600">{projects.length}</p>
            </div>
          </Link>

          <Link href="/dashboard/skills" className="block">
            <div className="cursor-pointer bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg text-center transition transform hover:-translate-y-1">
              <h2 className="text-lg font-semibold">Compétences</h2>
              <p className="text-4xl font-bold text-green-600">{skills.length}</p>
            </div>
          </Link>

          <Link href="/dashboard/testimonials" className="block">
            <div className="cursor-pointer bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg text-center transition transform hover:-translate-y-1">
              <h2 className="text-lg font-semibold">Témoignages</h2>
              <p className="text-4xl font-bold text-purple-600">{testimonials.length}</p>
            </div>
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-6 border-b border-gray-300 dark:border-gray-700 pb-2">
            Gérer les derniers témoignages
          </h2>
          <ul className="space-y-6">
            {testimonials.slice(0, 5).map((t) => (
              <li
                key={t.id}
                className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 flex justify-between items-start shadow-sm"
              >
                {editMode === t.id ? (
                  <div className="flex-1">
                    <textarea
                      value={editedMessage}
                      onChange={(e) => setEditedMessage(e.target.value)}
                      className="w-full p-3 rounded bg-white dark:bg-gray-800 text-black dark:text-white"
                      rows={2}
                    />
                    <button
                      onClick={() => handleSave(t.id)}
                      className="mt-2 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                      Sauvegarder
                    </button>
                  </div>
                ) : (
                  <div className="flex-1">
                    <p className="italic text-gray-800 dark:text-gray-100">
                      “{t.message}”
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      — {t.name} • {t.date}
                    </p>
                  </div>
                )}

                <div className="ml-4 flex flex-col gap-2">
                  {editMode !== t.id && (
                    <button
                      onClick={() => handleEdit(t.id, t.message)}
                      className="text-sm bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-500"
                    >
                      Modifier
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(t.id)}
                    className="text-sm bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                  >
                    Supprimer
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AuthGuard>
  );
}