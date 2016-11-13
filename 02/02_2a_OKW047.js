/**
 * Created by makinomasashi on 16/11/13.
 */
var Base58check = require('yours-bitcoin/lib/base-58-check')
var input = require('fs').readFileSync(process.stdin.fd)
var buf = Buffer(input)
console.log(Base58check.encode(buf).toString('hex'))