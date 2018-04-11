//app.js
var dataObj = require("data/data.js")

App({
  onLaunch: function () {
    //设置数据缓存(同步)
    var storageData = wx.getStorageSync('jobList')
    if(!storageData) {
      //如果缓存不存在
      var dataObj = require("data/data.js")
      wx.clearStorageSync()
      wx.setStorageSync('jobList', dataObj.jobList)
    }
    this._getUserInfo();
  },
  _getUserInfo: function () {
    var userInfoStorage = wx.getStorageSync('user')
    if(!userInfoStorage) { //如果没有获取用户信息
      var that = this
      wx.login({
        success: function() {
          wx.getUserInfo({
            success: function(res) {
              console.log(res)
              that.globalData.g_userInfo = res.userInfo
              //将用户信息保存到缓存中
              wx.setStorageSync('user', res.userInfo)
            },
            fail: function(res) {
              console.log(res)
            }
          })
        }
      })
    } 
    else{
      //如果缓存中已经存在用户信息，那么信息保存到全局变量中
      this.globalData.g_userInfo = userInfoStorage
    }
  },
  globalData: {
    g_userInfo: null
  }
})