import trackConfig from './index';
import AppItem from './app';
export default function (type, url) {
  let item;
    if (url) {
      item = trackConfig.find(v => {
        return v.path == url
      })
    } else {
      item = AppItem
    }
  //先把原生的三个对象保存起来
  let originalApp = type;
  //在原生的事件函数里面，添加数据埋点，并替换成新的事件函数
  const _extendsApp = function (conf, method) {
    
    const _o_method = conf[method];
    conf[method] = function (ops) {
      console.log(conf,'opsconf')
      //在此处进行数据埋点
      console.log(method)
      if(method == 'onShow'){
        console.log(url,'app && app.history_router.push(url)')
        url && getApp&& getApp().history_router.push(url)
      }
      item.methods && item.methods[method] && item.methods[method]()
      if (typeof _o_method === 'function') {
        _o_method.call(this, ops);
      }
    }
  }
  //重新定义App这个对象，将原来的App对象覆盖
  return function (conf) {
    //定义需要增强的方法
    Object.keys(item.methods).map(function (method) {
      _extendsApp(conf, method);
    })
    return originalApp(conf);
  }
};