define(['./module'], function(controllers) {
    controllers.controller('Menu', function($scope, Menu, menuInterface) {
        $scope.menuInterface = menuInterface;
        $scope.menu = Menu.query(
            function(data) {
            }, function() {
            });
    });
});
