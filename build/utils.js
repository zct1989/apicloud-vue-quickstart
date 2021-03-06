const os = require('os')
let IPv4
/**
 * 获取ip地址
 */
module.exports.getIpAddress = function () {
  let networkInterfaces = os.networkInterfaces()
  let network = networkInterfaces['本地连接'] || networkInterfaces['en0']

  for (var i = 0; i < network.length; i++) {
    if (network[i].family === 'IPv4') {
      IPv4 = network[i].address
    }
  }
  return IPv4
}
