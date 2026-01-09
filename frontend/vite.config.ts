import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";
import "@testing-library/jest-dom/vitest";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
  },
});
