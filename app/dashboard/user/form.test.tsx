import { describe, test, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import UserForm from "./form";

describe("Test User Form", () => {
  test("valid email submits form", async () => {
    render(<UserForm />);

    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "test@example.com" },
    });

    fireEvent.click(screen.getByText("Submit"));

    expect(
      await screen.findByDisplayValue("test@example.com")
      
    ).toBeInTheDocument();
  });
});