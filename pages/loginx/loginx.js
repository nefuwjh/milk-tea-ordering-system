var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
     
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

getuser:function(e){
  wx.getUserProfile({
    desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
    success: (res) => {
    var arr = getApp()
    arr.globalData.pic = res.userInfo.avatarUrl;
    arr.globalData.name = res.userInfo.nickName;
    let loginxUserInfo=res.data;
    arr.setUserInfo(loginxUserInfo);
      wx.switchTab({
        url: '../index/index',
      })
    }
  })
},

tuichu(){
  wx.switchTab({
    url: '../index/index',
  })
},
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
      app.globalData.pic = null;
      app.globalData.name = null;
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