const crypto = require('crypto')

var data = "Blockchain Daigakko"

var i = 0
while(true) {
  var add_data = data + i.toString()
  var sha256 = crypto.createHash('sha256').update(add_data).digest('hex')
  if ( sha256.slice(0,1) == '0' ) {
    console.log('i:' + i)
    console.log('Hash:' + sha256)
    break
  }
  i++;
}