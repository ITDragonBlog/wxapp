// pages/detail/detail.js
var app = getApp();
Page({
  data:{
    msgDetail:{},
    hidden:true
  },
  onLoad:function(options){
    var that = this;
    that.setData({
      hidden:false
    });
    app.ajax.req('/itdragon/findOne',{
      id: options.id
    },function(res){ 
      that.setData({
        msgDetail:res
      });
    });
    that.setData({
      hidden:true
    });
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