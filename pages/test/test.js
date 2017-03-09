// pages/detail/detail.js
Page({
  data: {
    textdata: "测试 wx.request",
  },
  RequestData: function () {
    var that = this;
    wx.request({
      url: 'https://www.itit123.cn/itdragon/findOne',
      data: {id:"1"},
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        'content-type':'application/x-www-form-urlencoded'
      }, // 设置请求的 header 默认是application/json
      success: function (res) {
        console.log(res.data);
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