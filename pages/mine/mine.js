//mine.js

var app = getApp();

Page({
  data: {
    
  },
  onLoad: function (options) {
    this.setData({
      userInfo: app.globalData.g_userInfo
    })
  }
})