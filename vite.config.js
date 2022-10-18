import nunjucks from 'vite-plugin-nunjucks'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import {resolve} from 'path';


export default {
    root: resolve(__dirname, 'src'),
    resolve: {
        alias: {
            '~bootstrap': resolve(__dirname, 'node_modules/bootstrap'),
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