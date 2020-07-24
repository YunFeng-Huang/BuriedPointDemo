const cloud = require('wx-server-sdk')
cloud.init()
exports.main = async (event, context) => {
  try {
    const result = await cloud.openapi.analysis.getVisitPage({
        beginDate: '20170313',
        endDate: '20170313'
      })
    return result
  } catch (err) {
    return err
  }
}