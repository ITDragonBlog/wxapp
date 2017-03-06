function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}

var rootDocment = 'https://www.itit123.cn';
function req(url,data,cb){
    wx.request({
      url: rootDocment + url,
      data: data,
      method: 'post',
      header: {'Content-Type': 'application/json'},
      success: function(res){
        return typeof cb == "function" && cb(res.data)
      },
      fail: function(){
        return typeof cb == "function" && cb(false)
      }
    })
}


module.exports = {
  req: req
}