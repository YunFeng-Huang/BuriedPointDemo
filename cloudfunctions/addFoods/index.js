// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
// 云函数入口函数
exports.main = async (event) => {
  event.goods.forEach((v)=>{
    db.collection('goods').add({
      data:{
        des:'12312312',
        price:1232
      }
    })
  })
  return 'ok'
}