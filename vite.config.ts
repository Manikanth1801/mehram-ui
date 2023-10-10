import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5000, // specify the desired port number here
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src", // Set the '/@' alias to the 'src' directory
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/styles/_variables.scss";`, // Optional: Import global SCSS variables
      },
    },
  },
})
