"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { deleteTestimonial } from "@/redux/testimonialsSlice";
import { useState } from "react";

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
    setEditMode(null);
  };

  return (
    <div className="min-h-screen px-6 py-10 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-8 text-center">Tableau de bord</h1>

      {/* KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-center">
          <h2 className="text-lg font-semibold">Projets</h2>
          <p className="text-4xl font-bold text-blue-600">{projects.length}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-center">
          <h2 className="text-lg font-semibold">Compétences</h2>
          <p className="text-4xl font-bold text-green-600">{skills.length}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-center">
          <h2 className="text-lg font-semibold">Témoignages</h2>
          <p className="text-4xl font-bold text-purple-600">{testimonials.length}</p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Gérer les témoignages</h2>
        <ul className="space-y-4">
          {testimonials.map((t) => (
            <li
              key={t.id}
              className="border border-gray-300 dark:border-gray-600 p-4 rounded-md flex justify-between items-start"
            >
              {editMode === t.id ? (
                <div className="flex-1">
                  <textarea
                    value={editedMessage}
                    onChange={(e) => setEditedMessage(e.target.value)}
                    className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
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
                  <p className="italic">"{t.message}"</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">— {t.name}</p>
                </div>
              )}
              <div className="flex flex-col gap-2 ml-4">
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
  );
}
