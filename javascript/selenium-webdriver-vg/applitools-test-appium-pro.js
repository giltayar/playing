// This version of the applitools Visual Grid tests is modified to run against the publically hosted appiumpro.com instead of running it locally.
//
// npm install chromedriver selenium-webdriver @applitools/eyes-selenium lodash colors
//
// set environment var APPLITOOLS_API_KEY

const colors = require('colors');
const _ = require('lodash');
const chromedriver = require('chromedriver');
const {Builder, Capabilities, By} = require('selenium-webdriver');
const {Eyes, Target, ConsoleLogHandler, SeleniumConfiguration, BrowserType} = require('@applitools/eyes-selenium')

console.log('starting applitools visual site verification')


let driver, eyes;
let applitoolsResults = [];

async function run() {
  await setup()

  console.log('check homepage');
  await driver.get(`http://appiumpro.com`);
  eyes = await openEyes('check homepage');
  // await eyes.check('Homepage', Target.window().fully());
  // closeEyesAndRecordResults(eyes)

  console.log('check about page')
  await driver.get(`http://appiumpro.com/about`);
  // eyes = await openEyes('check about page');
  // await eyes.check('About', Target.window().fully());
  // closeEyesAndRecordResults(eyes)

  console.log('check contact page')
  await driver.get(`http://appiumpro.com/contact`);
  // eyes = await openEyes('check contact page');
  // await eyes.check('Contact', Target.window().fully());
  // closeEyesAndRecordResults(eyes)

  console.log('check editions')
  let editionList = _.range(1, 20);
  for (let editionNum of editionList) {

    // skip to just one in ten editions
  //  if (editionNum % 10 == 0) {

      console.log(`check edition ${editionNum} - site`)
      await driver.get(`http://appiumpro.com/editions/${editionNum}`);
      // eyes = await openEyes(`check edition ${editionNum} - site`);
      // await eyes.check(`edition ${editionNum} - site`, Target.window().fully());
      // closeEyesAndRecordResults(eyes)

      console.log(`check edition ${editionNum} - newsletter`)
      await driver.get(`http://appiumpro.com/newsletter/${editionNum}`);
      // eyes = await openEyes(`check edition ${editionNum} - newsletter`);
      // await eyes.check(`edition ${editionNum} - newsletter`, Target.window().fully());
      //closeEyesAndRecordResults(eyes)
      //    }
  };

  await closeEyesAndRecordResults(eyes)

  await teardown();
};

run()

async function setup () {
  // start chromedriver
  await chromedriver.start([], true);

  driver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();
};

async function openEyes(testname) {
  let eyes = new Eyes(true);
  eyes.setLogHandler(new ConsoleLogHandler(false));

  const configuration = new SeleniumConfiguration();
  configuration.concurrentSessions = 6;
  configuration.appName = 'Appium Pro - Published';
  configuration.testName = testname;
  configuration.addBrowser(1200, 800, BrowserType.FIREFOX);
  configuration.addBrowser(800, 600, BrowserType.FIREFOX);
  configuration.addBrowser(640, 1136, BrowserType.FIREFOX);
  configuration.addBrowser(1200, 800, BrowserType.CHROME);
  configuration.addBrowser(800, 600, BrowserType.CHROME);
  configuration.addBrowser(640, 1136, BrowserType.CHROME);
  eyes.setConfiguration(configuration);

  await eyes.open(driver);
  return eyes;
};

// we don't want errors to throw, because we want to await all the promises later using a Promise.all() all
// if one promise is rejected, we stop waiting for the rest.
async function closeEyesAndRecordResults (eyesClient) {
  await eyes.getRunner().getAllResults()
                    .then((results) => {
                      let displayBrowserResults = results.map((result) => {
                        return `${result._hostApp}${result._hostDisplaySize._width}x${result._hostDisplaySize._height}-${result._status == 'Passed' ? result._status.green : result._status.red}`;
                      });
                      console.log(`results received for ${results[0]._name}:\t\t ${displayBrowserResults.join(', ')}`);
                    })
                    .catch((results) => {
                      if (!results.length) {
                        console.log('got an error with no length')
                        console.log(results)
                      }
                      else {
                        let displayBrowserResults = results.map((result) => {
                          if (result._testResults) {
                            result = result._testResults;
                          }
                          return `${result._hostApp}${result._hostDisplaySize._width}x${result._hostDisplaySize._height}-${result._status == 'Passed' ? result._status.green : result._status.red}`;
                        });
                        console.log(`results received for ${results[0]._testResults ? results[0]._testResults._name : results[0]._name}:\t\t ${displayBrowserResults.join(', ')}`);
                      }
                    })
  // applitoolsResults.push(resultPromise);
}

async function teardown () {
  await driver.close();
  chromedriver.stop();

  console.log('waiting for applitools results');
  results = await Promise.all(applitoolsResults);
};

process.on('unhandledRejection', (reason, p) => {
  console.error(reason, 'Unhandled Rejection', JSON.stringify(p, null, 2));
})
