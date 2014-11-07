define(['./module'], function (controllers) {
    controllers.controller('mobileMenu', function($scope) {
        $scope.showMenu = function() {
            $('.menu-item-box').not('.mobile').show();
        }
    })
});
