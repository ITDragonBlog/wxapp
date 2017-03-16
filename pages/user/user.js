
Page({
    data: {
        inputShowed: false,
        inputVal: ""
    },
    onLoad:function(options){
        var that = this;
        wx.getSystemInfo({
        success: function(res) {
            that.setData( {
            windowHeight: res.windowHeight,
            windowWidth: res.windowWidth
            })
        }
        });
    }
});