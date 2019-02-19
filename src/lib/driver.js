const webdriver = require('selenium-webdriver');
const chromeCapabilities=webdriver.Capabilities.chrome()
const chromeOptions = {
        'args': ['--disable-infobars', '--always-authorize-plugins=true']
};
chromeCapabilities.set('chromeOptions', chromeOptions);
const pref = new webdriver.logging.Preferences();
const driver =  new webdriver.Builder().withCapabilities(chromeCapabilities)
.setLoggingPrefs(pref).build();

export { driver }
