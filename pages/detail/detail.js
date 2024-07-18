// pages/detail/detail.js
var app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    a: app.globalData.a,
    radio: '1',
    radio2:'1',
    radio3:'1',
    selectedText: '轻盈版',
    selectedText1: '全糖',
    selectedText2: '热',
    buyNum: 1,//当前正在选规格的奶茶的购买数量,进入详情页时默认为1杯
    bgImg:[
      {
        num:1,
        img:"/imgs/草莓白巧.jpg",
        name:"草莓白巧",
        price:"14"
      },
      {
        num:2,
        img:"/imgs/草莓奶冻.jpg",
        name:"草莓奶冻",
        price:"12"
      },
      {
        num:3,
        img:"/imgs/洛神山楂莓.jpg",
        name:"洛神山楂莓",
        price:"12"
      },
      {
        num:4,
        img:"/imgs/黑糖陨石牛乳.jpg",
        name:"黑糖陨石牛乳",
        price:"14"
      },
      {
        num:5,
        img:"/imgs/黑糖珍珠奶茶.jpg",
        name:"黑糖珍珠奶茶",
        price:"10"
      },
      {
        num:6,
        img:"/imgs/黑糖珍珠奶茶（牛乳版）.jpg",
        name:"黑糖珍珠奶茶（牛乳版）",
        price:"13"
      },
      {
        num:7,
        img:"/imgs/杨枝甘露.jpg",
        name:"杨枝甘露",
        price:"17"
      },
      {
        num:8,
        img:"/imgs/葡萄冻冻.jpg",
        name:"葡萄冻冻",
        price:"16"
      },
      {
        num:9,
        img:"/imgs/生椰西瓜.jpg",
        name:"生椰西瓜",
        price:"14"
      },
      {
        num:10,
        img:"/imgs/芒芒生打椰.jpg",
        name:"芒芒生打椰",
        price:"15"
      },
      {
        num:11,
        img:"/imgs/超级水果茶.jpg",
        name:"超级水果茶",
        price:"22"
      },
      {
        num:13,
        img:"/imgs/七窨茉莉轻乳茶.jpg",
        name:"七窨茉莉轻乳茶",
        price:"13"
      },
      {
        num:14,
        img:"/imgs/玫茉双花轻乳茶.jpg",
        name:"玫茉双花轻乳茶",
        price:"14"
      },
      {
        num:15,
        img:"/imgs/梅占红茶轻乳茶.jpg",
        name:"梅占红茶轻乳茶",
        price:"14"
      },
      {
        num:16,
        img:"/imgs/奇兰乌龙轻乳茶.jpg",
        name:"奇兰乌龙轻乳茶",
        price:"13"
      },
    ],
  },
  // 复选框的函数
  onChange(event) {
    this.setData({
      radio: event.detail,
    });
    // 甜度
    let selectedValue1 = event.detail;
    if (selectedValue1 == '1') {
      this.setData({
        selectedText1: '全糖'
      });
    } else if (selectedValue1 == '2') {
      this.setData({
        selectedText1: '半糖'
      });
    }
    else if (selectedValue1 == '3') {
      this.setData({
        selectedText1: '0糖'
      });
    }
    
  },
  onChange2(event) {
    this.setData({
      radio2: event.detail,
    });
    // 甜度
    let selectedValue2 = event.detail;
    if (selectedValue2 == '1') {
      this.setData({
        selectedText2: '热'
      });
    } else if (selectedValue2 == '2') {
      this.setData({
        selectedText2: '去冰'
      });
    }
    else if (selectedValue2 == '3') {
      this.setData({
        selectedText2: '少冰'
      });
    }
    else if (selectedValue2 == '4') {
      this.setData({
        selectedText2: '正常冰'
      });
    }
  },
  onChange3(event) {
    this.setData({
      radio3: event.detail,
    });
    // 规格
    let selectedValue = event.detail;
    if (selectedValue == '1') {
      this.setData({
        selectedText: '轻盈版'
      });
    } else if (selectedValue == '2') {
      this.setData({
        selectedText: '浓郁版'
      });
    }
  },
  onClickLeft() {
    wx.showToast({ title: '点击返回', icon: 'none' });
    wx.navigateBack()
  },


  // 增减或减少购买杯数
  onBuyNum(event) {
    this.setData({
      buyNum: event.detail
    });
  },

  // 添加购买信息到购物车（购物车采用全局数组变量buys，存多个奶茶的购买信息）
  // 修改购买奶茶总杯数（总杯数单独用了一个totalnum全局变量存，点餐页面显示方便）
  // 修改购买奶茶总价格（总价格单独用了一个totalPrice全局变量存，点餐页面显示方便）
  onAddToOrder(e) {
    app.globalData.totalnum = app.globalData.totalnum + this.data.buyNum;
    app.globalData.totalPrice = app.globalData.totalPrice + this.data.buyNum * this.data.bgImg[this.data.a-1].price;
    // 创建奶茶购买信息对象，包含甜度、温度、规格、杯数、价格信息
    let option = {
      id : this.data.a,
      name : this.data.bgImg[this.data.a-1].name,
      pic: this.data.bgImg[this.data.a-1].img,
      sweetness: this.data.selectedText1,
      temperature: this.data.selectedText2,
      size: this.data.selectedText,
      number: this.data.buyNum,
      price: this.data.bgImg[this.data.a-1].price
    };
    // 存入全局变量buys数组
    app.globalData.buys.push(option);
    // 加入购物车后，清空buyNum，为下一次选奶茶加入购物车做准备
     this.setData({
      buyNum: 0
    });
    console.log('加入购物车成功，当前购买总数量为:', app.globalData.totalnum);
    console.log("当前购买总价格为:"+app.globalData.totalPrice);
    console.log('当前购买的所有奶茶信息量为:', app.globalData.buys);
    wx.navigateBack();
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
      // 读取当前详情页要展示的奶茶的num（id）
      a: app.globalData.a
    });
  },


})