module.exports = {
  publicPath: '/',
  assetsDir: '/',
  filenameHashing: true,
  lintOnSave: process.env.NODE_ENV !== 'production',
  productionSourceMap: false,
  devServer: {
    host: 'localhost',
    port: 8080,
    https: false,
    open: true,
    proxy: {
      '/paintlife': {
        target: 'https://api.it120.cc',
        ws: false,
        changeOrigin: false
      }
    }
  }
}
