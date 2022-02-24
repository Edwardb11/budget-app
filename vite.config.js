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
        display: "fullscreen",
        orientation: "landscape",
        theme_color: "aliceblue",
        background_color: "red",
        description:
          "This budget app is a tool to keep reflected in monetary amounts, expenses and current income of a specific person.",
        lang: "es",
        icons: [
          {
            src: "./assets/favicon.ico",
            sizes: "255x247",
            type: "image/x-ico",
            purpose: "any",
          },
        ],
      },
    }),
  ],
});
