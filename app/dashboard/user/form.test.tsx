import { describe, test, expect, vi, afterEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import UserForm from "./form";

describe("Test User Form", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("valid email submits", async () => {
    const spy = vi.spyOn(console, "log");

    render(<UserForm />);

    fireEvent.change(
      screen.getByPlaceholderText("Email"),
      { target: { value: "test@example.com" } }
    );

    fireEvent.click(
      screen.getByText("Submit")
    );

    await screen.findByDisplayValue("test@example.com");

    expect(spy).toHaveBeenCalledWith(
      "SUBMITTED",
      { email: "test@example.com" }
    );
  });

  test("invalid email is rejected", async () => {
    const spy = vi.spyOn(console, "log");

    render(<UserForm />);

    fireEvent.change(
      screen.getByPlaceholderText("Email"),
      { target: { value: "wrong-email" } }
    );

    fireEvent.click(screen.getByText("Submit"));

    await new Promise((r) => setTimeout(r, 200));

    expect(spy).not.toHaveBeenCalled();
  });
});