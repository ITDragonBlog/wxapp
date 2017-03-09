// pages/detail/detail.js
var app = getApp();
Page({
  data:{
    msgDetail:{}
  },
  onLoad:function(options){
    var that = this;
    app.ajax.req('/itdragon/findOne',{
      id: options.id
    },function(res){ 
      console.log(res); 
      that.setData({
        msgDetail:res
      })
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