"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function Home() {
  const [visible, setVisible] = useState(false);
  const skills = useSelector((state: RootState) => state.skills.list);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={`min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center transition-opacity duration-1000 ${
        visible ? "opacity-100" : "opacity-0"
      } bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-950`}
    >
      <img
        src="/images/profile.jpg"
        alt="Photo de profil"
        className="w-40 h-40 rounded-full object-cover border-4 border-blue-600 shadow-lg mb-6"
      />

      <h1 className="text-4xl sm:text-5xl font-bold text-blue-700 dark:text-blue-400 mb-4 leading-tight">
        Salut, moi c’est Jahswant 👋
      </h1>

      <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mb-6">
        Je suis un passionné de technologie et étudiant en programmation informatique. 
        Mon objectif est de créer des expériences web modernes, accessibles et performantes.
        Bienvenue sur mon portfolio !
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">
        Compétences clés :
      </h2>

      <ul className="flex flex-wrap justify-center gap-3 text-sm sm:text-base font-medium mb-10">
        {skills.map((skill) => (
          <li
            key={skill.id}
            className="bg-blue-100 text-blue-900 dark:bg-blue-800 dark:text-white px-4 py-1 rounded-full shadow hover:scale-105 transition-transform"
          >
            {skill.label}
          </li>
        ))}
      </ul>

      <a
        href="/projects"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-blue-700 transition"
      >
        Découvrir mes projets
      </a>
    </section>
  );
}
