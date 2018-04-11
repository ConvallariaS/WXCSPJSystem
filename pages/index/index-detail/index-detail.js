// pages/index/details/details.js
import { DBJob } from '../../../db/DBJob.js';
var app = getApp()

Page({

  data: {
    showEntryFormPanel: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var jobId = options.id
    this.dbJob = new DBJob(jobId)
    this.jobData = this.dbJob.getJobItemById().data
    this.setData({
      job: this.jobData
    })
  },
  /** 
   * 报名参加
   */
  goApply: function () {
    this.setData({
      showEntryFormPanel: !this.data.showEntryFormPanel
    })
  },
  navigateToMap: function (e) {
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          scale: 28
        })
      },
    })
  },
  onShareAppMessage: function () {
    return {
      title: this.jobData.title,
      desc: this.jobData.content,
      path: "pages/index/index-detail/index-detail.js"
    }
  }
})