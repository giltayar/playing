console.log(require('./mode-esm/foo.json'))
console.log(require('./mode-esm/foo.js'))

import('./mode-esm/foo.mjs').then(console.log)