new Vue({
    el: '#root',
    template: `
        <div>
        <img style="width:100%;height:100%" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.jj20.com%2Fup%2Fallimg%2F811%2F091114092956%2F140911092956-2.jpg&refer=http%3A%2F%2Fpic.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1640674491&t=9d9401878a745ec3dee0381ea8157d91"/>
        </div>
    `
})

wx.chooseImage({
    success(res) {
        debugger
    },
    complete(res) {
        debugger
    }
})