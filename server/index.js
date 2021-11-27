/* eslint-disable no-undef */
// const css = document.createElement('style')
// css.innerHTML = '#app {position:fixed;left:0;right:0;top:0;bottom:0;z-index:9999;}'
const root = document.createElement('div')
root.id = 'app'
root.innerHTML = '1313'
root.className = 'app'
// document.head.appendChild(css)
document.body.appendChild(root)

new Vue({
    el: '#app',
    template: '<div>123123123123123123123123</div>'
})