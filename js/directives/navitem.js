define(['./module'], function(directives) {
    directives.directive('navitem', function($timeout, reloadPageInterface) {
        return {
            restrict: 'E',
            templateUrl: "tpl/menu-item.html",
            compile: function(scope, element) {
                return function(scope, element) {
                    $timeout(function() {
                        var menu = $('li', '.menu-ul');
                        if (scope.$last) {
                            reloadPageInterface.reloadPageAnimation($('.anim > *'), 1);
                            menu.css('visibility', 'visible');
                            app.menuLoaded = true;
                        }
                    }, 1)
                }
            }
        }
    });

});
