// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  takePhoto() {
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath
        })
      }
    })
  },
  
  error(e) {
    console.log(e.detail)
  },
  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],//切换类名
    indicatorDots: false,//是否显示点
    vertical: false,//纵向
    autoplay: true,//自动播放
    interval: 4000,//间距时间
    duration: 500,//切换间距时间
    circular: true,//衔接滑动
    classlist: [{ title: "正在热映", parameter: "/v2/movie/in_theaters" }, { title: "即将上映", parameter: "/v2/movie/new_movies" }, { title: "TOP250", parameter:"/v2/movie/top250"}]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.showToast({//弹框 例成功弹框
    //   title: '成功',
    //   icon: 'success',
    //   duration: 2000
    // })
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
    // 微信转发
    // wx.updateShareMenu({
    //   withShareTicket: true,
    //   success() { }
    // })
    wx.showShareMenu({
      withShareTicket: true
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