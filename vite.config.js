import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  ssr: {
    // Bundle every dependency into the prerender build. Several of them ship CommonJS
    // or import CSS, which Node cannot load directly.
    noExternal: true,
  },
})
