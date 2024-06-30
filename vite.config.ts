import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import { ConfigEnv, UserConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import Pages from 'vite-plugin-pages'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

const consoleCDN = 'https://cdn.bootcdn.net/ajax/libs/vConsole/3.15.1/vconsole.min.js'
const ReactCompilerConfig = {}
export default ({ mode }: ConfigEnv): UserConfig => {
  return {
    envDir: './env',
    plugins: [
      react({
        babel: {
          plugins: [['babel-plugin-react-compiler', ReactCompilerConfig]]
        }
      }),
      Pages({
        extensions: ['tsx'],
        routeStyle: 'remix',
        exclude: ['**/components/**/*', '**/controller.tsx', '_app.tsx'], // _app.tsx 作为Root Layout
        importMode: 'async'
      }),
      legacy({}),
      createSvgIconsPlugin({
        iconDirs: [resolve(process.cwd(), 'src/assets/svg')],
        symbolId: 'icon-[name]',
        inject: 'body-first',
        customDomId: '__svg__icons__dom__'
      }),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            injectScript:
              mode === 'staging'
                ? `<script src="${consoleCDN}"></script>
                    <script onLoad>
                      var vConsole = new VConsole();
                    </script>`
                : ''
          }
        }
      })
    ],
    server: {
      port: 9527,
      proxy: {
        '/api': {
          target: 'https://wwwbaidu.com',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, '')
        }
      }
    },
    resolve: {
      alias: [{ find: '@', replacement: resolve(__dirname, './src') }]
    },
    css: {
      modules: {
        generateScopedName: '[local]__[hash:base64:5]'
      }
    },
    esbuild: {
      drop: mode === ' production' ? ['console', 'debugger'] : []
    },
    build: {
      chunkSizeWarningLimit: 1200,
      assetsDir: 'static/img/',
      rollupOptions: {
        output: {
          manualChunks: {
            // 分包
            vendor: ['react', 'react-dom', 'react-router-dom'],
            antd: ['antd-mobile']
          },
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
        }
      }
    }
  }
}
