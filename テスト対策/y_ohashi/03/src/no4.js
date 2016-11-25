const http   = require('http')
const sha256 = require('sha256')

// txidsが4つのURL
const URL = 'http://api.blockcypher.com/v1/btc/main/blocks/00000000000198ff33e35076cbee64ae854e07992d6c7b07b3a53e30ac35995f';

// txidsが5つのURL
//const URL = 'http://api.blockcypher.com/v1/btc/main/blocks/000000000012b41eee8dc816770067f5470335aca12869a811dddaf4ff2cc13f'

// txidsが486このURL
//const URL = 'http://api.blockcypher.com/v1/btc/main/blocks/000000000000016381f5737f1357ed088cac14bc3b763077d778db4cabefdd5b?limit=500'

// txidsが275このURL
//const URL = 'http://api.blockcypher.com/v1/btc/main/blocks/00000000000001e851614e9e673562025cdf0ca3caa530394a2a7cdc0a7918b0?limit=300'


/**
 * 文字列を2文字ごとに区切り逆順に並び替える
 */
function swap(str) {
  var a = []
  while( str.length > 0 ) {
    a.push(str.substring(str.length-2))
    str = str.substring(0,str.length-2)
  }
  return a.join('')
}

/**
 * 配列が奇数の場合に一番最後の要素をコピーして偶数にする
 */
function arrayToEvenNumber(array) {
  if( array.length % 2 != 0 ) {
    array.push(array[array.length -1])
  }
  return array
}

http.get(URL, (res) => {
  var body = '';
  
  res.on('data', (chunk) => {
    body += chunk;
  });

  res.on('end', (res) => {
    
    res = JSON.parse(body);
    
    // txidsのハッシュを逆順に変換する
    // http://api.blockcypher.com/v1/btc/main/blocks/00000000000198ff33e35076cbee64ae854e07992d6c7b07b3a53e30ac35995f
    // 上記ページなどで表示されているハッシュはリトルエンディアンで表示されているため
    var swap_txids = []
    res.txids.forEach(function(txid) {
      swap_txids.push(swap(txid))
    });
    
    swap_txids = arrayToEvenNumber(swap_txids)
    
    // マークルツリーを計算する
    var hash1 = ''
    var hash2 = ''
    var new_txids = []
    while( swap_txids.length > 0 ) {
      hash1 = swap_txids[0]
      hash2 = swap_txids[1]
      new_txids.push(sha256.x2(Buffer(hash1 + hash2, 'hex')))
      swap_txids.splice(0, 2)
      if( swap_txids.length == 0 && new_txids.length > 1 ) {
        swap_txids = arrayToEvenNumber(new_txids)
        new_txids = []
      }
    }
    
    // ブロック高(何番目のブロックか)を出力する
    console.log('ブロック高(何番目のブロックか)')
    console.log(res.height)
    console.log('')
    
    // マークルツリーを出力する
    // 表示する場合はリトルエンディアンで表示するならわしの様子
    console.log('マークルツリー')
    console.log(swap(new_txids[0].toString('hex')))
    console.log('')
    
    // マークルツリーの1世代前のハッシュ
    // こちらは実質表示されるものではないのでリトルエンディアンにしない
    console.log('1世代前の2つのハッシュ')
    console.log(hash1)
    console.log(hash2)
    
  });
}).on('error', (e) => {
  console.log(e.message); //エラー時
});