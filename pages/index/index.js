//index.js
//获取应用实例
var app = getApp()
import { DBJob } from'../../db/DBJob.js'

Page({
  data: {
  },
  
  onLoad: function () {
    var dbJob = new DBJob()
    this.setData({
      jobList: dbJob.getAllJobData()
    })

  },
  navigateToDetail:function(e) {
    var jobId = e.currentTarget.dataset.jobId
    wx.navigateTo({
      url: 'index-detail/index-detail?id=' + jobId
    })
  },
  SearchJob:function() {
    
  }
  
})
