import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/shopping-cart/dist/",
  plugins: [react()],
  server: {
    middleware: (app) => {
      app.use((req, res, next) => {
        res.setHeader("Set-Cookie", "SameSite=None; Secure");
        next();
      });
    },
  },
});
