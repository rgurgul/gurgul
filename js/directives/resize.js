define(['./module', 'jquery', 'utilities'], function(directives, $, Utilities) {
    directives.directive('resize', function($window, reloadPageInterface) {
        window.onresize = tellAngular;
        function tellAngular(scope) {
            var domElt = document.querySelector('body');
            scope = angular.element(domElt).scope();
            scope.$apply(function() {
                scope.width = window.innerWidth;
                scope.height = window.innerHeight;
            });
        }

        return function(scope) {
            scope.getWindowDimensions = function() {
                return { 'h': $window.innerHeight, 'w': $window.innerWidth };
            };
            scope.$watch(scope.getWindowDimensions, function(newValue) {
                scope.windowHeight = newValue.h;
                scope.windowWidth = newValue.w;
            }, true);
            angular.element($window).bind('resize', function() {
                scope.$apply();
                var menuMain = $('.menu-main');
                if (menuMain.css('display') == "block") {
                    if(Utilities.isMobile()) {
                        menuMain.css('left', $(window).width() / 2 - parseInt($('.menu-item-box').css('padding-left')) / 2);
                        menuMain.css('top', 95);
                    }
                    reloadPageInterface.updateMenuPosition(app.menuPositionObj);
                }
            });
        }
    })
});
