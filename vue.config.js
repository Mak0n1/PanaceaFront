const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/PanaceaFront/',
  devServer: {
    proxy: 'http://localhost:8080',
    historyApiFallback: true,
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