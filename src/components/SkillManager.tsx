"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  addSkill,
  deleteSkill,
  editSkill,
} from "@/redux/skillsSlice";
import { useState } from "react";

export default function SkillManager() {
  const skills = useSelector((state: RootState) => state.skills.list);
  const dispatch = useDispatch();

  const [newSkill, setNewSkill] = useState("");
  const [error, setError] = useState("");
  const [editId, setEditId] = useState<string | null>(null);
  const [editedLabel, setEditedLabel] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleAdd = () => {
    if (!newSkill.trim()) {
      setError("Le nom de la compétence est requis.");
      return;
    }
    dispatch(addSkill(newSkill.trim()));
    setNewSkill("");
    setError("");
    setShowForm(false);
  };

  const handleEdit = (id: string, label: string) => {
    setEditId(id);
    setEditedLabel(label);
  };

  const handleSave = (id: string) => {
    if (editedLabel.trim()) {
      dispatch(editSkill({ id, label: editedLabel.trim() }));
      setEditId(null);
    }
  };

  const handleDelete = (id: string) => {
    dispatch(deleteSkill(id));
  };

  return (
    <div className="min-h-screen max-w-3xl mx-auto px-4 py-10 text-gray-900 dark:text-white bg-white dark:bg-gray-900">
      <h1 className="text-3xl font-bold text-center text-blue-600 dark:text-blue-400 mb-10">
        Gestion des Compétences
      </h1>

      <div className="mb-8">
        <button
          onClick={() => setShowForm(!showForm)}
          className="mb-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          {showForm ? "Annuler" : "Ajouter une compétence"}
        </button>

        {showForm && (
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Nouvelle compétence"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              className="flex-1 p-3 rounded bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
            />
            <button
              onClick={handleAdd}
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
            >
              Enregistrer
            </button>
          </div>
        )}
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>

      <h2 className="text-xl font-semibold mb-4">Liste des compétences</h2>
      <ul className="space-y-4">
        {skills.map((skill) => (
          <li
            key={skill.id}
            className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md border border-gray-200 dark:border-gray-700 flex justify-between items-center"
          >
            {editId === skill.id ? (
              <div className="flex-1">
                <input
                  type="text"
                  value={editedLabel}
                  onChange={(e) => setEditedLabel(e.target.value)}
                  className="w-full p-2 rounded bg-white dark:bg-gray-700 text-black dark:text-white"
                />
                <button
                  onClick={() => handleSave(skill.id)}
                  className="mt-2 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Sauvegarder
                </button>
              </div>
            ) : (
              <div className="flex-1">
                <p className="text-lg font-medium">{skill.label}</p>
              </div>
            )}

            <div className="ml-4 space-x-2">
              {editId !== skill.id && (
                <button
                  onClick={() => handleEdit(skill.id, skill.label)}
                  className="text-sm bg-yellow-400 px-3 py-1 rounded hover:bg-yellow-500 text-black"
                >
                  Modifier
                </button>
              )}
              <button
                onClick={() => handleDelete(skill.id)}
                className="text-sm bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
              >
                Supprimer
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}