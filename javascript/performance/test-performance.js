const { performance } = require('perf_hooks');

function sum3Options(options) {
  return options.a + options.b + options.c
}

function sum3Parameters(a, b, c) {
  return a + b + c
}

function sum3Destructuring({a, b, c}) {
  return a + b + c
}
let count = 10000000000
let x = 0
performance.mark('sum3OptionsStart')
for (let i = 0; i < count; ++i) {
  x += sum3Options({a: 1, b: 2, c: 3})
}
performance.mark('sum3OptionsEnd')
performance.measure('options', 'sum3OptionsStart', 'sum3OptionsEnd')
console.log('options:', performance.getEntriesByName('options')[0].duration)

x = 0
performance.mark('sum3ParametersStart')
for (let i = 0; i < count; ++i) {
  x += sum3Parameters(1, 2, 3)
}
performance.mark('sum3ParametersEnd')
performance.measure('parameters', 'sum3ParametersStart', 'sum3ParametersEnd')
console.log('parameters:', performance.getEntriesByName('parameters')[0].duration)

x = 0
performance.mark('sum3DestructuringStart')
for (let i = 0; i < count; ++i) {
  x += sum3Destructuring({a: 1, b: 2, c: 3})
}
performance.mark('sum3DestructuringEnd')
performance.measure('destructuring', 'sum3DestructuringStart', 'sum3DestructuringEnd')
console.log('destructuring:', performance.getEntriesByName('destructuring')[0].duration)

x = 0
const obj = {a: 1, b: 1, c: 1}
performance.mark('sum3DestructuringWithObjectStart')
for (let i = 0; i < count; ++i) {
  x += sum3Destructuring(obj)
}
performance.mark('sum3DestructuringWithObjectEnd')
performance.measure('destructuringWithObject', 'sum3DestructuringWithObjectStart', 'sum3DestructuringWithObjectEnd')
console.log('destructuring with object:', performance.getEntriesByName('destructuringWithObject')[0].duration)

/**
 * Would never have guessed that passing parameters via options has the same performance as passing parameters regularly: https://jsperf.com/parameter-destructuring. Good! I can continue to use this pattern with destructuring to make my code clearer. #javascript #V8
 */