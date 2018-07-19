//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    swidth: 0,
    sheight: 0
  },
  onLoad: function () {
    let that = this
    wx.getSystemInfo({
      success: function(res){
        that.setData({
          sheight: res.windowHeight
        })
        that.setData({
          swidth: res.windowWidth
        })
        
      }
    })
  },
  signEnter: function () {
    wx.navigateTo({
      url: '../sign/sign',
      success: function (res) {
        console.log("进入签到")
      }
    })
  }
})
