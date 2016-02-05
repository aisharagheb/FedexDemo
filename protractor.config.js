var browsers = {
    firefox: {
        name: 'Firefox',
        browserName: 'firefox'
    },
    chrome: {
        name: 'Chrome',
        browserName: 'chrome'
    }
};


// An example configuration file.
exports.config = {
    baseUrl: 'http://localhost:8000',

    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',


    //sets window size to 1600x1000 at the start of each test
    onPrepare: function() {
        browser.manage().window().setSize(1600,1000);
    },

    // Capabilities to be passed to the webdriver instance.
    capabilities: browsers.chrome,

    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: [
        './tests/**/*.test.js'
    ],

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true // Use colors in the command line report.
    }
};