<template>
	<view class="page">
	  <view class="user-area">
	    <view class="user-box">
	      <image class="avatar" :src="pic ? pic : old_pic"></image>
	      <view  class="name">{{name ?  name : '登录获得更多会员权益' }}</view>
	    </view>
	    <view v-if="ifName" class="login-btn" @tap="login">授权登录</view>
	  </view>
	  <view class="card-container">
	    <view class="card">
	      <view class="meta">
	        <view class="name">奶茶币</view>
	      </view>
	      <image class="icon" :src="swiperImages[0]"></image>
	    </view>
	    <view class="card">
	      <view class="meta">
	        <view class="name">优惠券</view>
	      </view>
	      <image class="icon" :src="swiperImages[1]"></image>
	    </view>
	  </view>
	
	  <view class="list-items">
	    <view class="item">
	         <view class="content">
	          <image class="icon" :src="swiperImages[2]"></image>
	          <view class="label">兑换码</view>
	         </view>
	         <view class="left-arrow">></view>
	    </view>
	    <view class="item" @tap="click1" data-code="privacy">
	         <view class="content">
	          <image class="icon" :src="swiperImages[3].url"></image>
	          <view class="label"  >隐私政策</view>
	         </view>
	         <view class="left-arrow" >></view>
	    </view>
	    <view class="item"  @tap="click2" data-code="agreement">
	         <view class="content">
	          <image class="icon" :src="swiperImages[4]"></image>
	          <view class="label">用户协议</view>
	         </view>
	         <view class="left-arrow">></view>
	    </view>
	    <view class="item" @tap="click3" data-code="xuke">
	         <view class="content">
	          <image class="icon" :src="swiperImages[4]"></image>
	          <view class="label">经营信息公示</view>
	         </view>
	         <view class="left-arrow">></view>
	    </view>
	
	    <view class="item item_last"  data-code="xuke">
	         <view class="content">
	          <image mode="widthFix" class="icon" src="../../components/imgs/应用.png"></image>
	          <view class="label">奶茶店APP</view>
	         </view>
	         <view class="left-arrow">下载APP体验更佳></view>
	    </view>
	  </view>
	
	  <view v-if="name" class="tuichu-btn" @tap="tuichu">退出登录</view>
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiperImages: [
				  '/static/imgs/奶茶1.jpg',
				  '/static/imgs/奶茶2.jpg',
				  '/static/imgs/奶茶3.jpg',
				  '/static/imgs/奶茶4.jpg',
				  '/static/imgs/奶茶5.jpg',
				],
				pic: getApp().globalData.pic,
				name: getApp().globalData.name,
				old_pic: '/static/imgs/奶茶1.jpg',
				ifName:true
			}
		},
		methods: {
			login(){
			  wx.navigateTo({
			    url: '../login/login',
			  })
			},
			
			tuichu(){
			    this.pic = null;
			    this.name = null;
			  getApp().globalData.pic = null;
			  getApp().globalData.name = null;
			  getApp().setUserInfo(null);
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
		},
		/**
		 * 生命周期函数--监听页面初次渲染完成
		 */
		onReady() {
		  wx.cloud.database().collection("my-list").get({
		    success: ans => {
		      this.swiperImages = ans.data
		      console.log("ans",ans)
		    }
		  })
		},
		
		/**
		 * 生命周期函数--监听页面显示
		 */
		onShow() {
		  // this.pic = getApp().globalData.pic,
		  // this.name = getApp().globalData.name
		},
		/**
		 * 生命周期函数--监听页面卸载
		 */
		onUnload() {
		  console.log("当前登录名：" + getApp().globalData.name)
		},
	}
</script>

<style>
	/* pages/My/My.wxss */
	.page{
	  background: linear-gradient(to bottom, #fbe7e6, #fbe7e6); 
	  width: 100%;
	  height: 100vh;
	  box-sizing: border-box;
	  padding: 0 30rpx;
	  padding-top: 70rpx;
	}
	
	.page .user-area{
	  width: 100%;
	  display: flex;
	  align-items: center;
	  justify-content: space-between;
	  margin-bottom: 40rpx;
	  /* height: 20rpx; */
	}
	
	.page .user-area .user-box{
	  display: flex;
	  align-items: center;
	}
	.page .user-area .avatar{
	    width: 120rpx;
	    height: 120rpx;
	    border-radius: 50%;
	}
	
	.page .user-area .name{
	   font-size: 28rpx;
	   margin-left: 24rpx;
	}
	
	.page .user-area .login-btn{
	  width: 150rpx;
	  height: 62rpx;
	  display: flex;
	  background-color: brown;
	  color: #fff;
	  justify-content: center;
	  align-items: center;
	  font-size: 25rpx;
	  border-radius: 10rpx;
	}
	
	.page .user-area .login-btn:active{
	  background-color:red;
	}
	
	.card-container{
	  width: 100%;
	  display: flex;
	  justify-content: space-between;
	  margin-bottom: 60rpx;
	}
	
	
	.card-container .card{
	  width: 330rpx;
	  box-sizing: border-box;
	  border-radius: 15rpx;
	  padding: 23rpx;
	  display: flex;
	  background-color: #fff;
	  justify-content: space-between;
	}
	
	.card-container .card .icon{
	  width: 72rpx;
	  height: 72rpx;
	}
	
	.card-container .card .count{
	  font-size: 24rpx;
	  font-weight: bold;
	}
	
	.card-container .card .name{
	  font-size: 17px;
	}
	
	.list-items{
	  display: flex;
	  width: 100%;
	  flex-direction: column;
	}
	
	.list-items .item{
	  display: flex;
	  justify-content: space-between;
	  background-color: #fff;
	  padding: 36rpx 30rpx;
	  align-items: center;
	}
	
	.list-items .item .content{
	  display: flex;
	} 
	
	.list-items .item .content .icon{
	  width: 40rpx;
	  height: 40rpx;
	  margin-right: 25rpx;
	}
	
	.list-items .item .content .label{
	  font-size: 26rpx;
	  font-weight: bold;
	}
	
	.list-items .item .left-arrow{
	  font-size: 25rpx;
	}
	
	.list-items .item_last{
	  margin-top: 30rpx;
	}
	
	.tuichu-btn{
	  margin-top: 20rpx;
	  width:700rpx;
	  height: 100rpx;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  border: 1px red solid;
	  color: red;
	}
</style>