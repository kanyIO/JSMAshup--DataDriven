// to install package.json on project use  (npm init -f) in terminal.running npm init will run you through package. json set up
// to install webdriver use npm run on any of the script comands in package.json.  e.g npm run webdriver-update / npm run protractor ..
//chromeDriver:'../node_modules/chromedriver/bin/chromedriver',
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
framework:'jasmine',

//specs: ['Chainlocators.js']  
//noGlobals: true,
specs: ['ElementDatadriven.js'],
onPrepare: function() {
//browser.driver.manager().window().maximize();
    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: 'target/screenshots'
      })
    );
}


  };




    /* When selenium hangs, Kill server using: kill -9 $(lsof -ti tcp:4444)  
    change selenium port:  webdriver-manager start --seleniumPort 12345    >> Test new port: http://localhost:12345/
    change selenium address: seleniumServerJar: "Users/melissakanyi/.nvm/versions/node/v12.1.0/lib/node_modules/webdriver-manager⁩/selenium⁩/selenium-server-standalone-3.141.59.jar"
    perform (webdriver-manager update) then start (webdriver-manager start)
    run app by either node x.js or protractur configuration.js
    */
   //chromeDriver: './node_modules/chromedriver/lib/chromedriver',
   //seleniumAddress: 'http://localhost:4444/wd/hub',
  // seleniumAddress: 'http://127.0.0.1:4444/wd/hub',