"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useAuthStore } from "@/store/auth.store";

export default function Home() {
  const { isLoggedIn, login, logout } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch("/api/me", {
          credentials: "include",
        });

        const data = await res.json();

        if ( data.loggedIn ) {
          login();

        } else {
          logout();
        }

      } catch {
        logout();
      }
    }

    checkAuth();
    
  }, [login, logout]);

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">
        Welcome to Mini SaaS
      </h1>

      <p className="mt-4 text-gray-600">
        This page is statically generated and SEO-friendly.
      </p>

      <Image
        className="mt-6 dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={100}
        height={20}
        priority
      /> Demo / Test

      {isLoggedIn && (
        <button
          onClick={() => router.push("/dashboard")}
          className="mt-6 block rounded bg-blue-600 px-4 py-2 text-white"
        >
          Dashboard
        </button>
      )}
    </main>
  );
}