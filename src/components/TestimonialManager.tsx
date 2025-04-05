"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useState } from "react";
import {
  deleteTestimonial,
  editTestimonial,
  addTestimonial,
} from "@/redux/testimonialsSlice";
import { useRouter } from "next/navigation";

export default function TestimonialManager() {
  const testimonials = useSelector((state: RootState) => state.testimonials.list);
  const dispatch = useDispatch();
  const router = useRouter();

  const [editId, setEditId] = useState<string | null>(null);
  const [edited, setEdited] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleEdit = (id: string, current: string) => {
    setEditId(id);
    setEdited(current);
  };

  const handleSave = (id: string) => {
    const t = testimonials.find((x) => x.id === id);
    if (!t || !edited.trim()) return;
    dispatch(
      editTestimonial({
        ...t,
        message: edited.trim(),
        date: new Date().toLocaleDateString(),
      })
    );
    setEditId(null);
  };

  const handleDelete = (id: string) => {
    dispatch(deleteTestimonial(id));
  };

  const handleAdd = () => {
    if (!newMessage.trim()) {
      setError("Le message ne peut pas être vide.");
      return;
    }
    dispatch(addTestimonial({ name: "Admin", message: newMessage.trim() }));
    setNewMessage("");
    setError("");
    setShowForm(false);
  };

  return (
    <div className="min-h-screen max-w-4xl mx-auto px-4 py-10 text-gray-900 dark:text-white bg-white dark:bg-gray-900">
      <h1 className="text-3xl font-bold text-center text-blue-600 dark:text-blue-400 mb-10">
        Gestion des Témoignages
      </h1>

      {/* Boutons alignés horizontalement */}
      <div className="mb-8 flex flex-col sm:flex-row justify-start gap-4">
        <button
          onClick={() => router.push("/dashboard")}
          className="bg-gray-700 text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
        >
          ← Retour au tableau de bord
        </button>

        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          {showForm ? "Annuler" : "Ajouter un témoignage"}
        </button>
      </div>

      {showForm && (
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <textarea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Saisissez un nouveau témoignage..."
            className="flex-1 p-3 rounded bg-gray-100 dark:bg-gray-800 text-black dark:text-white resize-none"
            rows={3}
          />
          <button
            onClick={handleAdd}
            className="self-start bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
          >
            Enregistrer
          </button>
        </div>
      )}
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

      <h2 className="text-xl font-semibold mb-4">Témoignages enregistrés</h2>

      <ul className="space-y-6">
        {testimonials.map((t) => (
          <li
            key={t.id}
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
          >
            {editId === t.id ? (
              <div>
                <textarea
                  value={edited}
                  onChange={(e) => setEdited(e.target.value)}
                  className="w-full p-3 mb-3 rounded bg-white dark:bg-gray-700 text-black dark:text-white resize-none"
                  rows={3}
                />
                <button
                  onClick={() => handleSave(t.id)}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Sauvegarder
                </button>
              </div>
            ) : (
              <div>
                <p className="italic text-lg text-gray-800 dark:text-gray-100 mb-2">
                  “{t.message}”
                </p>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  — {t.name} • {t.date}
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => handleEdit(t.id, t.message)}
                    className="bg-yellow-400 text-black px-4 py-1 rounded hover:bg-yellow-500"
                  >
                    Modifier
                  </button>
                  <button
                    onClick={() => handleDelete(t.id)}
                    className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
