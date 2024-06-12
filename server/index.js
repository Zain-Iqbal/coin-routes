const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/ws', createProxyMiddleware({
    target: 'wss://ws-feed.exchange.coinbase.com',
    changeOrigin: true,
    ws: true,
    secure:false
}));

app.listen(4000, () => {
    console.log('Proxy server is running on port 4000');
});
