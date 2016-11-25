const Address = require('fullnode/lib/address')
const BIP32   = require('fullnode/lib/bip32')
const BIP39   = require('fullnode/lib/bip39')
const Pubkey  = require('fullnode/lib/pubkey')
const Privkey = require('fullnode/lib/privkey')

const prevkey = 'da128a3458654d556e27c1cf73337b08c3ef6a8ec50dffd529a13f83e03f1ac5'

// 秘密鍵からニーモニックを英語と日本語で生成
var fromPrevKeyEn = BIP39.en().fromEntropy(Buffer(prevkey, 'hex'));
var fromPrevKeyJp = BIP39.jp().fromEntropy(Buffer(prevkey, 'hex'));

console.log(fromPrevKeyEn.mnemonic)
console.log(fromPrevKeyJp.mnemonic)

console.log()

// シードからBIP32に変換し、拡張公開鍵を表示
var bip32En = BIP32().fromSeed(new Buffer(fromPrevKeyEn.toSeed().toString('hex'), 'hex'), 'mainnet')
var bip32Jp = BIP32().fromSeed(new Buffer(fromPrevKeyJp.toSeed().toString('hex'), 'hex'), 'mainnet')

console.log(bip32En.toString())
console.log(bip32Jp.toString())

console.log()

// Custom Path が m/44'/0'/0'/0/0 のアドレス
var childEn   = bip32En.derive("m/44'/0'/0'/0/0")
var addressEn = Address().fromPubkey(childEn.pubkey)

var childJp   = bip32Jp.derive("m/44'/0'/0'/0/0")
var addressJp = Address().fromPubkey(childJp.pubkey)

console.log(addressEn.toString())
console.log(addressJp.toString())