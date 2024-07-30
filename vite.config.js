import { defineConfig } from "vite";
import pluginReact from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

const viteConfig = defineConfig({
  base: "/",
  server: {
    host: "localhost",
    port: 3000,
    open: false,
  },
  plugins: [
    pluginReact({
      jsxRuntime: "automatic",
    }),
  ], // 자동으로 React import 하도록 설정. 하지만 이는 vite 뿐만의 설정이므로 eslint등 개별적으로 설정해줘야함.

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)), // @기호를 사용하여 절대기호로 나타낼 수 있음.
    },
  },
});

export default viteConfig;
