//app.js
import Tracker from './tracks/xbossTrack/index';
import trackConfig from './tracks/index';

new Tracker({ tracks: trackConfig });

import reset from './tracks/reset';

App = reset(App)


var xbossdebug = require('./xbossdebug.js') // 引用xbossdebug
xbossdebug.config.key = 'maizuo' // key为自定义唯一值，用于后端记录时区分应用
xbossdebug.config.url = 'https://easy-mock.com/'; // 上报服务端地址
// 可选参数
xbossdebug.config.setSystemInfo = true; // 获取系统信息
xbossdebug.config.setLocation = true; // 获取用户位置信息


//App使用拦截器示例
App({
  data:{
    history_router:[],
  },
  xbossdebug,
  onLaunch(options) {
    // Do something initial when launch.
        if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }
  },
  onShow(options) {
    // Do something when show.
  },
  onHide() {
    console.log(getCurrentPages(),'getCurrentPages()')
    // Do something when hide.
  },
  onError(msg) {
    console.log(msg)
  },
  _click(){
    console.log(getCurrentPages(),'getCurrentPages()')
  },
  globalData: 'I am global data'
}
)

// App({
//   onLaunch: function () {
    
//     if (!wx.cloud) {
//       console.error('请使用 2.2.3 或以上的基础库以使用云能力')
//     } else {
//       wx.cloud.init({
//         traceUser: true,
//       })
//     }
//     this.globalData = {}

  

//   }
// })
