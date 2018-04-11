//myresume.js
Page({

  data: {
    dates:'2018-03-11',
    region:['广东省','广州市','海珠区'],
    customItem:'全部',
    jobarr: [],
    jobindex: 0,
    educationarr: [],
    educationindex: 0,
    freetimeindex:0,
    freetimearr:[]
  },
  onLoad: function () {
    this.fetchData()
  },
  fetchData: function () {
    this.setData({  
      jobarr: ["请选择", "移动互联网", "销售", "电子电气", "嵌入式", "智能硬件", "UI设计", "2D/3D", "推广", "人力资源", "电子商务", "教育培训", "外语外贸", "金融", "法务", "广告", "媒体", "财会", "生物医药", "IT软件", "建筑房产", "其他"],
      educationarr: ["请选择", "博士", "硕士", "本科","大专"],
      freetime: ["","","","",""]
    })
  },
  bindPickerChange: function (e) { //下拉选择
    const eindex = e.detail.value;
    const name = e.currentTarget.dataset.pickername;
    switch (name) {
      case 'city':
        this.setData({
          region: eindex
        })
        break;
      case 'job':
        this.setData({
          jobindex: eindex
        })
        break;
      case 'education':
        this.setData({
          educationindex: eindex
        })
      case 'dates':
        this.setData({
          dates: eindex
        })
        break;
      case 'freetime':
        this.setData({
          freetimeindex: eindex
        })
        break;
      default:
        return
    }
  },

})