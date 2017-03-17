var util = require('../../utils/util.js');
var app = getApp();
var password = "";

Page({
  data: {
    showTopTips: false,
    errorMsg: ""
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
  },
  // 判断账号是否为空和判断该账号名是否被注册
  checkAccount: function (e) {
    var that = this;
    var account = e.detail.value;
    if ("" == util.trim(account)) {
      util.isError("账号不能为空", that);
    } else {
      util.clearError(that);
      app.ajax.req('/register/checkLoginName', {
        "loginName": account
      }, function (res) {
        if (!res) {
          util.isError("账号已经被注册过", that);
        }
      });
    }
  },
  getPassword: function (e) {
    var that = this;
    password = e.detail.value;
    if ("" == util.trim(password)) {
      util.isError("密码不能为空", that);
    } else {
      util.clearError(that);
    }
  },
  checkPassword: function (e) {
    var that = this;
    var subPassword = e.detail.value;
    if (subPassword != password) {
      util.isError("输入密码不一致", that);
    } else {
      util.clearError(that);
    }
  }

})
