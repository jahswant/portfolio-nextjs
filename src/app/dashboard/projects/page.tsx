"use client";

import AuthGuard from "@/components/AuthGuard";
import ProjectManager from "@/components/ProjectManager";

export default function ProjectsDashboardPage() {
  return (
    <AuthGuard>
      <ProjectManager />
    </AuthGuard>
  );
}
