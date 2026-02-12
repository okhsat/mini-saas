import { test, expect, Page } from "@playwright/test";

test("dashboard displays users", async ({ page }: { page: Page }) => {
  await page.context().addCookies([
    {
      name: "auth",
      value: "true",
      domain: "localhost",
      path: "/",
    },
  ]);  
  await page.goto("http://localhost:3000/dashboard");
  await expect(page.getByText("Alice")).toBeVisible();
});