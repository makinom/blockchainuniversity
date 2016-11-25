# メモ

## 授業の資料
https://docs.google.com/presentation/d/1X4Xdvq_Ozs3HeQO36TCVvgJmMEfFE3d_ALBQ4xNesIY/edit#slide=id.g15ca291901_0_166

## Wallet Import Format
https://en.bitcoin.it/wiki/Wallet_import_format

## 秘密鍵、WIFなどの変換フォーム
http://gobittest.appspot.com/PrivateKey

## 楕円曲線を使って秘密鍵作成

### 秘密鍵の作成
```
openssl ecparam -genkey -name secp256k1 -out secp256k1.pem
```

### 秘密鍵と公開鍵を表示
```
openssl ec -in secp256k1.pem -noout -text
```
`priv:` と `pub:` の 値で`:`を取り除く。  
`priv:` は先頭の `00` も取り除く。  

