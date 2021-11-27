let express = require('express')
let path = require('path')
let fs = require('fs')
// const { createProxyMiddleware } = require('http-proxy-middleware')

let app = express()
// app.use(express.static(__dirname + '/dist/'))
// app.use(
//     '/api',
//     createProxyMiddleware({
//         target: 'http://ztesa.com.cn:8004/api',
//         changeOrigin: true,
//         secure: false,
//         pathRewrite: { '^/api': '' }
//     })
// )
// app.use(
//     '/bpi',
//     createProxyMiddleware({
//         target: 'http://192.168.1.111:80/',
//         changeOrigin: true,
//         secure: false,
//         pathRewrite: { '^/bpi': '' }
//     })
// )
app.get('*', (req, res) => {
    res.set('Content-Type', 'application/javascript; charset=utf-8')
    if (req.url.indexOf('init.js') != - 1) {
        res.send(fs.readFileSync(path.join('./server', `${req.url}`), 'utf-8'))
    } else {
        res.send(fs.readFileSync(path.join('./server', `${req.url}`), 'utf-8').replace(/document/g, 'window.documents'))
    }
})
app.listen(8080)
