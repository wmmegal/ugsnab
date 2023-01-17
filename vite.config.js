import nunjucks from 'vite-plugin-nunjucks'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import {resolve} from 'path';


export default {
    root: resolve(__dirname, 'src'),
    base: '',
    build: {
        outDir: '../dist',
        rollupOptions: {
            input: {
                app: resolve(__dirname, 'src', 'index.html'),
                main: resolve(__dirname, 'src', 'main.html'),
                text: resolve(__dirname, 'src', 'text.html'),
                certs: resolve(__dirname, 'src', 'certs.html'),
                catalog: resolve(__dirname, 'src', 'catalog.html'),
                catalog2: resolve(__dirname, 'src', 'catalog2.html'),
                catalog3: resolve(__dirname, 'src', 'catalog3.html'),
                novosti: resolve(__dirname, 'src', 'novosti.html'),
                partners: resolve(__dirname, 'src', 'partners.html'),
                contacts: resolve(__dirname, 'src', 'contacts.html'),
            },
            output: {
                assetFileNames: (assetInfo) => {
                    let extType = assetInfo.name.split('.')[1];
                    if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
                        extType = 'img';
                    }
                    if (/woff|woff2|ttf/i.test(extType)) {
                        extType = 'fonts';
                    }
                    return `assets/${extType}/[name]-[hash][extname]`;
                },
                chunkFileNames: 'assets/js/[name]-[hash].js',
                entryFileNames: 'assets/js/[name]-[hash].js',
            },
        },
    },
    resolve: {
        alias: {
            '~bootstrap': resolve(__dirname, 'node_modules/bootstrap'),
            '@': resolve(__dirname, 'src'),
        }
    },
    plugins: [
        nunjucks(),
        createSvgIconsPlugin({
            // Specify the icon folder to be cached
            iconDirs: [resolve(__dirname, 'src/img/icons')],
            // Specify symbolId format
            symbolId: 'icon-[name]',

        }),
    ],
    server: {
        port: 8080,
        hot: true
    }
}