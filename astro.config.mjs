import tailwindcss from "@tailwindcss/vite";
// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // JETZT RICHTIG: Ohne www, passend zu deinen Ads und Vercel
  site: 'https://swisspeakmedia.ch',
  
  devToolbar: {
    enabled: false
  },

  vite: {
    plugins: [tailwindcss()]
  }
});