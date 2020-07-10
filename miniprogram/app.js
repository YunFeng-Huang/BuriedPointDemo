//app.js
require('./um-index');
App({
  umengConfig: {
    appKey: '5f08267cdbc2ec08845c6fdd', //由友盟分配的APP_KEY
    // 使用Openid进行统计，此项为false时将使用友盟+uuid进行用户统计。
    // 使用Openid来统计微信小程序的用户，会使统计的指标更为准确，对系统准确性要求高的应用推荐使用Openid。
    useOpenid: true,
    // 使用openid进行统计时，是否授权友盟自动获取Openid，
    // 如若需要，请到友盟后台"设置管理-应用信息"(https://mp.umeng.com/setting/appset)中设置appId及secret
    autoGetOpenid: false,
    debug: true, //是否打开调试模式
    uploadUserInfo: true // 自动上传用户信息，设为false取消上传，默认为false
  },
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }
    wx.uma.setOpenid('97') 
    this.globalData = {}

  

  }
})
