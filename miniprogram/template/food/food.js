var myBehavior = require('../my-behavior')
Component({
  behaviors: [myBehavior],
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    innerItem: Array
  },
  lifetimes: {
    created: function () {
      // 在组件实例刚刚被创建时执行
      // this.initData();
      console.log('created');
    },
    attached: function () {
      // 在组件实例进入页面节点树时执行
      console.log('attached');
    },
    ready: function () {
      // 在组件在视图层布局完成后执行
      console.log(this.data.innerIndex)
      console.log('ready')
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
      console.log('detached')
    },
  },
  data: {
    // 这里是一些组件内部数据
    icon1: './decrease_1@2x.png',
    icon2: './discount_2@3x.png'
  },
  methods: {
    // 这里是一个自定义方法
    customMethod: function () { },
  }
})