/**
 * Created by makinomasashi on 16/11/13.
 */
var Hash = require('fullnode/lib/hash')
var input = require('fs').readFileSync(process.stdin.fd)
var buf = Buffer(input)
console.log('SHA1:' + Hash.sha1(buf).toString('hex'))
console.log('SHA256:' + Hash.sha256(buf).toString('hex'))
console.log('SHA512:' + Hash.sha512(buf).toString('hex'))
console.log('SHA256D:' + Hash.sha256sha256(buf).toString('hex'))
console.log('RIPEMD160:' + Hash.ripemd160(buf).toString('hex'))
console.log('RIPEMD160SHA256:' + Hash.sha256ripemd160(buf).toString('hex'))
