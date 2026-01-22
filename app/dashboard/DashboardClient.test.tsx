import { describe, test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DashboardClient from "./DashboardClient";

describe("Test Dashboard Client", () => {
  const mockFetch = vi.fn(() =>
    Promise.resolve({
      ok: true,
      json: () =>
        Promise.resolve([
          { id: 1, name: "Alice" },
          { id: 2, name: "Bob" },
        ]),
    })
  );

  global.fetch = mockFetch as any;

  function renderWithQuery(ui: React.ReactNode) {
    const client = new QueryClient();

    return render(
      <QueryClientProvider client={client}>{ui}</QueryClientProvider>
    );
  }

  test("renders users from API", async () => {
    renderWithQuery(<DashboardClient />);

    expect(await screen.findByText("Alice")).toBeInTheDocument();
    expect(await screen.findByText("Bob")).toBeInTheDocument();
  });
});