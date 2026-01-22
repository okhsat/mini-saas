import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },

  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
    css: true,
    exclude: [
      "**/node_modules/**",
      "**/tests/**",        // 👈 Exclude Playwright folder
      "**/*.spec.ts"        // 👈 Exclude E2E
    ],
  },
});