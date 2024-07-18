// pages/buy/buy.js
var app = getApp();
var util = require('../../utils/util');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    totalPrice:app.globalData.totalPrice,
    totalnum:app.globalData.totalnum,
    buys:app.globalData.buys,
    orders:app.globalData.orders,
    orderId:app.globalData.orderId,
    drinklist:[],
    // id:0,
    // num:0,
    // money:0,
    beizhu:'',
    time:''
  },
  //备注
  input(e){
    let input = e.detail.value
    console.log(input);
    this.setData({
      beizhu:input
    })
    
  },

  //提交订单
  upOrder(){
    console.log('当前备注:',this.data.beizhu);
    // 获取当前的buys数组
    let buys = app.globalData.buys;
    let option = {
      orderId: app.globalData.orderId,
      totalPrice: app.globalData.totalPrice,
      totalnum: app.globalData.totalnum,
      beizhu: this.data.beizhu,
      drinklist: app.globalData.buys,
      time: this.data.time
    };
    console.log("drinklist:",this.data.drinklist);
    // // 存入全局变量buys数组
    app.globalData.orders.push(option);
    app.globalData.orderId = app.globalData.orderId+1;
    console.log('加入订单成功，当前购买总数量为:', app.globalData.totalnum);
    console.log('当前订单:', app.globalData.orders);
    app.globalData.totalPrice=0;
    app.globalData.totalnum=0;  
    
    // 使用splice方法删除所有的奶茶商品
    buys.splice(0, app.globalData.buys.length);
    console.log('当前购物车:', app.globalData.buys);
    wx.switchTab({
        url: '/pages/order/order',
    }) 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var time = util.formatTime(new Date())
    this.setData({
      time: time
    })
    console.log(time);
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
    this.setData({
      totalnum: app.globalData.totalnum,
      totalPrice: app.globalData.totalPrice,
      buys:app.globalData.buys,
      orderId:app.globalData.orderId,
    });
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