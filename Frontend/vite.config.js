import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  
  plugins: [react()],
  server: {
    
    headers: {
      "Cross-Origin-Opener-Policy": "same-origin",
      "Cross-Origin-Embedder-Policy": "require-corp",
    },
    cors: true,
    hmr: {
      protocol: 'ws', // Ensure WebSocket works properly
    }, // Allow CORS requests (optional)
   // https: true, // Forces HTTPS (important for SharedArrayBuffer)
  }
  
})
