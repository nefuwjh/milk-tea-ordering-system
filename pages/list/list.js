// pages/list/list.js
var app = getApp();
Page({
  /*页面的初始数据*/
  data: {
    totalnum: app.globalData.totalnum,
    totalPrice: app.globalData.totalPrice,
    activeKey: 1, // 默认选中的标签值
    scrollIntoViewId: '', // 右侧滚动到的位置
    goods1: app.globalData.goods1, // 从app.js的全局变量中获取goods1并存入当前页面的局部变量
    goods2: app.globalData.goods2, // 
    goods3: app.globalData.goods3, // 
    goods4: app.globalData.goods4, // 
  },

// 左侧导航栏点击事件
onChange(e) {
  let index = e.detail;
  const tagId = `to${index}`;
  this.setData({
    scrollIntoViewId: tagId  // 设置scroll-into-view属性为对应标签的id
  });
  // console.log("index:" + index);
  // console.log(this.data.scrollIntoViewId)
},

// 右侧奶茶滑动事件
handleScroll(e) {
  let scrollTop = e.detail.scrollTop;
  let activeKey = 0;
  if (scrollTop >= 0 && scrollTop < 415) {
    activeKey = 1;
  } else if (scrollTop >= 415 && scrollTop < 820) {
    activeKey = 2;
  } else if (scrollTop >= 820 && scrollTop < 1470) {
    activeKey = 3;
  } else {
    activeKey = 4;
  }
  this.setData({
    activeKey: activeKey,
  });
  // console.log("activekey:" + activeKey);
  // console.log("scrollTop:" + scrollTop)
},

// 选规格跳转页面
gotoPage(e) {
  wx.navigateTo({
    url: '../detail/detail', // 目标页面路径
  });
  const id  = e.currentTarget.dataset.id; // 获取点击按钮的data-id属性值
  app.globalData.a = id; // 修改全局变量a为商品的id属性值
  // console.log("list全局a=" + app.globalData.a); // 打印修改后的全局变量a
},

buy(e) {
  // 在这里实现点击"去支付"事件的逻辑处理
  console.log('点击了去支付按钮');
  // 跳转到订单页面
  wx.navigateTo({
    url: '../buy/buy',
  });
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
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.setData({
      totalnum: app.globalData.totalnum,
      totalPrice: app.globalData.totalPrice
    });
  },

})