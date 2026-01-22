import Image from "next/image";

export default function Home() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">Welcome to Mini SaaS</h1>
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
      />
    </main>
  );
}