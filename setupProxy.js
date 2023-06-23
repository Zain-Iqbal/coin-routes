const { createProxyMiddleware } = require('http-proxy-middleware');
const {BASE_URL} = require("./src/utils/constants");

module.exports = function(app) {
    app.use(
        '/v2',
        createProxyMiddleware({
            target: BASE_URL, // Replace with your API server URL
            changeOrigin: true,
        })
    );
};
