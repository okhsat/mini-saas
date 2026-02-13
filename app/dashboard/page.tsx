import DashboardClient from "./DashboardClient";
import DashboardButtons from "./DashboardButtons";

export default function DashboardPage() {
  return (
    <main className="p-10">
      {/* Navigation Buttons */}
      <DashboardButtons />      
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <DashboardClient />
    </main>
  );
}