import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host',
      filename: 'remoteEntry.js',
      remotes: {
        piecesRemote: {
          type: 'module',
          name: 'piecesRemote',
          entry: `${process.env.VITE_PIECES_REMOTE_URL}/assets/remoteEntry.js`,
          entryGlobalName: 'piecesRemote',
          shareScope: 'default',
        },
        creationsRemote: {
          type: 'module',
          name: 'creationsRemote',
          entry: `${process.env.VITE_CREATIONS_REMOTE_URL}/assets/remoteEntry.js`,
          entryGlobalName: 'creationsRemote',
          shareScope: 'default',
        },
        tourGuideRemote: {
          type: 'module',
          name: 'tourGuideRemote',
          entry: `${process.env.VITE_TOUR_GUIDE_REMOTE_URL}/assets/remoteEntry.js`,
          entryGlobalName: 'tourGuideRemote',
          shareScope: 'default',
        },
      },
      shared: ['react', 'react-dom', 'mudlabs-ui'],
    }),
  ],
  server: {
    port: 3000,
    origin: 'http://localhost:3000',
  },
  build: {
    target: 'chrome89',
  },
})
