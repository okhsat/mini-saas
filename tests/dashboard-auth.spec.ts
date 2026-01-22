import { test, expect, Page } from "@playwright/test";

test("unauthenticated users are redirected", async ({ page }: { page: Page }) => {
  // Ensure no auth cookie
  await page.context().clearCookies();

  await page.goto("http://localhost:3000/dashboard");

  await expect(page).toHaveURL("http://localhost:3000/");
});

test("authenticated users can access dashboard", async ({ page }) => {
  await page.context().addCookies([
    {
      name: "auth",
      value: "true",
      domain: "localhost",
      path: "/",
    },
  ]);

  await page.goto("http://localhost:3000/dashboard");

  await expect(page).toHaveURL(/dashboard/);
});