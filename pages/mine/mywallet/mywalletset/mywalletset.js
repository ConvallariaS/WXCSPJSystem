// mywalletset.js
Page({

  jumpToAddBankCard:function() {
    wx.navigateTo({
      url: 'addbankcard/addbankcard',
    })
  },
  jumpToAddAlipay:function() {
    wx.navigateTo({
      url: 'addalipay/addalipay',
    })
  }
})