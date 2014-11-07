require.config({

    paths: {
        'angular': '../lib/angular/angular.min',
        'angular-route': '../lib/angular-route/angular-route.min',
        'angular-resource': '../lib/angular-resource/angular-resource.min',
        'domReady': '../lib/requirejs-domready/domReady',
        'jquery': '../lib/jquery-1.11.1.min',
        'colorbox': '../lib/jquery.colorbox',
        'utilities': '../js/utils/utility',
        'analitics': '../js/utils/analitics',
        'underscore': '../lib/underscore-min',
        'modernizr': '../lib/modernizr-latest',
        'TweenMax': '../lib/TweenMax.min',
        'async': '../lib/requirejs-plugins/src/async',
        'propertyParser' : '../lib/requirejs-plugins/src/propertyParser',
        'font': '../lib/requirejs-plugins/src/font'
    },

    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular']
        },
        'angular-resource': {
            deps: ['angular']
        },
        'jquery': {
            deps: ["underscore", "modernizr"],
            exports: "jquery"
        },
	    'colorbox': {
		    deps: ["jquery"],
		    exports: "colorbox"
	    }
    },

    deps: [
        './bootstrap'
    ]
});
