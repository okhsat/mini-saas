"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "@/lib/api";

export default function DashboardClient() {
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if ( isLoading ) 
    return <p>Loading...</p>;

  return (
    <ul className="mt-4 space-y-2">
      {data.map((user: any) => (
        <li
          key={user.id}
          className="rounded bg-white p-3 shadow"
        >
          {user.name}
        </li>
      ))}
    </ul>
  );
}