"use client";
import AuthGuard from "@/components/AuthGuard";
import TestimonialManager from "@/components/TestimonialManager";

export default function TestimonialsDashboardPage() {
  return (
    <AuthGuard>
      <TestimonialManager />
    </AuthGuard>
  );
}
