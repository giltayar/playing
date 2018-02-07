'use strict'
exports.a = 4

console.log('strict-script', this)
try {
  b = 4
  console.log(b)
} catch (err) {
  console.error(err)
}
