const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './steps/*_test.js',
  output: './output',
  helpers: {
    Appium: {
      appiumV2: true,
      //host: 'localhost',
      host: '127.0.0.1',
      port: 4723,
      path: '/',
      app: 'C:/Users/maxia/Documents/bibliaSagradaCodeceptAutomacao/apk/biblia.apk',
      platform: 'Android',
      desiredCapabilities: {
        'appium:automationName': 'UiAutomator2',
        'appium:appPackage': 'devandroid.muller.bibliasagrada',
        'appium:appActivity': 'view.SplashActivity',
        'appium:autoGrantPermissions': true,
        'appium:fullReset': false,
        'appium:noReset': true,
        //'appium:deviceName': 'Redmi Note 13',
        'appium:deviceName': 'emulator-5554',
        'appium:platformVersion': '8',
        'appium:enforceAppInstall': false,
        'appium:platformName': 'Android',
        'appium:forceAppLaunch': true,
      }
    }

    //appium antigo
    /*tests: './steps/*_test.js',
  output: './output',
  helpers: {
    Appium: {
      app: 'C:/Users/maxia/Documents/bibliaSagradaCodeceptAutomacao/apk/biblia.apk',
      platform: 'Android',
      desiredCapabilities: {
        automationName: 'UiAutomator2',
        appPackage: 'devandroid.muller.bibliasagrada',
        appActivity: 'view.SplashActivity',
        autoGrantPermissions: true,
        fullReset: false,
        noReset: true,
        deviceName: 'Redmi Note 13',
        platformVersion: '14',
        enforceAppInstall: false,
        platformName: 'Android',
        forceAppLaunch: true,
      }
    }*/

  },
  include: {
    Eu: './steps_file.js',
    "elementosTela_page": "./pages/elementosTela_page.js",

    "elementosDeTela_page": "./pages/elementosDeTela_page.js",
  },
  name: 'bibliaSagradaCodecept',
  translation: 'pt-BR'
}