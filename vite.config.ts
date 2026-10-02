import preact from "@preact/preset-vite";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/fms-qr-code-component/",
  plugins: [preact(), tailwindcss()],
});
