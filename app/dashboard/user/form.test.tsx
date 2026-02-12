import { describe, test, expect, vi, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserForm from "./form";

describe("Test User Form", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("valid email submits", async () => {
    const logSpy = vi.spyOn(console, "log");

    vi.spyOn(window, "alert").mockImplementation(() => {});

    render(<UserForm />);

    const input = screen.getByPlaceholderText("Email");
    const button = screen.getByRole("button", { name: /submit/i });

    await userEvent.type(input, "test@example.com");
    await userEvent.click(button);
    await screen.findByDisplayValue("test@example.com");

    expect(logSpy).toHaveBeenCalledWith(
      "SUBMITTED",
      { email: "test@example.com" }
    );
  });

  test("invalid email is rejected", async () => {
    const logSpy = vi.spyOn(console, "log");

    vi.spyOn(window, "alert").mockImplementation(() => {});

    render(<UserForm />);

    const input = screen.getByPlaceholderText("Email");
    const button = screen.getByRole("button", { name: /submit/i });

    await userEvent.type(input, "wrong-email");
    await userEvent.click(button);

    // Proper assertion for validation message
    expect(await screen.findByText("Invalid email"))
      .toBeInTheDocument();

    expect(logSpy).not.toHaveBeenCalled();
  });
});