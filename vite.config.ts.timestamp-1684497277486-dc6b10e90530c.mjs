// vite.config.ts
import { defineConfig } from "file:///Users/bjj/Documents/%EB%AC%B8%EC%84%9C%20-%20%EB%B0%A9%EC%9E%AC%EC%A0%95%EC%9D%98%20MacBook%C2%A0Pro/react/react-playground/node_modules/vite/dist/node/index.js";
import react from "file:///Users/bjj/Documents/%EB%AC%B8%EC%84%9C%20-%20%EB%B0%A9%EC%9E%AC%EC%A0%95%EC%9D%98%20MacBook%C2%A0Pro/react/react-playground/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:1222",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYmpqL0RvY3VtZW50cy9cdUJCMzhcdUMxMUMgLSBcdUJDMjlcdUM3QUNcdUM4MTVcdUM3NTggTWFjQm9va1x1MDBBMFByby9yZWFjdC9yZWFjdC1wbGF5Z3JvdW5kXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvYmpqL0RvY3VtZW50cy9cdUJCMzhcdUMxMUMgLSBcdUJDMjlcdUM3QUNcdUM4MTVcdUM3NTggTWFjQm9va1x1MDBBMFByby9yZWFjdC9yZWFjdC1wbGF5Z3JvdW5kL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9iamovRG9jdW1lbnRzLyVFQiVBQyVCOCVFQyU4NCU5QyUyMC0lMjAlRUIlQjAlQTklRUMlOUUlQUMlRUMlQTAlOTUlRUMlOUQlOTglMjBNYWNCb29rJUMyJUEwUHJvL3JlYWN0L3JlYWN0LXBsYXlncm91bmQvdml0ZS5jb25maWcudHNcIjsvLyB2aXRlLmNvbmZpZy5qc1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCldLFxuICBzZXJ2ZXI6IHtcbiAgICBwcm94eToge1xuICAgICAgJy9hcGknOiB7XG4gICAgICAgIHRhcmdldDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MTIyMicsXG4gICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAgICAgcmV3cml0ZTogKHBhdGgpID0+IHBhdGgucmVwbGFjZSgvXlxcL2FwaS8sICcnKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQ0EsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxXQUFXO0FBRWxCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixRQUFRO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxRQUFRO0FBQUEsUUFDTixRQUFRO0FBQUEsUUFDUixjQUFjO0FBQUEsUUFDZCxTQUFTLENBQUMsU0FBUyxLQUFLLFFBQVEsVUFBVSxFQUFFO0FBQUEsTUFDOUM7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
