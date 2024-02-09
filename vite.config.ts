import { defineConfig } from "vite";
import path from 'path';
 
export default defineConfig({
  resolve: {
    alias: {
      '@style': path.resolve(__dirname, 'styles'),
      '@lib': path.resolve(__dirname, 'lib'),
    },
  }
});