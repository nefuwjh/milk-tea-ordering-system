<template>
	<!--pages/buy/buy.wxml-->
<view style="width: 100%;height: 100%;margin-top: 50rpx;">
  <view class="store">
    <text style="margin-left: 20rpx;font-weight:600;">林大店 ></text>
  </view>
  <view class="order">
    <block v-for="(item,index) in buys">
      <view class="order_list">
        <view>
          <image class="cart_img" :src="item.pic"></image>
        </view>
        <view style="display: flex;flex-direction: column;">
          <view>{{item.name}}</view>
          <view style="font-size: 20rpx;">{{item.size}}/{{item.temperature}}/{{item.sweetness}}</view>
        </view>
        <view style="text-align: right;">
          <view style="display: flex;flex-direction: column;">
            <view>￥{{item.price}}</view>
            <view style="font-size: 20rpx;">X{{item.number}}</view>
          </view>
        </view>
      </view>
    </block>
    <view style="text-align: right;">共{{totalnum}}件商品，小计￥{{totalPrice}}.00元</view>
  </view>

  <view class="remarks">
  <view class="weui-cells__title">备注：</view>
        <view class="weui-cells weui-cells_after-title" style="border-radius: 10rpx;">
            <view class="weui-cell weui-cell_active">
                <view class="weui-cell__bd">
                    <input class="weui-input" @click ="input"  placeholder-class="weui-input__placeholder" placeholder="请输入备注" />
                </view>
            </view>
        </view>
  </view>
</view>
<view class="buttom">
<text style="margin-left: 20rpx; flex:1;">待支付，￥{{totalPrice}}.00</text>
<view class="buttom_button">
<text @click ="upOrder">提交订单</text>
</view>
</view>
</template>

<script>
	export default {
		// var app = getApp();
		// var util = require('../../utils/util');
		data() {
			return {
				totalPrice:getApp().globalData.totalPrice,
				totalnum:getApp().globalData.totalnum,
				buys:getApp().globalData.buys,
				orders:getApp().globalData.orders,
				orderId:getApp().globalData.orderId,
				drinklist:[],
				// id:0,
				// num:0,
				// money:0,
				beizhu:'',
				time:''
			}
		},
		methods: {
			// var util = require('../../utils/util'),
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
			  let buys = getApp().globalData.buys;
			  let option = {
			    orderId: getApp().globalData.orderId,
			    totalPrice: getApp().globalData.totalPrice,
			    totalnum: getApp().globalData.totalnum,
			    beizhu: this.data.beizhu,
			    drinklist: getApp().globalData.buys,
			    time: this.data.time
			  };
			  console.log("drinklist:",this.data.drinklist);
			  // // 存入全局变量buys数组
			  getApp().globalData.orders.push(option);
			  getApp().globalData.orderId = getApp().globalData.orderId+1;
			  console.log('加入订单成功，当前购买总数量为:', getApp().globalData.totalnum);
			  console.log('当前订单:', getApp().globalData.orders);
			  getApp().globalData.totalPrice=0;
			  getApp().globalData.totalnum=0;  
			  
			  // 使用splice方法删除所有的奶茶商品
			  buys.splice(0, getApp().globalData.buys.length);
			  console.log('当前购物车:', getApp().globalData.buys);
			  wx.switchTab({
			      url: '/pages/order/order',
			  }) 
			},
	
		},
		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad: function (options) {
		  // var util = require('../../utils/util')
		  var time = util.formatTime(new Date())
		  this.time = time
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
		    this.totalnum = getApp().globalData.totalnum,
		    this.totalPrice = getApp().globalData.totalPrice,
		    this.buys = getApp().globalData.buys,
		    this.orderId = getApp().globalData.orderId
		},
	}
</script>

<style>
	/* pages/buy/buy.wxss */
	Page{
	  background-color: rgb(236, 236, 236)
	}
	.store{
	  border-radius: 10rpx;
	  margin-top: 30rpx;
	  width: 90%;
	  height: 100rpx;
	  background-color: white;
	  margin: auto;
	  line-height: 100rpx;
	}
	.order{
	  border-radius: 10rpx;
	  width: 90%;
	  height: 100%;
	  background-color: white;
	  margin:30rpx auto;
	  padding: 10px;
	}
	.cart_img{
	  width: 80rpx;
	  height: 80rpx;
	  margin: 10rpx;
	}
	.order_list{
	  display: flex;
	  width: 90%;
	  margin: 30rpx;
	}
	.remarks{
	  border-radius: 10rpx;
	  width: 90%;
	  height: 100%;
	  background-color: white;
	  margin:30rpx auto;
	  line-height: 80rpx;
	  padding: 10px;
	}
	.buttom{
	  position: fixed;
	  right: 0;
	  left: 0;
	  bottom: 0;
	  display: flex;
	  border-radius: 10rpx;
	  width: 100%;
	  height: 130rpx;
	  background-color: white;
	  margin-bottom: 30rpx;
	  line-height: 130rpx;
	}
	.buttom_button{
	  border-radius: 10rpx;
	  width: 120px;
	  margin: auto;
	  height: 100rpx;
	  line-height: 100rpx;
	  margin-right: 20rpx;
	  text-align: center;
	  background-color: #05a515;
	  color: white;
	  
	}
</style>