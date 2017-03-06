// pages/detail/detail.js
Page({
  data: {
    textdata: "put value",
  },
  RequestData: function () {
    var that = this;
    wx.request({
      url: 'https://baidu.com',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        that.setData({ textdata: res.data });
        console.log(res.data);
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