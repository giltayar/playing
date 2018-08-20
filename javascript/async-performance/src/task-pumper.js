'use strict'
const {range, presult} = require('@applitools/functional-commons')
const {mean, percentile} = require('stats-lite')
const throatFactory = require('throat')

async function taskPumper({task, count, runs, taskName, verbose: verboseLevel, throttle}) {
  const throat = throttle ? throatFactory(throttle) : f => f()

  for (const runIndex of range(1, runs + 1)) {
    const runResults = await Promise.all(
      range(1, count + 1).map(async taskIndex => {
        const start = Date.now()
        const [err, result] = await presult(throat(() => task({runIndex, taskIndex})))
        const duration = Date.now() - start
        if (verboseLevel == 2 || (verboseLevel == 1 && err)) {
          console.log(
            '%s #%d.%d duration: %s, %s: %s',
            taskName,
            runIndex,
            taskIndex,
            duration,
            err ? 'err' : 'res',
            err || result,
          )
        }

        return {err, result, duration, runIndex, taskIndex}
      }),
    )

    const durations = runResults.map(({duration}) => duration)
    const numberOfErrors = runResults.filter(({err}) => !!err).length

    console.log(
      '%s #%d, count: %d, mean: %d, 90th: %d, 99th: %d, errs: %d',
      taskName,
      runIndex,
      count,
      mean(durations).toFixed(2),
      percentile(durations, 90),
      percentile(durations, 99),
      ((100 * numberOfErrors) / count).toFixed(),
    )
  }
}

module.exports = taskPumper
