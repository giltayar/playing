const rejectPromiseAfter = ms => new Promise((resolve, reject) => setTimeout(() => reject(new Error('fail')), ms))
const resolvePromiseAfter = ms => new Promise((resolve, reject) => setTimeout(() => resolve(), ms))

Promise.race([rejectPromiseAfter(500), resolvePromiseAfter(1000)])
  .then(() => 'resolved', () => 'rejected')
  .then(console.log.bind(console))
