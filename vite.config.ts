import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/legal-content': {
        target: 'https://gql-dev.creatormap.lk',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/legal-content/, ''),
      },
    },
  },
})
