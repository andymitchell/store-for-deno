import { defineConfig } from "tsup";
 
export default defineConfig({
  entry: {
    'index': "src/index.ts"
  },
  publicDir: false,
  clean: true,
  target: ['esnext'],
  minify: false,
  external: ['zod'],
  dts: true,
  format: ['esm'], 
});