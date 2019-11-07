exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url :'https://sp-web-test-test1.azurewebsites.net/',
      waitForNavigation:  [ "domcontentloaded", "networkidle0" ],
      waitForAction: 5000,
      chrome:{
        args: ['--no-sandbox']
      }
    }
  },
  plugins: {
    allure: {
      enabled: 'true'
  }
},  
mocha: {
  reporterOptions: {
      reportDir: 'output'
  }
},
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  name: 'webdriverpuppeteer'
}
