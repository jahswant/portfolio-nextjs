"use client";

import AuthGuard from "@/components/AuthGuard";
import SkillManager from "@/components/SkillManager";

export default function SkillsDashboardPage() {
  return (
    <AuthGuard>
      <SkillManager />
    </AuthGuard>
  );
}