new Vue({
    el: '#root',
    template: '<div>121</div>'
})

wx.login({
    success() {
        debugger
    },
    complete(res) {
        debugger
    }
})