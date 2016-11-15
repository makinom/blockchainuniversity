/**
 * Created by m_makino on 16/11/15.
 */
var privateKey = require('fs').readFileSync(process.stdin.fd)
var Point = require('yours-bitcoin/lib/point')
var g = Point.getG()
var curvePt = Point.fromX(true, g.getX(privateKey))
console.log(curvePt)
//var curvePt = Point.fromX(true, privateKey)
//console.log(curvePt.encode())
