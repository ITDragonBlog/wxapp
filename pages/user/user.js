var util = require('../../utils/util.js');
var app = getApp();

Page({
    data: {
        userImg: "../../images/pic_160.png", // 头像图片路径
        actionSheetHidden: true, // 是否显示底部可选菜单
        actionSheetItems: [
            { bindtap: 'changeImage', txt: '修改头像' },
            { bindtap: 'viewImage', txt: '查看头像' }
        ] // 底部可选菜单
    },
    // 初始化加载获取设备长宽
    onLoad: function (options) {
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
    // 点击头像
    clickImage: function () {
        var that = this;
        that.setData({
            actionSheetHidden: !that.data.actionSheetHidden
        })
    },
    // 点击其他区域取消
    actionSheetbindchange: function () {
        var that = this;
        that.setData({
            actionSheetHidden: !that.data.actionSheetHidden
        })
    },
    // 上传头像
    changeImage: function () {
        var that = this;
        wx.chooseImage({
            count: 1, // 默认9
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: function (res) {
                // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                var tempFilePaths = res.tempFilePaths[0];
                that.setData({
                    userImg: tempFilePaths,
                    actionSheetHidden: !that.data.actionSheetHidden
                })
                util.uploadFile('/itdragon/uploadImage', tempFilePaths, 'imgFile' ,{}, function (res) {
                    console.log(res);
                    if (null != res) {
                        that.setData({
                            userImg: res
                        })
                    } else {
                        // 显示消息提示框
                        wx.showToast({
                            title: '上传失败',
                            icon: 'error',
                            duration: 2000
                        })
                    }
                });
            }
        })
    },
    // 查看原图
    viewImage: function () {
        var that = this;
        wx.previewImage({
            current: '', // 当前显示图片的http链接
            urls: [that.data.userImg] // 需要预览的图片http链接列表
        })
    }
});