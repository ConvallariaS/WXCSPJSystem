// pages/index/index-detail/apply/apply.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    workday:[],
    addr:[],
    isSelect: false,
    selected: false
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
    const index = e.currentTarget.dataset.index;
    let workday = this.data.workday;
    const isSelect = workday[index].isSelect;
    workday[index].isSelect = !isSelect;
    this.setData({
      workday: workday
    })
  },
  selectAddrOk: function(e) {
    const index = e.currentTarget.dataset.index;
    let addr = this.data.addr;
    const selected = addr[index].selected;
    addr[index].selected = !selected;
    this.setData({
      addr: addr
    })
  }
})