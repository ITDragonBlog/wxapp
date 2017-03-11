// pages/list/list.js
var app = getApp();

var pageNum = 1; // 当前页数
var searchTitle = ""; // 搜索关键字
var msgListKey = "";

// 加载数据 isRefresh 是否加载的判断
var loadMsgData = function(that){
  msgListKey = "msgList" + pageNum;
  that.setData({
    hidden:false
  });
  var allMsg = that.data.msgList;
  app.ajax.req('/itdragon/findAll',{
    "page":pageNum , 
    "pageSize" : 6 ,
    "search_LIKE_title" : searchTitle
  },function(res){  
    // 不能直接 allMsg.push(res); 相当于list.push(list);打乱了结构
    for(var i = 0; i < res.length; i++){
      allMsg.push(res[i]);
    }
    that.setData({
      msgList:allMsg,
      hidden:true
    });
    // 缓存列表页面
    wx.setStorageSync(msgListKey,allMsg);
  });
  pageNum ++;
}

Page({
  data:{
    msgList:[],
    hidden:true,
    scrollTop : 0,
    scrollHeight:0,
    inputShowed: false,
    inputVal: "",
    searchLogShowed: false,
    searchLogList:[]
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
    var info = wx.getStorageSync(msgListKey);
    if (info) {
      that.setData({
        msgList:info
      });
    } else {
      loadMsgData(that);
    }
  },

  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },

  // 下拉刷新数据 下拉动态效果不明显有待改善
  pullDownRefresh: function() {
    var that = this;
    pageNum = 1;
    that.setData({
      msgList : [],
      scrollTop : 0
    });
    loadMsgData(that);
  },

  // 上拉加载数据 
  pullUpLoad: function() {
    var that = this;
    loadMsgData(that); // 没有从缓存中读取，有待改善
  },
  // 定位数据
  scroll:function(event){
    var that = this;
    that.setData({
      scrollTop : event.detail.scrollTop
    });
  },
  showInput: function () {
    var that = this;
    var searchbarData = that.data.searchLogList;
    var searchLog = wx.getStorageSync(searchTitle);
    console.log(searchLog);
    that.setData({
      inputShowed: true,
      searchLogList : searchLog
    });
  },
  // 点击 搜索 按钮后 隐藏搜索记录，并加载数据
  searchData: function () {
    var that = this;
    that.setData({
        msgList : [],
        scrollTop : 0,
        searchLogShowed: false
    });
    pageNum = 1;
    loadMsgData(that);
    // 搜索后将搜索记录缓存到本地
  },
  // 点击叉叉icon 清除输入内容，同时清空关键字，并加载数据
  clearInput: function () {
    var that = this;
    that.setData({
        msgList : [],
        scrollTop : 0,
        inputVal: ""
    });
    searchTitle = "";
    pageNum = 1;
    loadMsgData(that);
  },
  // 输入内容时 把当前内容赋值给 查询的关键字，并显示搜索记录
  inputTyping: function (e) {
    var that = this;
    that.setData({
        inputVal: e.detail.value,
        searchLogShowed: true
    });
    searchTitle = e.detail.value;
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})