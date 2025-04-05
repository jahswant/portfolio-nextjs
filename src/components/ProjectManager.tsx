"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  addProject,
  deleteProject,
  editProject,
} from "@/redux/projectsSlice";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function ProjectManager() {
  const projects = useSelector((state: RootState) => state.projects.list);
  const dispatch = useDispatch();

  const [showForm, setShowForm] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newImage, setNewImage] = useState("");
  const [newTechnologies, setNewTechnologies] = useState("");
  const [errors, setErrors] = useState({ title: "", description: "", image: "", tech: "" });

  const [editId, setEditId] = useState<string | null>(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [editedImage, setEditedImage] = useState("");
  const [editedTechnologies, setEditedTechnologies] = useState("");

  const validate = () => {
    const newErrors = {
      title: newTitle ? "" : "Le titre est requis.",
      description: newDescription ? "" : "La description est requise.",
      image: newImage ? "" : "L'URL de l'image est requise.",
      tech: newTechnologies ? "" : "Les technologies sont requises.",
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((e) => !e);
  };

  const handleAdd = () => {
    if (!validate()) return;
    dispatch(
      addProject({
        id: uuid(),
        title: newTitle,
        description: newDescription,
        image: newImage,
        technologies: newTechnologies.split(",").map((t) => t.trim()),
      })
    );
    setNewTitle("");
    setNewDescription("");
    setNewImage("");
    setNewTechnologies("");
    setShowForm(false);
  };

  const handleEdit = (project: any) => {
    setEditId(project.id);
    setEditedTitle(project.title);
    setEditedDescription(project.description);
    setEditedImage(project.image);
    setEditedTechnologies(project.technologies.join(", "));
  };

  const handleSave = (id: string) => {
    if (editedTitle && editedDescription && editedImage) {
      dispatch(
        editProject({
          id,
          title: editedTitle,
          description: editedDescription,
          image: editedImage,
          technologies: editedTechnologies.split(",").map((t) => t.trim()),
        })
      );
      setEditId(null);
    }
  };

  const handleDelete = (id: string) => {
    dispatch(deleteProject(id));
  };

  return (
    <div className="min-h-screen max-w-4xl mx-auto px-4 py-10 text-gray-900 dark:text-white bg-white dark:bg-gray-900">
      <h1 className="text-3xl font-bold text-center text-blue-600 dark:text-blue-400 mb-8">
        Gestion des Projets
      </h1>

      <div className="mb-8">
        <button
          onClick={() => setShowForm(!showForm)}
          className="mb-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          {showForm ? "Annuler" : "Ajouter un nouveau projet"}
        </button>

        {showForm && (
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Titre du projet"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="p-3 rounded bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
            />
            {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}

            <textarea
              placeholder="Description du projet"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              className="p-3 rounded bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
              rows={3}
            />
            {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}

            <input
              type="text"
              placeholder="URL de l'image"
              value={newImage}
              onChange={(e) => setNewImage(e.target.value)}
              className="p-3 rounded bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
            />
            {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}

            <input
              type="text"
              placeholder="Technologies (séparées par des virgules)"
              value={newTechnologies}
              onChange={(e) => setNewTechnologies(e.target.value)}
              className="p-3 rounded bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
            />
            {errors.tech && <p className="text-red-500 text-sm">{errors.tech}</p>}

            <button
              onClick={handleAdd}
              className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
            >
              Enregistrer
            </button>
          </div>
        )}
      </div>

      <h2 className="text-xl font-semibold mb-4">Projets enregistrés</h2>
      <ul className="space-y-6">
        {projects.map((project) => (
          <li
            key={project.id}
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
          >
            {editId === project.id ? (
              <div className="space-y-3">
                <input
                  type="text"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                  className="w-full p-2 rounded bg-white dark:bg-gray-700 text-black dark:text-white"
                />
                <textarea
                  value={editedDescription}
                  onChange={(e) => setEditedDescription(e.target.value)}
                  className="w-full p-2 rounded bg-white dark:bg-gray-700 text-black dark:text-white"
                  rows={3}
                />
                <input
                  type="text"
                  value={editedImage}
                  onChange={(e) => setEditedImage(e.target.value)}
                  className="w-full p-2 rounded bg-white dark:bg-gray-700 text-black dark:text-white"
                  placeholder="URL de l'image"
                />
                <input
                  type="text"
                  value={editedTechnologies}
                  onChange={(e) => setEditedTechnologies(e.target.value)}
                  className="w-full p-2 rounded bg-white dark:bg-gray-700 text-black dark:text-white"
                  placeholder="Technologies (séparées par des virgules)"
                />
                <button
                  onClick={() => handleSave(project.id)}
                  className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
                >
                  Sauvegarder
                </button>
              </div>
            ) : (
              <div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-bold text-blue-700 dark:text-blue-300 mb-2">{project.title}</h3>
                <p className="text-gray-800 dark:text-gray-200 mb-2">{project.description}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Technologies: {project.technologies.join(", ")}
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => handleEdit(project)}
                    className="text-sm bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-500"
                  >
                    Modifier
                  </button>
                  <button
                    onClick={() => handleDelete(project.id)}
                    className="text-sm bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
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
