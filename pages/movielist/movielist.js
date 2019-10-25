// pages/movielist/movielist.js
var willtop = require("../../data/will.js")
var top250 = require("../../data/top250.js")
var hot = require("../../data/hot.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "",
    // 渲染数组
    subjects: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    // console.log(willtop)
    // switch (options.parameter) {
    //   case "/v2/movie/in_theaters":
    //     that.setData({
    //       title: hot.default.title
    //     })
    //     that.setData({
    //       subjects: hot.default.subjects
    //     })
    //     break;
    //   case "/v2/movie/new_movies":
    //     that.setData({
    //       title: willtop.default.title
    //     })
    //     that.setData({
    //       subjects: willtop.default.subjects
    //     })
    //     break;
    //   case "/v2/movie/top250":
    //     that.setData({
    //       title: top250.default.title
    //     })
    //     that.setData({
    //       subjects: top250.default.subjects
    //     })
    //     break;
    // }
    console.log(options)
    wx.showLoading({
      title: '正在加载',
    })
    wx.request({
      url: 'http://localhost:5000' + options.parameter,
      success:(res)=>{
        console.log(res.data)
        that.setData({
          subjects: res.data.subjects
        })
      that.setData({
        title:res.data.title
      })
        wx.hideLoading()
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {


  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})