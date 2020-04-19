const listOfBuffers = []
setInterval(() => {
  listOfBuffers.push(Buffer.alloc(1024 * 1024 * 100, 'x'))
  // listOfBuffers.push('a'.padEnd(1024 * 1024 * 100, 'x'))
  if (listOfBuffers.length >= 6) listOfBuffers.shift()
  for (const b of listOfBuffers) {
    for (let ch = 0; ch < b.length; ch += 100)
      b[ch] = 'b'
  }
  console.log(Math.round(process.memoryUsage().rss / (1024 * 1024)), Math.round(process.memoryUsage().heapUsed / (1024 * 1024)), Math.round(process.memoryUsage().heapTotal/ (1024 * 1024)))
}, 1000)