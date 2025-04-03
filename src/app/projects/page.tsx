"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  const projects = useSelector((state: RootState) => state.projects.list);

  return (
    <section className="min-h-screen px-6 py-12 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-950">
      <h1 className="text-4xl font-bold text-center text-blue-700 dark:text-blue-400 mb-10">
        Mes Projets
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
