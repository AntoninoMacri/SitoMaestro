import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/SitoMaestroPage/", //toglierlo per provare la build in locale con:  npm run build e poi serve -s dist e quindi andare http://localhost:3000
  server: {
    open: true, // aprire automaticamente il browser
  },
});
