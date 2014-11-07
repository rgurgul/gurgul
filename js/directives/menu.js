define(['./module'], function(directives) {
    directives.directive('nav', function() {
        return {
            restrict: 'E',
            templateUrl: "tpl/nav.html",
            compile: function(scope, element) {
                return function() {
                }
            }
        }
    });

});
