// pages/detail/detail.js
Page({
  data: {
    textdata: "测试 wx.request",
  },
  RequestData: function () {
    var that = this;
    wx.request({
      url: 'https://www.itit123.cn/blog/list',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header 默认是application/json
      success: function (res) {
        // 操作json数据
        var text ="";
        for(var i in res.data) {
          text += i + "." + res.data[i].title + "\r\n";
        }
        that.setData({ textdata: text});
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})