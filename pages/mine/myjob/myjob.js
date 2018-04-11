//myjob.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /**页面配置 */
    winWidth: 0,
    winHeight: 0,
    //tab切换
    currentTab: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    /**获取系统信息 */
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        })
      },
    })
  },
  /**滑动切换tab */
  bindChange: function(e) {
    var that = this
    that.setData({
      currentTab: e.detail.current
    })
  },
  /**点击切换 */
  swichNav: function(e) {
    var that = this
    var cur = e.target.dataset.current
    if( that.data.currentTab === cur) {
      return false;
    } else {
      that.setData({
        currentTab: cur
      })
    }
  }

})