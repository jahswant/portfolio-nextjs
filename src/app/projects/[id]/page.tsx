"use client";

import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Link from "next/link";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = useSelector((state: RootState) =>
    state.projects.list.find((p) => p.id === id)
  );

  if (!project) {
    return <p className="text-center text-red-500">Projet introuvable.</p>;
  }

  return (
    <section className="min-h-screen px-6 py-12 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-4xl mx-auto">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover rounded-lg shadow mb-6"
        />
        <h1 className="text-4xl font-bold text-blue-600 mb-4">{project.title}</h1>
        <p className="text-lg mb-6">{project.description}</p>

        <h2 className="text-2xl font-semibold mb-2">Technologies utilisées :</h2>
        <ul className="flex flex-wrap gap-3 mb-8">
          {project.technologies.map((tech, index) => (
            <li
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full dark:bg-blue-800 dark:text-white text-sm"
            >
              {tech}
            </li>
          ))}
        </ul>

        <Link
          href="/projects"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
        >
          ← Retour aux projets
        </Link>
      </div>
    </section>
  );
}
