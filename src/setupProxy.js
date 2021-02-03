const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
   const BASE_URL = 'http://ec2-3-19-209-157.us-east-2.compute.amazonaws.com:8080'
   app.use(
      '/api',
      createProxyMiddleware({
         target: BASE_URL,
         secure: false,
         changeOrigin: true,
         pathRewrite: {
            '^/api': '',
         },
      })
   )
}
