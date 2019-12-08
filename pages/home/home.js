// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 顶部
    getCity:'呼和浩特市',
    nowplaying:'正在上映',
    upcoming: '即将上映',
    focus: {
      indicatorDots: true,
      vertical: false,
      autoplay: true,
      interval: 5000,
      circular:true,
      duration: 500,
      indicatorActiveColor:'#ffffff',
      'swiperImg': [
        { id: 1, imgPath: '/images/banner/banner1.jpg' },
        { id: 2, imgPath: '/images/banner/banner2.jpg'},
        { id: 3, imgPath: '/images/banner/banner3.jpg'}
      ]
    },
    gridelistData:{
      gride:[{
        id:1,
        menuBtnPath:'/images/gride/lihe.png',
        grideText:'0元看电影',
        toUrl:''
      }, {
          id: 2,
          menuBtnPath: '/images/gride/qiandao.png',
          grideText: '签到领券',
          toUrl: ''
        }, {
          id: 3,
          menuBtnPath: '/images/gride/yhq.png',
          grideText: '秒抢优惠券',
          toUrl: ''
        }, {
          id: 4,
          menuBtnPath: '/images/gride/lihe.png',
          grideText: '直播送影券',
          toUrl: ''
        }]
    },

    movieListsData:{
      moviesLists:[
        {
          id:1,
          tourl:'',
          movieImg:'/images/movie/yongze.jpg',
          movieName:'王者游戏',
          pingfeng: '暂无评分',
          toStar: '陈道明、李冰冰、任泉、姚明陈道明、李冰冰、任泉、姚明',
          playCount: '6230次'
        },
        {
          id: 2,
          tourl: '',
          movieImg: '/images/movie/yongze.jpg',
          movieName: '王者游戏',
          pingfeng: '猫眼评分 8.9',
          toStar: '陈道明、李冰冰、任泉、姚明',
          playCount: '6230次'
        },
        {
          id:3,
          tourl: '',
          movieImg: '/images/movie/yongze.jpg',
          movieName: '王者游戏',
          pingfeng: '8.7',
          toStar: '陈道明、李冰冰、任泉、姚明',
          playCount: '6230次'
        },
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