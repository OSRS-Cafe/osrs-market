import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import {VitePWA} from "vite-plugin-pwa";

import { cloudflare } from "@cloudflare/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), babel({ presets: [reactCompilerPreset()] }), VitePWA({
      registerType: "autoUpdate",

      manifest: {
        name: "OSRS Market",
        short_name: "OSRS Market",
        description: "Oldschool Runescape Market App",
        display: "standalone"
      },

      workbox: {
          runtimeCaching: [
              {
                  urlPattern: /^https:\/\/oldschool\.runescape\.wiki\/images\/.*/i,
                  handler: 'CacheFirst',
                  options: {
                      cacheName: 'osrs-wiki-cache',
                      expiration: {
                          maxEntries: 5_000,
                          maxAgeSeconds: 60 * 60 * 24 * 365,
                      },
                      cacheableResponse: {
                          statuses: [0, 200]
                      }
                  }
              }
          ]
      },
      mode: 'development'
  }), cloudflare()],
})