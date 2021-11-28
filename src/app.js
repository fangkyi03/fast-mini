import { Component } from 'react'

let hasInit = false

Array.from(parent.document.body.childNodes).forEach((e) => {
    if (e.src && e.src.indexOf('index.js') > -1) {
        hasInit = true
    }
})
function init() {
    const style = parent.document.createElement('style')
    style.innerHTML = `
    #root {
        position: absolute;
        left: 0px;
        top: 0px;
        right: 0px;
        bottom: 0px;
        z-index: 99999;
        color:red;
    }
    body>div:nth-of-type(1) {
        position: absolute;
        left: 0px;
        top: 0px;
        right: 0px;
        bottom: 0px;
        z-index: 99999;
        color:red;
    }
`
    const root = parent.document.createElement('div')
    root.id = 'root'
    const initJS = parent.document.createElement('script')
    initJS.src = 'http://127.0.0.1:8080/init.js'
    const vue = parent.document.createElement('script')
    vue.src = 'http://127.0.0.1:8080/vue.min.js'
    const index = parent.document.createElement('script')
    index.src = 'http://127.0.0.1:8080/index.js'
    parent.document.body.appendChild(style)
    parent.document.body.appendChild(root)
    parent.document.body.appendChild(initJS)
    parent.document.body.appendChild(vue)
    parent.document.body.appendChild(index)
}
!hasInit && init()
class App extends Component {
    render() {
        return this.props.children
    }
}

export default App
