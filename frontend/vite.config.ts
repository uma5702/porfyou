import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/porfyou/', // 예: '/porfyou-front/'
  plugins: [react()],
})