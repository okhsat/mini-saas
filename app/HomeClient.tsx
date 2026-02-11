"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth.store";

export default function HomeClient({
  isLoggedIn,
}: {
  isLoggedIn: boolean;
}) {
  const { login, logout } = useAuthStore();
  const router = useRouter();

  // Sync server state → Zustand
  useEffect(() => {
    if ( isLoggedIn ) 
      login();
    else 
      logout();

  }, [isLoggedIn, login, logout]);

  // Login handler
  const handleLogin = async () => {
    await fetch("/api/login", {
      method: "POST",
    });
    router.refresh();
  };

  // Logout handler
  const handleLogout = async () => {
    await fetch("/api/logout", {
      method: "POST",
    });
    router.refresh();
  };

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">
        Welcome to Mini SaaS
      </h1>
  
      <p className="mt-4 text-gray-600">
        This page is statically generated and SEO-friendly.
      </p>
  
      {/* AUTH BUTTONS */}
  
      {! isLoggedIn && (
        <button
          onClick={handleLogin}
          className="my-5 cursor-pointer rounded bg-green-600 px-4 py-2 text-white"
        >
          Login
        </button>
      )}
  
      {isLoggedIn && (
        <>
          <button
            onClick={() => router.push("/dashboard")}
            className="mt-6 cursor-pointer block rounded bg-blue-600 px-4 py-2 text-white"
          >
            Dashboard
          </button>
  
          <button
            onClick={handleLogout}
            className="my-5 cursor-pointer rounded bg-red-600 px-4 py-2 text-white"
          >
            Logout
          </button>
        </>
      )}
  
      <Image
        className="mt-6 dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={100}
        height={20}
        priority
      /> Demo / Test
    </main>
  );
}