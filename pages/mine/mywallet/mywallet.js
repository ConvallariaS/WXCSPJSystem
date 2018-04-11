//mywallet.js

Page({

  jumpToWithdrawal:function() {
    wx.navigateTo({
      url: 'withdrawal/withdrawal',
    })
  }
})