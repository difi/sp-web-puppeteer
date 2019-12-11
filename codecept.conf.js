exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url :'https://sp-web-test-test1.azurewebsites.net/',
      waitForNavigation:  [ "domcontentloaded", "networkidle0" ],
      waitForAction: 10000,
      chrome:{
        args: ['--no-sandbox']
      }
    }
  },
  
  mocha: {
    reporterOptions: {
      'mocha-junit-reporter': {
        stdout: './output/console.log',
        options: {
          mochaFile: './output/result.xml',
          testsuitesTitle: 'CodeceptJS Tests',
          attachments: true
        },
        attachments: true //add screenshot for a failed test
      },
      'codeceptjs-cli-reporter': {
        stdout: '-',
        options: {
          steps: true,
        },
      },
    },
  },
  
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  name: 'webdriverpuppeteer'
}
