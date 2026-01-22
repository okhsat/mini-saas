import DashboardClient from "./DashboardClient";

export default async function DashboardPage() {
  return (
    <main className="p-10">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <DashboardClient />
    </main>
  );
}