window['wxx'] = (window['0'] || window['1'])['wx']
window.documents = {}
Array.from(Object.getOwnPropertyNames(parent.window.__global.document)).forEach(function (key) {
    window.documents[key] = parent.window.__global.document[key]
})
window.documents['head'] = parent.document.head
window.documents['body'] = parent.document.body
window.documents['window'] = parent.window
window.documents['window']['documentsElement'] = parent.document.body
window.documents['createTextNode'] = function (text) {
    const dom = window.documents.createElement('div')
    dom.innerText = text
    return dom
}
window.documents['querySelector'] = function (selector) {
    if (selector.indexOf('#') != -1) {
        return window.documents.getElementById(selector.replace('#', ''))
    } else {

    }
}
window.documents['createEvent'] = function (type) {
    return {
        timeStamp: Date.now(),
        type: type,
        initEvent: function (type, bubbles, cancelable) {
        }
    }
}
console.log('window', window)
// const navigator = parent.navigator || parent.__global.navigator
// const WebSocket = parent.WebSocket || parent.__global.WebSocket
// const prompt = parent.prompt || parent.__global.prompt
// const navigatorMatch = navigator.userAgent.match(/port\/(\d*)/)
// const port = navigatorMatch ? parseInt(navigatorMatch[1]) : 9974
// const url = "ws://127.0.0.1:" + port;
// const protocol = `APPSERVICE#${prompt("GET_MESSAGE_TOKEN")}#`
// let ws = new WebSocket(url, protocol);
// ws.onopen = function (event) {
//     debugger
// }
// ws.onmessage = function (event) {
//     console.log('object', event.data)
//     debugger
// }