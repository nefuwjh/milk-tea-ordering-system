// pages/index/index.js
const db = wx.cloud.database();
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    swiperImages: [
      // '/components/imgs/奶茶1.jpg',
      // '/components/imgs/奶茶2.jpg',
      // '/components/imgs/奶茶3.jpg',
      // '/components/imgs/奶茶4.jpg',
      // '/components/imgs/奶茶5.jpg',
    ],
    lingquan: null,
    deliverPath: null,
    navigatorWay: null,
    pleaseExpect: "../pleaseExpect/pleaseExpect",
    ziqumsg: false,
    searchmsg: "",
    inputmsg: "",
    jiameng: "",
  },
  testLingquan() {
    console.log(this.data.lingquan);
  },
  link() {
    console.log("link");
  },
  ziqu() {
    this.setData({
      ziqumsg: true
    });
  },
  waimai() {
    this.setData({
      ziqumsg: false
    });
  },
  bindSearchInput(event) {
    let val = event.detail.value;
    this.setData({
      inputmsg: val
    });
  },
  getValue() {
    this.setData({
      searchmsg: this.data.inputmsg
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const app = getApp();
    let app_userInfo = app.globalData.app_userInfo;
    if (app_userInfo === null) {
      this.setData({
        lingquan: "../loginx/loginx",
        deliverPath: "../loginx/loginx",
        navigatorWay: "redirect"
      });
    } else {
      this.setData({
        lingquan: "../list/list",
        deliverPath: "../list/list",
        navigatorWay: "switchTab"
      });
    };
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    const app = getApp();
    let app_userInfo = app.globalData.app_userInfo;
    if (app_userInfo === null) {
      this.setData({
        lingquan: "../loginx/loginx",
        deliverPath: "../loginx/loginx",
        navigatorWay: "redirect"
      });
    } else {
      this.setData({
        lingquan: "../list/list",
        deliverPath: "../list/list",
        navigatorWay: "switchTab"
      });
    };
    wx.cloud.database().collection("swipper-list").get({
      success: ans => {
        this.setData({
          swiperImages: ans.data
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    const app = getApp();
    let app_userInfo = app.globalData.app_userInfo;
    if (app_userInfo === null) {
      this.setData({
        lingquan: "../loginx/loginx",
        deliverPath: "../loginx/loginx",
        navigatorWay: "redirect"
      });
    } else {
      this.setData({
        lingquan: "../list/list",
        deliverPath: "../list/list",
        navigatorWay: "switchTab"
      });
    };
  },

  onHide() {
  },

  onUnload() {
  },

  onPullDownRefresh() {
  },

  onReachBottom() {
  },

  onShareAppMessage() {
  },
});