import nunjucks from 'vite-plugin-nunjucks'
import {createSvgIconsPlugin} from 'vite-plugin-svg-icons'
import {defineConfig} from 'vite'
import {resolve} from 'path';
import glob from 'glob';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import htmlPurge from 'vite-plugin-html-purgecss'

export default defineConfig({
    root: resolve(__dirname, 'src'),
    base: '',
    build: {
        outDir: '../public',
        rollupOptions: {
            input: Object.fromEntries(
                glob.sync('src/*.html').map(function (file) {
                    const url = new URL(file, import.meta.url);

                    return [
                        path.relative(
                            'src',
                            file.slice(0, file.length - path.extname(file).length)
                        ),
                        fileURLToPath(url)
                    ]
                })
            ),
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
        htmlPurge(),
        createSvgIconsPlugin({
            // Specify the icon folder to be cached
            iconDirs: [resolve(__dirname, 'src/img/icons')],
            // Specify symbolId format
            symbolId: 'icon-[name]',
        }),
    ],
    server: {
        port: 8080,
        watch: {
            usePolling: true,
        }
    }
})