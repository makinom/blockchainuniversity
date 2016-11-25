const bitcore = require('bitcore-lib')
const bs58    = require('bs58')
const sha256  = require('sha256')
const bigi    = require('bigi')

// 任意の文字列
var data = "My name is Yuta Ohashi"

// 任意の秘密鍵
//var priv_key = "da128a3458654d556e27c1cf73337b08c3ef6a8ec50dffd529a13f83e03f1ac5"
var priv_key = "da128a3458654d556e27c1cf73337b08c3ef6a8ec50dffd529a13f83e03f1ac5"
console.log('任意の秘密鍵')
console.log(priv_key)
console.log('')

// 任意の文字列をバイナリデータ（バイト列）に変換
var binary_priv_key = Buffer(priv_key, 'hex')
console.log('任意の秘密鍵のバイナリデータ（バイト列）')
console.log(binary_priv_key)
console.log('')

// バイト列の先頭に0x80を追加
var extended_key = Buffer.concat([Buffer('80','hex'), binary_priv_key, Buffer('01','hex')])
console.log('拡張した秘密鍵（任意の秘密鍵のバイト列の先頭に0x80を追加）')
console.log(extended_key.toString('hex'))
console.log('')

// バイト列のデータをsha256で2回ハッシュする
var sha256x2_data = sha256.x2(Buffer(extended_key, 'hex'), { asBytes:true })
console.log('バイト列のデータをsha256で2回ハッシュした値')
console.log(Buffer(sha256x2_data).toString('hex'))
console.log('')

// チェックサムの値（バイト列のデータをsha256で2回ハッシュした値の先頭4バイト）
var checksum = Buffer(sha256x2_data).slice(0, 4)
console.log('チェックサムの値')
console.log(Buffer(checksum).toString('hex'))
console.log('')

// 拡張した秘密鍵の末尾にチェックサムを追加した値
var extended_key_checksum = Buffer.concat([extended_key, checksum])
console.log('拡張した秘密鍵の末尾にチェックサムを追加した値')
console.log(Buffer(extended_key_checksum).toString('hex'))
console.log('')

// 最終的なWIFされた秘密鍵
var wif_priv_key = bs58.encode(extended_key_checksum)
console.log('最終的なWIFされた秘密鍵')
console.log(wif_priv_key)
console.log('')

// 秘密鍵から公開鍵（圧縮）を生成
var pub_key = bitcore.PublicKey.fromPrivateKey(bitcore.PrivateKey.fromWIF(wif_priv_key));
console.log('公開鍵（圧縮）')
console.log(pub_key.toString())
console.log('')

console.log('公開鍵（アドレス）')
console.log(pub_key.toAddress().toString())
console.log('')

// 秘密鍵と任意の文字列の署名を作成
var ecdsa = new bitcore.crypto.ECDSA();
ecdsa.hashbuf = bitcore.crypto.Hash.sha256(new Buffer(data));
ecdsa.privkey = new bitcore.PrivateKey(bitcore.crypto.BN.fromBuffer(
  new Buffer(priv_key, 'hex')
));
ecdsa.privkey2pubkey()
ecdsa.sign()
console.log('秘密鍵と任意の文字列の署名')
console.log(ecdsa.sig.toString())
console.log('')

// 署名の検証
var verify = ecdsa.verify()
console.log('署名の検証')
console.log(verify.verified)