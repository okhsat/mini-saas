import { describe, test, expect, vi, beforeEach } from "vitest";
import { fetchUsers } from "./api";
import type { User } from "@/types/user";

describe("fetchUsers", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  test("returns users", async () => {
    const mockUsers: User[] = [
      { id: 1, name: "Alice" },
    ];

    vi.spyOn(global, "fetch").mockResolvedValueOnce({
      ok: true,
      json: async () => mockUsers,
    } as Response);

    const users = await fetchUsers();

    expect(users[0].name).toBe("Alice");
  });
});