import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    include: [
      "**/__test__/**/*.test.ts",
      "**/*.test.ts",
      "**/__tests__/**/*.test.ts",
    ],
    exclude: ["node_modules", "dist"],
  },
});
