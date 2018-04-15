// pages/index/index-detail/apply/apply.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    workday:[],
    addr:[],
    workflag: false,
    addrflag: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  onShow() {
    this.setData({
      workday: [
        { id: 1, name: "白班 08:00~18:00", isSelect: false},
        { id: 2, name: "晚班 18:00~22:00", isSelect: false}
      ],
      addr: [
        { id: 1, name: "成都市武侯区", selected: false },
        { id: 2, name: "成都市成华区", selected: false },
        { id: 3, name: "成都市锦江区（成都输的中学旁）", selected: false }
      ]
    })
  },

  selectTimeOk: function(e) {
    var that = this
    for(var i = 0; i < that.data.workday.length; i++) {
      if(e.currentTarget.dataset.index == i) {
        that.data.workday[i].isSelect = true
        this.data.workflag = true;
      }
      else {
        that.data.workday[i].isSelect = false
      }
    }
    that.setData(that.data)
  },
  selectAddrOk: function(e) {
    var that = this
    for (var i = 0; i < that.data.addr.length; i++) {
      if (e.currentTarget.dataset.index == i) {
        that.data.addr[i].selected = true
        that.data.addrflag = true
      }
      else {
        that.data.addr[i].selected = false
      }
    }
    that.setData(that.data)
  },
  goBack: function() {
    wx.navigateBack({
      delta: 1
    })
  },
  showOk: function() {
    if(this.data.workflag && this.data.addrflag) {
      wx.showToast({
        title: '报名成功',
        icon: 'success',
        duration: 2000,
        success: function () {
          wx.navigateBack({
            delta: 2
          })
        }
      })
    } else if (!this.data.workflag){
      wx.showToast({
        title: '请选择工作时间',
        icon: 'warn',
        duration: 2000,
        mask: true
      })
    } else if (!this.data.addrflag) {
      wx.showToast({
        title: '请选择工作地点',
        icon: 'warn',
        duration: 2000,
        mask: true
      })
    } else {
      wx.showToast({
        title: '请选择工作时间和地点',
        icon: 'warn',
        duration: 2000,
        mask: true
      })
    }   
  },
})