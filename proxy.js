 const express = require('express');
 const { createProxyMiddleware } = require('http-proxy-middleware');
 const app = express();

 app.use('/api', createProxyMiddleware({
     target: 'https://api.sportradar.com',
     changeOrigin: true,
     pathRewrite: {
         '^/api': '', // remove /api prefix when forwarding to the target
     },
 }));

 app.listen(3001, () => {
     console.log('Proxy server is running on http://localhost:3001');
 });
 