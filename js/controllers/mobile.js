define(['./module', 'utilities'], function(controllers, Utilities) {
    controllers.controller('Galaxy', function($scope, reloadPageInterface) {
        $scope.$on('$viewContentLoaded', function() {
            reloadPageInterface.reloadPageAnimation($(".anim > *"), 1);
            reloadPageInterface.updateMenuPosition($('.a-tak'));
        });
        Utilities.setDescription($('.a-tak p').eq(0).text());
    });
});
