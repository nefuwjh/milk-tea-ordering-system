<template>
	<view class="page">
	  <image class="logo" src="../../components/imgs/奶茶1.jpg"></image>
	  <view class="logo-title">奶茶店</view>
	  <view class="intro">成为会员，立享更多优惠福利</view>
	  <view class="login-tip">授权绑定微信账号 为您提供更好的服务</view>
	  <button style="width: 500rpx;"  class="login-btn" @tap="getuser">一键登录</button>
	  <view style="width: 500rpx;" class="cancel" @tap="tuichu">取消</view>
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			getuser:function(e){
			  wx.getUserProfile({
			    desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
			    success: (res) => {
			    var arr = getApp()
			    arr.globalData.pic = res.userInfo.avatarUrl;
			    arr.globalData.name = res.userInfo.nickName;
			    let loginUserInfo =res.data;
			    arr.setUserInfo(loginUserInfo);
			    wx.navigateBack({
			      delta: 0,
			    })
			    }
			  })
			},
			
			tuichu(){
			  wx.navigateBack({
			    delta: 0,
			  })
			  let app=getApp();
			  app.setUserInfo(null);
			},
		},
		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad(options) {
		  const app = getApp();
		  let app_userInfo = app.globalData.app_userInfo;
		  if (app_userInfo === null) {
		      this.lingquan= "../loginx/loginx",
		      this.deliverPath = "../loginx/loginx",
		      this.navigatorWay = "redirect"
		  } else {
		      this.lingquan = "../list/list",
		      this.deliverPath = "../list/list",
		      this.navigatorWay = "switchTab"
		  };
		},
		/**
		 * 生命周期函数--监听页面显示
		 */
		onShow: function () {
			const app = getApp();
		    app.globalData.pic = null;
		    app.globalData.name = null;
		},
	}
</script>

<style>
	/* pages/login/login.wxss */
	.page{
	  padding-top: 250rpx;
	  display: flex;
	  flex-direction: column;
	  justify-content: center;
	  align-items: center;
	}
	
	.logo{
	  width: 150rpx;
	  height: 150rpx;
	  border-radius: 50%;
	  overflow: hidden;
	  margin-bottom: 22rpx;
	}
	
	.logo-title{
	 margin-bottom: 160rpx;
	}
	
	.intro{
	  font-size: 37rpx;
	  font-weight: bold;
	  margin-bottom: 84rpx;
	}
	
	.login-tip{
	  font-size: 20rpx;
	  color: #777777;
	}
	
	.login-btn{
	  width: 590rpx;
	  height: 85rpx;
	  background-color: #E60012;
	  color: white;
	  border-radius: 10rpx;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  margin-bottom: 42rpx;
	}
	
	.login-btn:active{
	 background-color: red;
	}
	
	.cancel{
	  width: 380rpx;
	  height: 85rpx;
	  background-color: #E60012;
	  color: white;
	  border-radius: 10rpx;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	}
</style>