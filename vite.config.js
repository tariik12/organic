/**
 * This javascript file is a vite configuration file. Here's an overview.
 
 *import "defineConfig" from the vite module, which is used to define Vite configuration. It export a default configuration object using the configuration function. This object contains configuration options for vite. Import react plugin from "@vite/plugin-react" module. This plugin enables Vite to handle React applications efficiently. Where plugins specifies an array of plugins to be used by Vite. In this case, it includes the 'react' plugin imported earlier.
 
 * This configuration enables Vite to handle React components and JSX syntax effectively during the build process.
 */

import { defineConfig } from 'vite' /** Import the defineConfig function from the 'vite' module  to default configuration*/
import react from '@vitejs/plugin-react' /** Import react from "@vitejs/plugin-react" module  */

// https://vitejs.dev/config/
export default defineConfig({ //It use to define vite configuration.
  plugins: [react()],//for enable plugin to handle react applications efficiently.
})
