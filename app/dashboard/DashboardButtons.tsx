"use client";

import { useRouter } from "next/navigation";

export default function DashboardButtons() {
  const router = useRouter();

  return (
    <div className="flex gap-3">
      {/* Home Button */}
      <button
        onClick={() => router.push("/")}
        className="mb-6 cursor-pointer rounded bg-gray-600 px-4 py-2 text-white hover:bg-gray-700 transition"
      >
        ← Home
      </button>

      {/* Account Button */}
      <button
        onClick={() => router.push("/dashboard/user")}
        className="mb-6 cursor-pointer rounded bg-gray-600 px-4 py-2 text-white hover:bg-gray-700 transition"
      >
        Account → 
      </button>
    </div>
  );
}