const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
      ? '/PanaceaFront/'
      : '/',
  devServer: {
    proxy: 'http://localhost:8080',
    historyApiFallback: true
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/sass/_vars.sass"
          @import "@/assets/sass/_colors.sass"
        `
      }
    }
  }
})