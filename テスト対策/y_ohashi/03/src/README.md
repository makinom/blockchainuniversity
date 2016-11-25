# メモ

## 授業の資料
https://docs.google.com/presentation/d/1K3lnauv54B0cbXB0RNP0qEv4Psmn85RIsD7QnTY_vNg/edit#slide=id.g167437cbbe_0_170

## Bitcoinのブロックを探す

### BlockExplorer
https://blockexplorer.com/

Bitcoinのブロックを検索することができるサイト。  

ヘッダーの「Blocks」をクリックしたあと、カレンダーのアイコンをクリックすると日付とかが指定できるのでそこで検索できる。  
検索窓からBlockIDとかで検索もできる様子。

### BlockCypher
https://www.blockcypher.com/

ブロックチェーンの情報が取得できるAPIを提供してくれているサイト。  
Bitcoin以外にもLitecoinとか5個くらい対応してるみたい。Ethereumとかはない。

https://live.blockcypher.com/  
↑のURLからブロックIDとかで検索して、「Advanced Details」→「API Call」と進むと、JSONのデータを返してくれるAPIにたどり着く。

* ブロック情報を取得するURL  
http://api.blockcypher.com/v1/btc/main/blocks/00000000000198ff33e35076cbee64ae854e07992d6c7b07b3a53e30ac35995f
* 取引情報を取得するURL  
https://api.blockcypher.com/v1/btc/main/txs/94a9d8063b5865d57d710da73f91d855a1e590690e77927b428ba220b6a920a9?limit=50&includeHex=true

アドレスとかでも検索できるみたい。（正確なのかわからないですが、いくら受け取っていくら送ったかとか出る