// pages/My/My.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data:{
    swiperImages: [
      // '/components/imgs/奶茶1.jpg',
      // '/components/imgs/奶茶2.jpg',
      // '/components/imgs/奶茶3.jpg',
      // '/components/imgs/奶茶4.jpg',
      // '/components/imgs/奶茶5.jpg',
    ],
    pic: app.globalData.pic,
    name: app.globalData.name,
    old_pic: "../../components/imgs/奶茶1.jpg"
 },

  login(){
    wx.navigateTo({
      url: '../login/login',
    })
  },

  tuichu(){
    this.setData({
      pic : null,
      name : null
    })
    app.globalData.pic = null;
    app.globalData.name = null;
    app.setUserInfo(null);
  },

  click1(){
    wx.navigateTo({
      url: '../mycontent/mycontent?flag1=true&flag2=false&flag3=false',
    })
  },

  click2(){
    wx.navigateTo({
      url: '../mycontent/mycontent?flag1=false&flag2=true&flag3=false',
    })
  },

  click3(){
    wx.navigateTo({
      url: '../mycontent/mycontent?flag1=false&flag2=false&flag3=true',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    wx.cloud.database().collection("my-list").get({
      success: ans => {
        this.setData({
          swiperImages: ans.data
        })
        console.log(ans)
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
  this.setData({
    pic: app.globalData.pic,
    name: app.globalData.name,
  })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    console.log("当前登录名：" + app.globalData.name)
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})