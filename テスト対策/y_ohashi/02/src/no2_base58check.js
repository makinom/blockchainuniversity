const bs58       = require('bs58')
const bs58check  = require('bs58check')
const sha256     = require('sha256')

// 任意の文字列
var data = "My name is Yuta Ohashi"

// 任意の文字列をバイナリデータ（バイト列）に変換
var binary_data = Buffer(data)

// バイト列のデータをsha256で2回ハッシュする
var sha256x2_data = sha256.x2(binary_data, { asBytes:true })

// ハッシュしたデータのバイト列のチェックサム（先頭4バイト）を取得する
var check_sum = Buffer(sha256x2_data).slice(0,4)

// 任意の文字列のバイナリデータとチェックサムを結合する
var concat_data = Buffer.concat([binary_data,check_sum])

// 結合したデータをBase58エンコードする
var bs58_concat_data = bs58.encode(concat_data)

// Base58エンコードした文字列をbs58checkでデコードする
var bs58_decode_data = bs58check.decode(bs58_concat_data)

// デコードしたデータの後ろ4バイトを取得する
var new_check_sum = Buffer(bs58.decode(bs58_concat_data)).slice(-4)

console.log('対象文字列')
console.log(data)
console.log('')
console.log('対象文字列から算出したチェックサム')
console.log(check_sum)
console.log('')
console.log('結合した文字列をBase58エンコードした文字列(= base58check)')
console.log(bs58_concat_data)
console.log('')
console.log('エンコードした文字列から再取得したチェックサム(対象文字列から算出したチェックサムと一致する)')
console.log(new_check_sum)
console.log('')
console.log('Base58デコードした文字列')
console.log(bs58_decode_data)
console.log('')