import tailwindcss from "@tailwindcss/vite";
// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // HIER DIE WICHTIGE ERGÄNZUNG:
  site: 'https://www.swisspeakmedia.ch',
  
  devToolbar: {
    enabled: false
  },

  vite: {
    plugins: [tailwindcss()]
  }
});