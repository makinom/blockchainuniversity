const data = [0, 1, -1, 5, -5, 5000, -5000]

/**
 * 1.ビッグエンディアン（符号付絶対値）
 */
function getNo1( num ){
  var minus = false
  if( num < 0 ) {
    minus = true
    num = num * -1
  }
  num = num.toString(2)
  var d = ('000000000000000' + num ).slice( -16 )
  if(minus) {
    d = '1' + d.substr( 1 );
  }
  return separate(d.toString(2))
}

/**
 * 2.ビッグエンディアン（2の補数）
 */
function getNo2( num ){
  var minus = false
  if( num < 0 ) {
    minus = true
    num = 65536 - (num * -1)
  }
  num = num.toString(2)
  var d = ('000000000000000' + num ).slice( -16 )
  if(minus) {
    d = '1' + d.substr( 1 );
  }
  return separate(d.toString(2))
}

/**
 * 3.リトルエンディアン（符号付絶対値）
 */
function getNo3( num ){
  num = getNo1(num)
  var d2 = num.split(' ')
  return d2[1] + ' ' + d2[0]
}

/**
 * 4.リトルエンディアン（2の補数）
 */
function getNo4( num ){
  num = getNo2(num)
  var d2 = num.split(' ')
  return d2[1] + ' ' + d2[0]
}

function separate(num){
  num = String(num);
  var len = num.length;
  if(len > 8){
    return separate(num.substring(0,len-8))+' '+num.substring(len-8);
  } else {
    return num;
  }
}

var no1_answer = ''
var no2_answer = ''
var no3_answer = ''
var no4_answer = ''
data.forEach(function(item) {
  console.log('Target Num: ' + item);
  console.log('1: ' + getNo1(item))
  console.log('2: ' + getNo2(item))
  console.log('3: ' + getNo3(item))
  console.log('4: ' + getNo4(item))
  console.log('')
  no1_answer = no1_answer + getNo1(item) + "\n"
  no2_answer = no2_answer + getNo2(item) + "\n"
  no3_answer = no3_answer + getNo3(item) + "\n"
  no4_answer = no4_answer + getNo4(item) + "\n"
});

console.log('1.ビッグエンディアン（符号付絶対値）')
console.log(no1_answer)
console.log('2.ビッグエンディアン（2の補数）')
console.log(no2_answer)
console.log('3.リトルエンディアン（符号付絶対値）')
console.log(no3_answer)
console.log('4.リトルエンディアン（2の補数）')
console.log(no4_answer)