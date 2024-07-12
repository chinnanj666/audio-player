import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    outDir: 'dist', // Set the output directory to 'dist'
    lib: {
      entry: resolve(__dirname, "src/App.jsx"),
      name: "Audio Player",
      fileName: "audio-player",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
