// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";


export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  pages: true,
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  css: ['~/styles/tailwind.css'],
})
