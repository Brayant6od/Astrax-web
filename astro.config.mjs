import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // 'site' es la dirección base de tu página en GitHub
  site: 'https://brayant6od.github.io', 
  
  // 'base' es el nombre exacto de tu repositorio. 
  // ¡Ojo! Debe empezar y terminar con diagonal (/)
  base: '/Astrax-web/',                 
  
  integrations: [tailwind()]
});