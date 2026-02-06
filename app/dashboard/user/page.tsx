"use client";

import { useRouter } from "next/navigation";
import UserForm from "./form";

export default function UserFormPage() {
  const router = useRouter();

  return (
    <main className="p-10">
      {/* Home Button */}
      <button
        onClick={() => router.push("/dashboard")}
        className="mb-6 cursor-pointer rounded bg-gray-600 px-4 py-2 text-white hover:bg-gray-700 transition"
      >
        ← Dashboard
      </button>
      <h1 className="text-xl font-bold">User Form</h1>
      <UserForm />
    </main>
  );
}