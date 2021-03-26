const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
   const BASE_URL = 'http://ec2-3-131-133-210.us-east-2.compute.amazonaws.com:8080'
   app.use(
      '/configurations',
      createProxyMiddleware({
         target: BASE_URL,
         secure: false,
         changeOrigin: true,
      })
   )
}
