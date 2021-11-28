new Vue({
    el: '#root',
    template: '<div>121</div>'
})

wx.chooseImage({
    success(res) {
        debugger
    },
    complete(res) {
        debugger
    }
})