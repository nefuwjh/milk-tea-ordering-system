<template>
	<view>
		<view v-if="!order" >
		    <view class="img">
		        <image src="../../imgs/奶茶.png" style="height: 50%; width: 50%;" mode="widthFix"></image>
		    </view>
		    <view style="font-size: 12px; text-align: center; color: rgb(240, 98, 98);padding-top: 5px;">当前没有进行中的订单，来一杯吧</view>
		    <navigator >
		        <view class="button">
		            <navigator url="/pages/list/list" open-type="switchTab">去点单</navigator>
		        </view>
		        
		    </navigator>
		</view>
		
		<block v-for="(item,orderId) in orders">
		<view class="order">
		<view style="margin: 20rpx;">
		<view style="display: flex;">
		<view style="flex: 1;">
		    <view>林大店</view>
		    <view style="font-size: 20rpx;">订单号：{{item.orderId}}</view>
		    <view style="font-size: 20rpx;">{{item.time}}</view>
		</view>
		
		<view style="text-align: right;">
		    <view>￥{{item.totalPrice}}</view>
		    <view>共{{item.totalnum}}件</view>
		    <view>备注：{{item.beizhu}}</view>
		</view>
		</view>
		<view class="hr"></view>
		<view style="height: 100%;margin-top: 20rpx;">
		<view style="height:25px ;line-height: 20px; margin-left: 240px;color:#05a515 ; border: 1px solid #05a515;border-radius: 10rpx;font-size: 30rpx;text-align: center;"><navigator url="/pages/list/list" open-type="switchTab">再来一单</navigator></view>
		</view>
		</view>
		</view>
		</block>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				totalnum: getApp().globalData.totalnum,
				totalPrice: getApp().globalData.totalPrice,
				buys: getApp().globalData.buys,
				orders: getApp().globalData.orders,
				orderld:getApp().globalData.orderld,
				order: getApp().globalData.orders.length
			}
		},
		methods: {
			
		},
		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad: function (options) {
			var app = getApp();
		  orders:app.globalData.orders;
		  orderId:app.globalData.orderId;
		  order: app.globalData.orders.length;
		},
		
		/**
		 * 生命周期函数--监听页面初次渲染完成
		 */
		onReady: function () {
			var app = getApp();
		  orders:app.globalData.orders;
		  orderId:app.globalData.orderId;
		  order: app.globalData.orders.length;
		  // console.log(this.data.orders)
		},
		
		/**
		 * 生命周期函数--监听页面显示
		 */
		onShow: function () {
			var app = getApp();
		    this.orders = app.globalData.orders,
		    this.orderId = app.globalData.orderId,
		    this.order = app.globalData.orders.length
		  // console.log(this.data.orders)
		},
	}
</script>

<style>
	/* pages/order/order.wxss */
	Page{
	  background-color: rgb(236, 236, 236)
	}
	.img{
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  margin-top: 100px;
	}
	.button{
	  padding-top: 5px;
	  background: red;
	  text-align: center;
	  border-radius: 10px;
	  margin: 10px;
	  padding: 20px;
	  color: #fff;
	}
	.tabs{
	  display: flex;
	  background: white;
	}
	.tabs_item{
	  text-align: center;
	  height: 80rpx;
	  line-height: 80rpx;
	  flex: 1;
	}
	.select_tab{
	  color: #05a515;
	  border-bottom: 3px solid #05a515;
	}
	
	.order{
	  border-radius: 10rpx;
	  width: 90%;
	  height: 150px;
	  background-color: white;
	  margin:30rpx auto;
	}
	.hr {
	  width: 100%;
	  height: 3rpx;
	  margin-top: 15rpx;
	  background-color: #ccc;
	}
	
</style>