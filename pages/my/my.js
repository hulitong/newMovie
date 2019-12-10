// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    getuserimg:'/images/movie/yongze.jpg',
    getusername: '胡萝卜17647360621',
    userlevel: '普通用户',
    setImg: '/images/set.png',
    cardTitle:'卡券中心',
    myorderData:{
      gride:[
        { id: 1, toUrl: '', menuBtnPath: '/images/gride/lihe.png', grideText:'电影票'},
        { id: 2, toUrl: '', menuBtnPath: '/images/gride/lihe.png', grideText: '演出票' },
        { id: 3, toUrl: '', menuBtnPath: '/images/gride/lihe.png', grideText: '赛事票' },
        { id: 4, toUrl: '', menuBtnPath: '/images/gride/lihe.png', grideText: '周边' }
      ]
    },
    myMoney:[
      { id: 1, urlPath: '', moneyValue: 26250.00, moneyKey: '余额' },
      { id: 2, urlPath: '', moneyValue: 253, moneyKey: '积分' },
      { id: 3, urlPath: '', moneyValue: 18, moneyKey: '喵币' },
    ],
    cardCenter:[
      { id: 1, cardName:'优惠券'},
      { id: 2, cardName: '会员卡' },
      { id: 3, cardName: '积分卡' },
      { id: 4, cardName: '联盟卡' }
    ],
    listData:{
      list:[
        { id: 1, listUrl:'myAddress/myAddress',listImg: '/images/address.png', listTitle:'我的地址'},
        { id: 2, listUrl:'', listImg: '/images/coupon.png', listTitle: '我的卡券' },
        { id: 3, listUrl:'',listImg: '/images/collection.png', listTitle: '我的收藏' },
        { id: 4, listUrl:'',listImg: '/images/message.png', listTitle: '我的信息' },
        { id: 5, listUrl: '', listImg: '/images/customer01.png', listTitle: '联系客服' },
      ]
    }
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

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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