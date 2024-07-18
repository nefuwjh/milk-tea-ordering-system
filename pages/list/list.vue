<template>
	<view>
		<!--pages/list/list.wxml-->
		<!-- 搜索框 -->
		<!-- <navigator url="../list/list"> -->
		  <view class="searchRoot">
		    <input class="searchInput" placeholder="搜索饮品" />
		    <image class="searchImg" src="../../components/imgs/搜索.png"></image>
		  </view>
		<!-- </navigator> -->
		<!--中间-->
		<view class="mid" style="padding-left: 50rpx;position: fixed;padding-top:80px;z-index: 98;background-color: white;">
		  <view>
		    <view>林大店 ></view>
		    <view style="font-size: 24rpx; padding-top: 4px; color: rgb(199, 199, 199);">距离您100m</view>
		  </view>
		
		  <view style="display: flex;">
		    <image src="../../components/imgs/公告.png" style="width: 20px; height: 20px;"></image>
		    <view style="font-size: 10px; padding-left: 6px;padding-top: 4px;">非会员单笔买满十杯，送一杯，详情请见订购须知</view>
		  </view>
		  
		</view>
		
		<!-- 奶茶饮品区 -->
		<view class="menu">
		
		<!-- 左侧导航栏 -->
		  <view class="menu-left" style="position:fixed;">
		  <!-- 绑定change事件读取左侧导航的标签的index，修改scrollIntoViewId属性为右侧奶茶区对应的id -->
		    <van-sidebar :active-key="activeKey" @click="onChange">
		      <!-- disabled:禁用元素 -->
		      <van-sidebar-item title="圣诞限定" disabled />
		      <van-sidebar-item title="草莓系列" />
		      <van-sidebar-item title="黑糖系列" />
		      <van-sidebar-item title="真鲜果茶" />
		      <van-sidebar-item title="轻牛乳茶" />
		    </van-sidebar>
		  </view>
		
		<!-- 右侧奶茶选择区 -->
		<!-- 通过scroll-into-view配合id实现页内跳转 -->
		<!-- 通过读取右侧滑动的距离scrollTop分区修改左侧导航栏选中的标签值activeKey -->
		  <scroll-view direction="top" style="height: 80vh; width: 80%; margin-left: 20%;" 
		  :scroll-into-view="scrollIntoViewId" class="menu-right" @scroll="handleScroll">
		    <!-- 草莓系列 -->
		    <view id="to1" style="font-weight: bold;margin-left: 10px;margin-top:15px;margin-bottom: 10px;">草莓系列</view>
		    <van-card v-for="(t,title) in goods1" :price="t.price" :desc="t.desc" :title="t.title" :thumb="t.thumb">
		      <view slot="footer">
		        <van-button class="my-button" size="mini" @tap="gotoPage" :data-id="t.id" round="true" color="linear-gradient(to right, #4bb0ff, #6149f6)">选规格</van-button>
		      </view>
		    </van-card>
		
		    <!-- 黑糖系列 -->
		    <view id="to2" style="font-weight: bold;margin-left: 10px;margin-top:15px;margin-bottom: 10px;">黑糖系列</view>
		    <van-card v-for="(t,title) in goods2"
		    price="{{t.price}}" desc="{{t.desc}}" title="{{t.title}}" thumb="{{t.thumb}}" tag="火爆"
		    origin-price="{{index === 0 ? '16' : (index === 1 ? '14' : (index === 2 ? '16' : ''))}}">
		      <view slot="footer">
		        <van-button class="my-button" size="mini" @tap="gotoPage" data-id="{{t.id}}">选规格</van-button>
		      </view>
		    </van-card>
		
		    <!-- 真鲜果茶 -->
		    <view id="to3" style="font-weight: bold;margin-left: 10px;margin-top:15px;margin-bottom: 10px;">真鲜果茶</view>
		    <van-card v-for="(t,title) in goods3" :key="title" price="{{t.price}}" desc="{{t.desc}}" title="{{t.title}}" thumb="{{t.thumb}}">
		      <view slot="footer">
		        <van-button class="my-button" size="mini" @tap="gotoPage" data-id="{{t.id}}">选规格</van-button>
		      </view>
		    </van-card>
		
		     <!-- 轻牛乳茶 -->
		     <view id="to4" style="font-weight: bold;margin-left: 10px;margin-top:15px;margin-bottom: 10px;">轻牛乳茶</view>
		    <van-card v-for="(t,title) in goods4" price="{{t.price}}" desc="{{t.desc}}" title="{{t.title}}" thumb="{{t.thumb}}">
		      <view slot="footer">
		        <van-button class="my-button" size="mini" bindtap="gotoPage" data-id="{{t.id}}">选规格</van-button>
		      </view>
		    </van-card>
		    <!-- 空卡片，防止最底部的商品被购物车遮挡 -->
		    <van-card>
		    </van-card>
		  </scroll-view>
		    <!-- 右侧区域结束 -->
		
		</view>
		
		<!--底部购物车区域-->
		<view class="bottom_cart">
		  <view class="cart">
		    <image class="cart_img" src="../../components/imgs/购物车.png"></image>
		    <text class="cart_num">{{totalnum}}</text>
		  </view>
		  <view class="moeny">总价:{{totalPrice}}元</view>
		  <!-- 通过buy事件跳转到订单页面 -->
		  <view class="buy" @tap="buy">去支付</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				totalnum: getApp().globalData.totalnum,
				totalPrice: getApp().globalData.totalPrice,
				activeKey: 1, // 默认选中的标签值
				scrollIntoViewId: '', // 右侧滚动到的位置
				goods1: getApp().globalData.goods1, // 从app.js的全局变量中获取goods1并存入当前页面的局部变量
				goods2: getApp().globalData.goods2, // 
				goods3: getApp().globalData.goods3, // 
				goods4: getApp().globalData.goods4, // 
			}
		},
		methods: {
			// 左侧导航栏点击事件
			onChange(e) {
			  let index = e.detail;
			  const tagId = `to${index}`;
			  this.scrollIntoViewId = tagId;  // 设置scroll-into-view属性为对应标签的id
			  console.log("index:" + index);
			  console.log(this.data.scrollIntoViewId)
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
			  this.activeKey = activeKey;
			  // console.log("activekey:" + activeKey);
			  // console.log("scrollTop:" + scrollTop)
			},
			
			// 选规格跳转页面
			gotoPage(e) {
			  wx.navigateTo({
			    url: '../detail/detail', // 目标页面路径
			  });
			  const id  = e.currentTarget.dataset.id; // 获取点击按钮的data-id属性值
			  getApp().globalData.a = id; // 修改全局变量a为商品的id属性值
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
		},
		/**
		 * 生命周期函数--监听页面显示
		 */
		onShow() {
		    this.totalnum = getApp().globalData.totalnum,
		    this.totalPrice = getApp().globalData.totalPrice
		},
	}
