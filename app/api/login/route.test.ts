import { describe, test, expect } from "vitest";
import { POST } from "./route";

describe("POST /api/login", () => {
  test("sets auth cookie", async () => {
    const res = await POST();

    const cookies = res.headers.get("set-cookie");

    expect(cookies).toContain("auth=true");
    expect(cookies).toContain("HttpOnly");
  });

  test("returns success true", async () => {
    const res = await POST();
    const data = await res.json();

    expect(data.success).toBe(true);
  });
});