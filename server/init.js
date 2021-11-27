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
console.log('初始化完成')