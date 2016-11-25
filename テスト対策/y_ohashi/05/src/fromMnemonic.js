const Address = require('fullnode/lib/address')
const BIP32   = require('fullnode/lib/bip32')
const BIP39   = require('fullnode/lib/bip39')
const Pubkey  = require('fullnode/lib/pubkey')
const Privkey = require('fullnode/lib/privkey')

const phraseEn = 'sure nephew minimum radio feel primary review wealth sorry office tell bag discover relief deposit payment zone power hair lecture dignity buzz help plate'
const phraseJp = 'べにいろ　ちそう　だむる　にさんかたんそ　こもん　ともる　ねっしん　りこう　ひらく　つごう　ほっさ　いわば　くらべる　にんめい　くげん　てまきずし　わらう　ととのえる　しゃうん　そせん　くのう　おうふく　しゅみ　とおく'

// ニーモニックからオブジェクトを生成
var fromMnemonicEn = BIP39.en().fromString(phraseEn);
var fromMnemonicJp = BIP39.jp().fromString(phraseJp);

// シードからBIP32に変換し、拡張公開鍵を表示
var bip32En = BIP32().fromSeed(new Buffer(fromMnemonicEn.toSeed().toString('hex'), 'hex'), 'mainnet')
var bip32Jp = BIP32().fromSeed(new Buffer(fromMnemonicJp.toSeed().toString('hex'), 'hex'), 'mainnet')

console.log(bip32En.toString())
console.log(bip32Jp.toString())

console.log()

// Custom Path が m/44'/0'/0'/0/0 のアドレス
var childEn   = bip32En.derive("m/44'/0'/0'/0/0")
var addressEn = Address().fromPubkey(childEn.pubkey)

var childJa   = bip32Jp.derive("m/44'/0'/0'/0/0")
var addressJa = Address().fromPubkey(childJa.pubkey)

console.log(addressEn.toString())
console.log(addressJa.toString())
