module.exports = {
    publicPath: './',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://192.168.0.104:8919',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
        // proxy: 'http://172.16.181.250:8908'
    },
    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    'primary-color': '#5581E3',
                },
                javascriptEnabled: true
            }
        }
    },
};
