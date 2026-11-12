import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),

    VitePWA({
      injectRegister: null,
      registerType: 'autoUpdate',

      manifest: {
        name: 'Minha Pokédex',
        short_name: 'Pokédex',
        description: 'Aplicação de consulta de Pokémon, filmes e personagens.',
        theme_color: '#6b3fa0',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },

      workbox: {
        globPatterns: [
          '**/*.{js,css,html,ico,png,svg,webp,woff2}'
        ],

        navigateFallback: '/index.html',

        runtimeCaching: [
          {
            // APIs externas
            urlPattern: /^https:\/\/(pokeapi\.co|dragonball-api\.com|[^/]+\.mockapi\.io|www\.omdbapi\.com)\//,

            handler: 'NetworkFirst',

            options: {
              cacheName: 'api-cache',

              networkTimeoutSeconds: 3,

              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24
              },

              cacheableResponse: {
                statuses: [200]
              }
            }
          },

          {
            // Imagens externas
            urlPattern: ({ request }) =>
              request.destination === 'image',

            handler: 'CacheFirst',

            options: {
              cacheName: 'image-cache',

              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 30
              },

              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      }
    })
  ]
})