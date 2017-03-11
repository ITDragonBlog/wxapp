// pages/detail/detail.js
var app = getApp();
Page({
  data:{
    msgDetail:{},
    hidden:true
  },
  onLoad:function(options){
    var that = this;
    var msgDetailKey = "msgDetail" + options.id;
    that.setData({
      hidden:false
    });
    var info = wx.getStorageSync(msgDetailKey);
    if (info) {
      that.setData({
        msgDetail:info,
        hidden:true
      });
    } else {
      app.ajax.req('/itdragon/findOne',{
        id: options.id
      },function(res){ 
        that.setData({
          msgDetail:res,
          hidden:true
        });
        wx.setStorageSync(msgDetailKey,res);
      });
    }
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})