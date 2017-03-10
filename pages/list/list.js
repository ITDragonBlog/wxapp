// pages/list/list.js
var app = getApp();

// 当前页数
var pageNum = 1;


// 加载数据
var loadMsgData = function(that){
  that.setData({
    hidden:false
  });
  var allMsg = that.data.msgList;
  app.ajax.req('/itdragon/findAll',{
    "page":pageNum , "pageSize" : 6
  },function(res){  
    // 不能直接 allMsg.push(res); 相当于list.push(list);打乱了结构
    for(var i = 0; i < res.length; i++){
      allMsg.push(res[i]);
    }
    that.setData({
      msgList:allMsg
    });
    pageNum ++;
    that.setData({
      hidden:true
    });
  });
}

Page({
  data:{
    msgList:[],
    hidden:true,
    scrollTop : 0,
    scrollHeight:0
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData( {
          windowHeight: res.windowHeight,
          windowWidth: res.windowWidth
        })
      }
    });
    loadMsgData(that);
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  // 下拉刷新数据
  pullDownRefresh: function() {
    var that = this;
    pageNum = 1;
    that.setData({
      msgList : [],
      scrollTop : 0
    });
    loadMsgData(that);
  },

  // 上拉加载数据 上拉动态效果不明显有待改善
  pullUpLoad: function() {
    var that = this;
    loadMsgData(that);
  },
  // 定位数据
  scroll:function(event){
    var that = this;
    that.setData({
      scrollTop : event.detail.scrollTop
    });
 },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})