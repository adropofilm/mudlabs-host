import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host',
      remotes: {
        piecesRemote: 'http://localhost:3001/assets/remoteEntry.js',
        creationsRemote: 'http://localhost:3002/assets/remoteEntry.js',
        tourGuideRemote: 'http://localhost:3003/assets/remoteEntry.js',
      },
      shared: {
        react: { singleton: true, eager: true },
        'react-dom': { singleton: true, eager: true },
        'pixel-retroui': { singleton: true, eager: false },
        '@mudlabs/ui': { singleton: true, eager: false },
      },
    }),
  ],
  build: {
    target: 'esnext',
  },
})
