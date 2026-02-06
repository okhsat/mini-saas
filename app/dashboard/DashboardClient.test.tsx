import { describe, test, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DashboardClient from "./DashboardClient";

describe("Test Dashboard Client", () => {
  beforeEach(() => {
    global.fetch = vi.fn(() =>
      Promise.resolve(
        new Response(
          JSON.stringify([
            { id: 1, name: "Alice" },
            { id: 2, name: "Bob" },
          ]),
          {
            status: 200,
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
      )
    ) as unknown as typeof fetch;
  });

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