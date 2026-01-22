import { describe, test, expect, vi } from "vitest";
import { fetchUsers } from "./api";

describe("fetchUsers", () => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve([{ id: 1, name: "Alice" }]),
    } as any)
  );

  test("returns users", async () => {
    const users = await fetchUsers();

    expect(users[0].name).toBe("Alice");
  });
});