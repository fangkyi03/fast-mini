import { Component } from 'react'

const style = parent.document.createElement('style')
style.innerHTML = `
    body>div:nth-child(1) {
        position: absolute;
        left: 0px;
        top: 0px;
        right: 0px;
        bottom: 0px;
        z-index: 99999;
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
setTimeout(() => {
    parent.document.body.appendChild(index)
}, 1000)

class App extends Component {
    render() {
        return this.props.children
    }
}

export default App
