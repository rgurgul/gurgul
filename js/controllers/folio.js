define(['./module', 'utilities'], function(controllers, Utilities) {
    controllers.controller('Folio', function($scope, reloadPageInterface, menuInterface) {
        $scope.menuInterface = menuInterface;

	    $scope.ref = ['img/folio/ref1.jpg',
	                  'img/folio/ref2.jpg'];

        $scope.$on('$viewContentLoaded', function() {
            reloadPageInterface.reloadPageAnimation($(".anim > *"), 1);
            reloadPageInterface.updateMenuPosition($('.in'));
        });
        Utilities.setDescription('portfolio');
    });
});
