"use client";

import { useRouter } from "next/navigation";

export default function DashboardButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/dashboard")}
      className="mb-6 cursor-pointer rounded bg-gray-600 px-4 py-2 text-white hover:bg-gray-700 transition"
    >
      ← Dashboard
    </button>
  );
}