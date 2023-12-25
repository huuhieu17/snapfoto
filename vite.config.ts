import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  define: {
    'process.env': process.env
  },
  css: {
    // modules: {
    //     include: /\.css$/,
    //     exclude: /node_modules/
    // },
    // postcss: {
    //
    // }
},
})
