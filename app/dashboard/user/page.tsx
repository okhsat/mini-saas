import UserForm from "./form";
import DashboardButton from "./DashboardButton";

export default function UserFormPage() {
  return (
    <main className="p-10">
      {/* Dashboard Button */}
      <DashboardButton />

      <h1 className="text-xl font-bold">User Form</h1>

      <UserForm />
    </main>
  );
}