</script>

<style>
	/* pages/list/list.wxss */
	/* 搜索框 */
	.searchRoot {
	  background: rgb(255, 255, 255);
	  padding: 25rpx;
	  padding-top: 30px;
	  display: flex;
	  width: 100%;
	  flex-direction: row;
	  justify-content:flex-start;
	  position:fixed;
	  z-index: 99;
	}
	.searchInput {
	  /* 让输入框不缩短些 */
	  flex: 0.65;
	  height: 50rpx;
	  padding-left: 30rpx;
	  border: 1px solid #077f14;
	  border-radius: 30rpx;
	  background-color: aliceblue;
	}
	.searchImg {
	  width: 60rpx;
	  height: 60rpx;
	  margin: 0 15rpx;
	}
	
	.mid {
	  width: 100%;
	}
	/* 侧边导航栏区域 */
	view .van-sidebar-item--selected {
	  border-color: #fb9968;
	  border-width: 4px;
	}
	
	/*底部购物车区域*/
	/*固定底部区域*/
	.bottom_cart{
	  /* border:1px solid #422d05; */
	  position: fixed;
	  bottom: -2px;
	  width: 100%;
	  height: 80rpx;
	  background-color: rgb(255, 255, 255);
	  color: black;
	  display: flex;
	}
	.cart{
	  width: 100rpx;
	  height: 100rpx;
	  border-radius: 50%;
	  background: #faab00;
	  position: absolute;
	  top: -40rpx;
	  left: 40rpx;
	}
	.cart_img{
	  width: 60rpx;
	  height: 60rpx;
	  margin-left: 18rpx;
	  margin-top: 25rpx;
	}
	.cart_num{
	  color: rgb(0, 0, 0);
	  position: absolute;
	  left: 70rpx;
	  font-weight: 1000;
	  
	}
	.moeny{
	  line-height: 80rpx;
	  text-align: center;
	  flex: 1;
	}
	.buy{
	  width: 200rpx;
	  line-height: 80rpx;
	  text-align: center;
	  color: white;
	  background: #f0860ec7;
	  border-radius: 12px;
	  font-size: large;
	}
	
	.my-button {
	  background-color: red;
	  color: white;
	  border-radius: 16%;
	  padding: 2px 4px;
	  
	}
	
	/*  */
	.menu {
		display: flex;margin-top:141px;margin-bottom: 0;
	}
</style>