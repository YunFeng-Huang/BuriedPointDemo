//app.js
import Tracker from './tracks/xbossTrack/index';
import trackConfig from './tracks/index';

new Tracker({ tracks: trackConfig });

import reset from './tracks/reset';

App = reset(App)
// var appFilter = function(config){
//   if(config.onLaunch){
//     let _onLaunch = config.onLaunch;
//     config.onLaunch = function(ops){
//       console.log(ops,'ops1111')
//          //在这里干埋点的事
//         //例如存储数据、上送数据
//          _onLaunch.call(this);//调用原来的执行逻辑
//     }
//   }
//   return config;
// }
 
// //先把原生的三个对象保存起来
// const originalApp = App,
//       originalPage = Page,
//       originalComponent = Component;
// //在原生的事件函数里面，添加数据埋点，并替换成新的事件函数
// const _extendsApp = function (conf, method) {
//   const _o_method = conf[method];
//   conf[method] = function (ops) {
//     //在此处进行数据埋点
//     console.log(ops,'method',method)
//     if (typeof _o_method === 'function') {
//       _o_method.call(this, ops);
//     }
//   }
// }

 
// //重新定义App这个对象，将原来的App对象覆盖
// App = function(conf){
//   //定义需要增强的方法
//   const methods = ['onLaunch', 'onShow', 'onHide', 'onError']
 
//   methods.map(function (method) {
//     _extendsApp(conf, method);
//   })
//   //另外增强扩展埋点上送的方法
//   conf.william = {
//     addActionData: function (ops) {
//       console.log('addActionData');
//     },
//     addVisitLog: function (ops) {
//       console.log('addVisitLog');
//     }
//   }
//   return originalApp(conf);
// }

//App使用拦截器示例
App({
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
    // Do something when hide.
  },
  onError(msg) {
    console.log(msg)
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
