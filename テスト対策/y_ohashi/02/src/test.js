const bitcore = require('bitcore-lib')

var Address = bitcore.Address;
var PrivateKey = bitcore.PrivateKey;
var Hash = bitcore.crypto.Hash;

var test = Address.fromString('1pR3XiKxiDViVMRMjjo1j76biBVfPVwiA');
console.log(test.toBuffer().toString('hex'))

var test2 = Hash.sha256ripemd160(test.toBuffer())
console.log(test2)