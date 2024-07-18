<script>
	export default {
		//全局变量定义
		globalData: {
		  a:null,//详情页展示商品编号
		  show: null,
		  totalnum: null,//总购买数量
		  totalPrice: null,//购物车总价格
		  goods1:[],
		  goods2:[],
		  goods3:[],
		  goods4:[],
		  buys:[],//存购物车中的所有的奶茶
		  pic:null,//存登录头像
		  name:null,//存登录昵称
		  orders:[],// 订单
		  orderId:null
		},
		onLaunch: function () {
		  if (!wx.cloud) {
		    console.error('请使用 2.2.3 或以上的基础库以使用云能力');
		  } else {
		    wx.cloud.init({
		      // env 参数说明：
		      //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
		      //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
		      //   如不填则使用默认环境（第一个创建的环境）
		      // env: 'my-env-id',
		      traceUser: true,
		    });
		  }
		  //全局变量初始化
		  this.globalData = {
		    app_userInfo:null,//用户登录信息
		    // show: null,
		    totalnum:0,//总购买数量
		    totalPrice: 0,//购物车总价格
		    buys:[],//存购物车中的所有的奶茶
		    orders:[],//订单
		    name:null,//存登录昵称
		    orderId:1,
		    goods1:[
		      {
		        id:1,
		        title:"草莓白巧",
		        price:"14",
		        desc:"这是对草莓白巧的描述",
		        thumb:"/imgs/草莓白巧.jpg",
		      },
		      {
		        id:2,
		        title:"草莓奶冻",
		        price:"12",
		        desc:"这是对草莓奶冻的描述",
		        thumb:"/imgs/草莓奶冻.jpg",
		      },
		      {
		        id:3,
		        title:"洛神山楂莓",
		        price:"12",
		        desc:"这是对洛神山楂莓的描述",
		        thumb:"/imgs/洛神山楂莓.jpg"
		      },
		    ],
		    goods2:[
		      {
		        id:4,
		        title:"黑糖陨石牛乳",
		        price:"14",
		        desc:"这是对黑糖陨石牛乳的描述",
		        thumb:"/imgs/黑糖陨石牛乳.jpg",
		      },
		      {
		        id:5,
		        title:"黑糖珍珠奶茶",
		        price:"10",
		        desc:"这是对黑糖珍珠奶茶的描述",
		        thumb:"/imgs/黑糖珍珠奶茶.jpg",
		      },
		      {
		        id:6,
		        title:"黑糖珍珠奶茶（牛乳版）",
		        price:"13",
		        desc:"这是对黑糖珍珠奶茶（牛乳版）的描述",
		        thumb:"/imgs/黑糖珍珠奶茶（牛乳版）.jpg",
		      },
		    ],
		    goods3:[
		      {
		        id:7,
		        title:"杨枝甘露",
		        price:"17",
		        desc:"这是对杨枝甘露的描述",
		        thumb:"/imgs/杨枝甘露.jpg",
		      },
		      {
		        id:8,
		        title:"葡萄冻冻",
		        price:"16",
		        desc:"这是对葡萄冻冻的描述",
		        thumb:"/imgs/葡萄冻冻.jpg",
		      },
		      {
		        id:9,
		        title:"生椰西瓜",
		        price:"14",
		        desc:"这是对生椰西瓜的描述",
		        thumb:"/imgs/生椰西瓜.jpg",
		      },
		      {
		        id:10,
		        title:"芒芒生打椰",
		        price:"15",
		        desc:"这是对芒芒生打椰的描述",
		        thumb:"/imgs/芒芒生打椰.jpg",
		      },
		      {
		        id:11,
		        title:"超级水果茶",
		        price:"22",
		        desc:"这是对超级水果茶的描述",
		        thumb:"/imgs/超级水果茶.jpg",
		      },
		    ],
		    goods4:[
		      {
		        id:12,
		        title:"七窨茉莉轻乳茶",
		        price:"13",
		        desc:"这是对茉莉轻乳茶的描述",
		        thumb:"/imgs/七窨茉莉轻乳茶.jpg",
		      },
		      {
		        id:13,
		        title:"玫茉双花轻乳茶",
		        price:"14",
		        desc:"这是对玫茉双花轻乳茶的描述",
		        thumb:"/imgs/玫茉双花轻乳茶.jpg",
		      },
		      {
		        id:14,
		        title:"梅占红茶轻乳茶",
		        price:"14",
		        desc:"这是对梅占红茶轻乳茶的描述",
		        thumb:"/imgs/梅占红茶轻乳茶.jpg",
		      },
		      {
		        id:15,
		        title:"奇兰乌龙轻乳茶",
		        price:"13",
		        desc:"这是对奇兰乌龙轻乳茶的描述",
		        thumb:"/imgs/奇兰乌龙轻乳茶.jpg",
		      }
		    ],
		  };
		},
		
		setUserInfo:function(user)
		{
		  this.globalData.app_userInfo=user;
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss/index.scss';
	/* #ifndef APP-NVUE */
	@import '@/static/customicons.css';
	// 设置整个项目的背景色
	page {
		background-color: #f5f5f5;
	}

	/* #endif */
	.example-info {
		font-size: 14px;
		color: #333;
		padding: 10px;
	}
	/**app.wxss**/
	@import "@/static/styles/weui.css";
	.container {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  box-sizing: border-box;
	} 
	
	button {
	  background: initial;
	}
	
	button:focus{
	  outline: 0;
	}
	
	button::after{
	  border: none;
	}
	
	
	page {
	  background: #f6f6f6;
	  display: flex;
	  flex-direction: column;
	  justify-content: flex-start;
	}
</style>
