const fs = require('fs')

fs.readFile('source.txt', (_, content) => {
  fs.writeFile('target.txt', content, () => {
    console.log('done!')
  })
})
