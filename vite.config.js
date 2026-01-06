import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Ensure proper module resolution
      'react-router-dom': path.resolve(__dirname, 'node_modules/react-router-dom')
    }
  },
  build: {
    rollupOptions: {
      external: [], // Make sure react-router-dom is not external
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom']
        }
      }
    }
  }
})