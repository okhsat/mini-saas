import { describe, test, expect, beforeEach } from "vitest";
import { useAuthStore } from "./auth.store";

describe("auth store", () => {
  beforeEach(() => {
    // Reset store before each test
    useAuthStore.setState({ isLoggedIn: false });
  });

  test("login sets isLoggedIn to true", () => {
    useAuthStore.getState().login();

    expect(useAuthStore.getState().isLoggedIn).toBe(true);
  });

  test("logout sets isLoggedIn to false", () => {
    useAuthStore.getState().login();
    useAuthStore.getState().logout();

    expect(useAuthStore.getState().isLoggedIn).toBe(false);
  });
});