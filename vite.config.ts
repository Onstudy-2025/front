import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr({
    include: '**/*.svg?react',
  }),],
  resolve: {
    alias: {
      app: path.resolve(__dirname, 'src/app'),
      entities: path.resolve(__dirname, 'src/entities'),
      features: path.resolve(__dirname, 'src/features'),
      pages: path.resolve(__dirname, 'src/pages'),
      shared: path.resolve(__dirname, 'src/shared'),
      widgets: path.resolve(__dirname, 'src/widgets'),
    },
  },
  server: {
    port: 3000,
  },
})
