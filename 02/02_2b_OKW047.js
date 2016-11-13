/**
 * Created by makinomasashi on 16/11/13.
 */
var Base58check = require('yours-bitcoin/lib/base-58-check')
var input = require('fs').readFileSync(process.stdin.fd)

try {
  var dec_buff = Base58check.decode(input.toString())
  console.log('OK')
  console.log(dec_buff.toString())
} catch (e) {
  console.log('NG')
}