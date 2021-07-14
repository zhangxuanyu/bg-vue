import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path')
console.log(__dirname);

function resolve_path (dir) {
  return path.join(__dirname, './', dir)
}


export default defineConfig({
  plugins: [vue()],
  base:'./',
  clearScreen:false,
  resolve:{
    alias:{
      '@':resolve_path('src'),
    }
  },
  server:{
    proxy:{
      '/shzl/api': {
        target: 'https://sjgl.wodcloud.com/shzl/api',  // 接口域名
        changeOrigin: true,  // 是否跨域
        rewrite: (path) => path.replace('/shzl/api', ''),
      },
    }
  },
  build:{
    outDir:'dist/zjhl',
    assetsDir:'static'
  }
})
