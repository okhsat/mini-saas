import { cookies } from "next/headers";
import HomeClient from "./HomeClient";

export default async function HomePage() {
  const cookieStore = await cookies();

  const token = cookieStore.get("auth");

  const isLoggedIn = !!token;

  return <HomeClient isLoggedIn={isLoggedIn} />;
}