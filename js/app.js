define([
    'angular',
    'angular-route',
    'angular-resource',
    './controllers/index',
    './directives/index',
    './filters/index',
    './services/index',
    './factory/index',
    'font!google,families:[Dosis::latin-ext,Dosis:300,Wire+One]'
], function (angular) {

    return angular.module('app', [
        'app.controllers',
        'app.directives',
        'app.filters',
        'app.services',
        'app.factory',
        'ngRoute'
    ],
    function(){})
});
