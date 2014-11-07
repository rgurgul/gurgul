exports.config = {
    specs: [
        './e2e/**/*.spec.js'
    ],

    baseUrl: 'http://localhost:3333',

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        isVerbose: false,
        includeStackTrace: false
    }

};