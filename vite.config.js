import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Add this
      '/node_modules/': new URL('./node_modules/', import.meta.url).pathname,
    }
  }
})
