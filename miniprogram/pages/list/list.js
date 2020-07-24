//index.js
const app = getApp()
import reset from '../../tracks/resetApp';

reset(Page,'pages/list/list')({
  data: {
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: '',
    // detail_id: 'jXfYjHspKo8RURidBmRfjLqLqW2n0m6B7MFMw3V3nBkHE1JK',
    list_id: 'ZVG1hucCX0bR9GZfv9CUj5UlHsOlLWH855IvUl6ud7w0O4v9',
    list: [],
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    scrollXActive: 0,
    scrollXList: [],
    scrollItem: []
  },

  onLoad: function() {
    // this.food = new Food();
    console.log(wx.cloud,'wx.cloud');
    if (!wx.cloud) {
      wx.redirectTo({
        url: '../chooseLib/chooseLib',
      })
      return
    }

    // 获取用户信息
    wx.getSetting({
      success: res => {
        console.log(res)
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              this.setData({
                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    })
    this.initData()
  },

  onGetUserInfo: function(e) {
    if (!this.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        userInfo: e.detail.userInfo
      })
    }
  },

  onGetOpenid: function() {
    // 调用云函数
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        app.globalData.openid = res.result.openid
        wx.navigateTo({
          url: '../userConsole/userConsole',
        })
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
        wx.navigateTo({
          url: '../deployFunctions/deployFunctions',
        })
      }
    })
  },
  initData: function () {
    const db = wx.cloud.database()
    // 查询当前用户所有的 counters
    db.collection('counters').doc(this.data.list_id).get({
      success: res => {
        this.setData({
          list: res.data
        })
        console.log('[数据库] [查询记录] 成功: ', res)
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '查询记录失败'
        })
        console.error('[数据库] [查询记录] 失败：', err)
      }
    })
    db.collection('counters').doc('tLS9L362W2mWyaNrOxODvtA726Qyh59XetDhSg1XCnW71cn9').get({
      success: res => {
        this.setData({
          scrollXList: res.data.goods,
          scrollItem: res.data.goods[0]
        })
        console.log(res.data.goods[0]);
        console.log('[数据库] [查询记录] 成功: ', res)
        db.collection('goods').add({
          data:{
            des:'wwwwwww',
            price:1232
          }
        })
        db.collection('goods').where({
          done: false
        }).remove().then((res)=>{
          console.log(res.data,'res.datares.data')
        })
        // db.collection('goods').doc('dbff9fc75dfc878105328d4f7edd5f33').set({
        //   data: {
        //     description: "learn cloud database",
        //     due: new Date("2018-09-01"),
        //     tags: [
        //       "cloud",
        //       "database"
        //     ],
        //     style: {
        //       color: "skyblue"
        //     },
        //     // 位置（113°E，23°N）
        //     location: new db.Geo.Point(113, 23),
        //     done: false
        //   },
        //   success: function(res) {
        //     console.log(res.data)
        //   }
        // })
        // wx.cloud.callFunction({
        //   name:'addFoods',
        //   data:{
        //     goods : res.data.goods[0].foods
        //   },
        // }).then((res)=>{
        //   console.log(res,'res')
        // })
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '查询记录失败'
        })
        console.error('[数据库] [查询记录] 失败：', err)
      }
    })
  },
  cateClick(e) {
    console.log(e,'e')
    app.xbossdebug.error('cateClick，请求出错啦')
    this.setData({
      scrollXActive: e.currentTarget.dataset.index,
      scrollItem: this.data.scrollXList[e.currentTarget.dataset.index]
    })
  },
  _submit(){
    app.xbossdebug.error('_submit，请求出错啦')
    console.log(app.history_router,'222')
    wx.navigateTo({
      url: '/pages/address/address',
      events: {
      // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
      acceptDataFromOpenedPage: function(data) {
      console.log(data)
      }}
    })
  },
  _OpenList(){
    wx.navigateTo({
      url: '/pages/list/list',
      events: {
      // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
      acceptDataFromOpenedPage: function(data) {
      console.log(data)
      }}
    })
  },
})
