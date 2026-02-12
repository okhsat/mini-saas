import { test, expect, Page } from "@playwright/test";

test("home page loads", async ({ page }: { page: Page }) => {
  await page.goto("http://localhost:3000");
  await expect(
    page.getByText("Welcome to Mini SaaS")
  ).toBeVisible();
});