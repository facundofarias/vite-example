import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ command }) => {
  const isBuild = command === 'build'
  const buildTimestamp = Date.now()

  return {
    base: isBuild ? '/wp-content/themes/centralstation/dist/' : '/',
    server: {
      port: 3000,
      cors: true,
      origin: 'https://centralstation-darmstadt.test',
    },
    build: {
      manifest: true,
      outDir: 'dist',
      rollupOptions: {
        // Use the existing SPA entry; CSS is imported in src/main.ts
        input: ['index.html'],
        output: {
          // Force unique filenames on each build
          assetFileNames: `assets/[name]-${buildTimestamp}.[ext]`,
          chunkFileNames: `assets/[name]-${buildTimestamp}.js`,
          entryFileNames: `assets/[name]-${buildTimestamp}.js`,
        },
      },
    },
    plugins: [vue(), tailwindcss()],
  }
})
