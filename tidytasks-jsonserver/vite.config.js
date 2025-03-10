import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "./src",
  resolve: {
    alias: {
      "@js": resolve(__dirname, "src/assets/js"),
      "@controllers": resolve(__dirname, "server/controllers"),
    },
  },
  plugins: [tailwindcss()],
  optimizeDeps: {
    include: ["jose"],
  },
});
