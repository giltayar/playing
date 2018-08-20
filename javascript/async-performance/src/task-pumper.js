'use strict'
const {range, presult} = require('@applitools/functional-commons')
const {mean, percentile} = require('stats-lite')

async function taskPumper({task, count, runs, taskName}) {
  for (const runIndex of range(1, runs + 1)) {
    const runResults = await Promise.all(
      range(1, count + 1).map(async taskIndex => {
        const start = Date.now()
        const [err, result] = await presult(task({runIndex, taskIndex}))

        return {err, result, duration: Date.now() - start, runIndex, taskIndex}
      }),
    )

    const durations = runResults.map(({duration}) => duration)
    const numberOfErrors = runResults.filter(({err}) => !!err).length

    console.log(
      '%s #%d, count: %d, mean: %d, 90th: %d, 99th: %d, errs: %d',
      taskName,
      runIndex,
      count,
      mean(durations),
      percentile(durations, 90),
      percentile(durations, 99),
      (100 * numberOfErrors) / count,
    )
  }
}

module.exports = taskPumper
