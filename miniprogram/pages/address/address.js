// miniprogram/pages/address.js
import reset from '../../tracks/resetApp';
reset(Page,'pages/address/address')({

  /**
   * 页面的初始数据
   */
  data: {
    form:{
      username:'',
      type:'1',
      addr:'',
      des:'',
      phone:''
    }
  },
  save(){
    
  },
  onChangePhone(event){
    this.setData({
      'form.phone': event.detail,
    });
  },
  onChangeDes(event){
    this.setData({
      'form.des': event.detail,
    });
  },
  onChange(event) {
    // event.detail 为当前输入的值
    this.setData({
      'form.username': event.detail,
    });
  },
  onChange1(event) {
    this.setData({
      'form.type': event.detail,
    });
  },
  getLocation(){
    this.getPermission(this)
  },
  getPermission:function(obj){
    wx.chooseLocation({
      success: function (res) {    
          obj.setData({
              addr: res.address      //调用成功直接设置地址
          })                
      },
      fail:function(){
          wx.getSetting({
              success: function (res) {
                  var statu = res.authSetting;
                  if (!statu['scope.userLocation']) {
                      wx.showModal({
                          title: '是否授权当前位置',
                          content: '需要获取您的地理位置，请确认授权，否则地图功能将无法使用',
                          success: function (tip) {
                              if (tip.confirm) {
                                  wx.openSetting({
                                      success: function (data) {
                                          if (data.authSetting["scope.userLocation"] === true) {
                                              wx.showToast({
                                                  title: '授权成功',
                                                  icon: 'success',
                                                  duration: 1000
                                              })
                                              //授权成功之后，再调用chooseLocation选择地方
                                              wx.chooseLocation({
                                                  success: function(res) {
                                                      obj.setData({
                                                          addr: res.address
                                                      })
                                                  },
                                              })
                                          } else {
                                              wx.showToast({
                                                  title: '授权失败',
                                                  icon: 'success',
                                                  duration: 1000
                                              })
                                          }
                                      }
                                  })
                              }
                          }
                      })
                  }
              },
              fail: function (res) {
                  wx.showToast({
                      title: '调用授权窗口失败',
                      icon: 'success',
                      duration: 1000
                  })
              }
          })
      }
  })        
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