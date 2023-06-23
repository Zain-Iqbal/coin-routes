const { createProxyMiddleware } = require('http-proxy-middleware');
const {BASE_URL} = require("./src/utils/constants");

module.exports = function addProxyMiddleware(app) {
    app.use(
        '/v2',
        createProxyMiddleware({
            target: BASE_URL,
            changeOrigin: true,
        }),
    );
};
