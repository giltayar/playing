import * as foo from './foo.mjs'
import * as foocjs from './foo.js'

console.log(foo, typeof foo, foo.foo)
console.log(foocjs, typeof foocjs, foo.foo)

// foo.bar = 'barvalue'


// a-module.js
import {aFunction, aValue} from './some-module.js'

aFunction(aValue)


// some-module.js

export function aFunction() {
  // ...
}

export const aValue = 42