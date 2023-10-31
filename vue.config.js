const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.PUBLIC_URL ? "/PanaceaFront/" : "/",
  devServer: {
    proxy: 'http://localhost:8080',
    historyApiFallback: true
  },
  css: {
    loaderOptions: {

      sass: {
        additionalData: `
          @import "@/assets/sass/_vars.sass"

        `
      }
    }
  }
})