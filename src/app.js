import { Component } from 'react'
import './app.less'

function initReact() {
  const root = parent.document.createElement('div')
  root.id = 'root'
  parent.document.body.appendChild(root)
  const react = parent.document.createElement('script')
  react.src = 'http://127.0.0.1:8080/index.js'
  // const reactDom = parent.document.createElement('script')
  // reactDom.src = 'http://127.0.0.1:8080/reactDom.js'
  // const babel = parent.document.createElement('script')
  // babel.src = 'http://127.0.0.1:8080/babel.js'
  // const script = parent.document.createElement('script')
  // script.type = 'text/babel'
  // script.innerHTML = 'console.log(ReactDOM)'
  parent.document.body.appendChild(react)
  // parent.document.body.appendChild(reactDom)
  // parent.document.body.appendChild(babel)
  // parent.document.body.appendChild(script)
  // console.log('aa', parent.document);
  // parent.document.body.innerHTML = '<div id="root">123</div>'
  console.log('asd', parent)
  // parent.location.href = 'http://www.baidu.com'
}
initReact()
// const root = parent.document.createElement('div')
// root.innerHTML = '1231231'
// root.id = 'root'
// root.style.position = 'fixed'
// root.style.top = '0'
// root.style.left = '0'
// root.style.width = '100%'
// root.style.height = '100%'
// root.style.zIndex = '9999'
// parent.document.body.appendChild(root)
// window['document'] = {}
// Object.keys(parent.window.__global.document).forEach(key => {
//   window['document'][key] = parent.window.__global.document[key]
// })

// window['document']['body'] = parent.document.body
// window['document']['createEvent'] = function createEvent(type) {
//   return {
//     initEvent: () => { },
//     timeStamp: new Date.now()
//   }
// }
// const fundebug = parent.document.createElement('script')
// fundebug.src = 'http://127.0.0.1:8080/fundebug.js'
// fundebug.crossOrigin = 'anonymous'
// fundebug.apikey = '7858f70815bda8964d54ac7903a05606bdbbf472f3d0556d011585eb764ac3cc'
// const head = parent.document.head
// const vue = parent.document.createElement('script')
// vue.src = 'http://127.0.0.1:8080/vue.min.js'
// const server = parent.document.createElement('script')
// server.src = 'http://127.0.0.1:8080/index.js'
// const root = parent.document.createElement('div')
// root.innerHTML = '1231231'
// root.id = 'root'
// head.appendChild(fundebug)
// head.appendChild(vue)
// head.appendChild(server)
// window.document.body.appendChild(root)
// console.log('window', window['document'])
class App extends Component {

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children
  }
}

export default App
