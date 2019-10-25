// pages/moviedetails/moviedetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie:{},
    show:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
    })
    var that = this
    wx.request({
      url: `http://localhost:5000/v2/movie/subject/${options.id}`,
      success(res){
        that.setData({
          movie:res.data
        })
        wx.hideLoading()
        wx.showToast({//弹框 例成功弹框
          title: '加载成功',
          icon: 'success',
          duration: 2000
        })
        that.setData({show:true})
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})