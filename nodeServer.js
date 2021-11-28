let express = require('express')
let path = require('path')
let fs = require('fs')

let app = express()

app.get('*', (req, res) => {
    if (req.url.indexOf('init.js') != - 1) {
        res.set('Content-Type', 'application/javascript; charset=utf-8')
        res.send(fs.readFileSync(path.join('./server', `${req.url}`), 'utf-8'))
    } else if (req.url.indexOf('index.html') != -1) {
        res.send(fs.readFileSync(path.join('./server', `${req.url}`), 'utf-8'))
    }
    else {
        res.set('Content-Type', 'application/javascript; charset=utf-8')
        res.send(fs.readFileSync(path.join('./server', `${req.url}`), 'utf-8').replace(/document/g, 'window.documents').replace(/wx/g, 'wxx'))
    }
})
app.listen(8080)
