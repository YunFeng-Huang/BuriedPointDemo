//云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()

//引入request-promise
var rp = require('request-promise');
let p = function () {
  return new Promise(resolve =>{
    rp('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx3df45fba6dacd5d3&secret=7c076ab8400d0fd35a12b0f4afe2f579')  //使用request-promise发送请求
      .then(function(res){
        resolve(res.access_token)
      })
      .catch(function(err){
      })
  })
}
let p1 = function (access_token) {
  return new Promise(resolve =>{
    rp(`https://api.weixin.qq.com/datacube/getweanalysisappidvisitpage?access_token=${access_token}`)  //使用request-promise发送请求
      .then(function(res){
        resolve(res)
      })
      .catch(function(err){
      })
  })
}
//云函数入口函数
exports.main = async ( event, context ) => {
  let a = await p()
  return p1(a)
}