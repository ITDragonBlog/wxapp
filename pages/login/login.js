var app = getApp();
var util = require('../../utils/util.js');

Page({
  data: {
    vcodeImg: ""
  },
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          windowHeight: res.windowHeight,
          windowWidth: res.windowWidth
        })
      }
    });
    app.ajax.getReq('/login/valiCode', {}, function (res) {
      that.setData({
        vcodeImg: res
      })
    });
  },

  formSubmit: function (e) {
    var account = e.detail.value.account;
    var password = e.detail.value.password;
    var vcode = e.detail.value.vcode;
    var that = this;
    if ("" == util.trim(account) || "" == util.trim(password)) {
      util.isError("请输入账号密码", that);
      return;
    } else {
      util.clearError(that);
    }
    app.ajax.req('', {
      "account": account,
      "password": password
    }, function (res) {
      console.log(res);
    });
  }
})
