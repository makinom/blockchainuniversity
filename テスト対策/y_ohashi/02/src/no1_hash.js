const crypto = require('crypto')

// 任意の文字列
var data = "My name is Yuta Ohashi"

// sha1(D)
var sha1_data = crypto.createHash('sha1').update(data).digest('hex');

// sha256(D)
var sha256_data = crypto.createHash('sha256').update(data).digest('hex');

// sha512(D)
var sha512_data = crypto.createHash('sha512').update(data).digest('hex');

// sha256(sha256(D))
var sha256x2_data = crypto.createHash('sha256').update(sha256_data).digest('hex');

// ripemd160(D)
var ripemd160_data = crypto.createHash('ripemd160').update(data).digest('hex');

// ripemd160(sha256(D))
var ripemd160_sha256_data = crypto.createHash('ripemd160').update(sha256_data).digest('hex');

console.log('対象文字列')
console.log(data)
console.log('')
console.log('sha1(D)')
console.log(sha1_data)
console.log('')
console.log('sha256(D)')
console.log(sha256_data)
console.log('')
console.log('sha512(D)')
console.log(sha512_data)
console.log('')
console.log('sha256(sha256(D))')
console.log(sha256x2_data)
console.log('')
console.log('ripemd160(D)')
console.log(ripemd160_data)
console.log('')
console.log('ripemd160(sha256(D))')
console.log(ripemd160_sha256_data)
console.log('')