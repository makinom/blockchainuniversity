const http    = require('http')
const bitcore = require('bitcore-lib')
const Block   = bitcore.Block;

//const URL = 'https://api.blockcypher.com/v1/btc/main/txs/94a9d8063b5865d57d710da73f91d855a1e590690e77927b428ba220b6a920a9';
const URL = 'http://api.blockcypher.com/v1/btc/main/txs/94a9d8063b5865d57d710da73f91d855a1e590690e77927b428ba220b6a920a9?includeHex=true';

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

http.get(URL, (res) => {
  var body = '';

  res.on('data', (chunk) => {
      body += chunk;
  });

  res.on('end', (res) => {
      res = JSON.parse(body);
      
      console.log('取引ハッシュ(LE)')
      console.log(res.hash)
      console.log('取引ハッシュ')
      console.log(swap(res.hash))
      
      console.log('')
      
      console.log('ブロックハッシュ(LE)')
      console.log(res.block_hash)
      console.log('ブロックハッシュ')
      console.log(swap(res.block_hash))
      
      // TODO::前のブロックデータとか使ってのハッシュの生成とか検証
  });
}).on('error', (e) => {
  console.log(e.message); //エラー時
});