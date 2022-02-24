import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: "Budget-App",
        short_name: "Budget",
        theme_color: "#333333",
        background_color: "#160312",
        description:
          "This budget app is a tool to keep reflected in monetary amounts, expenses and current income of a specific person.",
        lang: "es",
        icons: [
          {
            src: "./assets/favicon.svg",
            sizes: "212x150",
            type: "image/svg+xml",
            purpose: "any",
          },
        ],
      },
    }),
  ],
});
