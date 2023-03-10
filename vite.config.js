import {resolve} from "path";
import react from "@vitejs/plugin-react";
import {defineConfig} from "vite";
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [svgr(), react({
        babel: {
            babelrc: true
        }
    })],
    resolve: {
        alias: {
            "@app": resolve(__dirname, "./src"),
        },
    },
});
