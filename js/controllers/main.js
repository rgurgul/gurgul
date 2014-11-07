define(['./module', 'utilities'], function (controllers, Utilities) {
    controllers.controller('Main', function ($scope) {
        $scope.init = function() {
            $('body').click(function() {
                if (Utilities.isMobile()) {
                    $('.menu-item-box').not('.mobile').hide();
                }
            });
            if (!Modernizr.flexbox && !Modernizr.flexboxlegacy) {
                location.href = "http://gurgul.info/update";
            }
        }
    });
});
