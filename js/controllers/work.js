define(['./module', 'jquery', 'utilities', 'TweenMax'], function (controllers, $, Utilities, TweenMax) {
    controllers.controller('WorksServices', function ($scope, worksServices, $routeParams,
                                                      $timeout, reloadPageInterface, Menu, menuInterface) {
        $scope.menu = Menu.query(); // TODO: menu powinno być globalne - obecnie jest wczytywane 2 razy

        $scope.menuInterface = menuInterface;

        $scope.changeFolio = function(dir) {
            var menuFolio = $scope.menu[1].menuFolio;
            var ind = _.indexOf(menuFolio, app.route[1]);
            var link;
            if (menuFolio[ind + dir]) {
                link = menuFolio[ind + dir]
            } else if (dir == "1") {
                link = _.first(menuFolio)
            } else if (dir == "-1") {
                link = _.last(menuFolio)
            }
            menuInterface.goToUrl('/folio/' + link, 1);
        }

        $scope.work = worksServices.get({workId: $routeParams.workId}, function(work) {
            $scope.update = function() {
                return $scope.height;
            }
            $scope.$watch($scope.update, function(a, b) {
                if (a) {
                    updateFolioPosition();
                    reloadPageInterface.updateMenuPosition($('.folio-desc-box'));
                }
            })
            $timeout(function(){
                updateFolioPosition();
                reloadPageInterface.updateMenuPosition($('.folio-desc-box'));
                reloadPageInterface.reloadPageAnimation($('.anim > *'), 1);
                Utilities.markText($('.desc'));
                Utilities.markText($('.techno'));
            }, 10)
        });

        function updateFolioPosition() {
            TweenMax.to($('.img-folio'), 0, {top: ($(window).height() / 2) - $('.img-folio').height() / 2});
            TweenMax.to($('.folio-desc-box'), 0, {top: ($(window).height() / 2) - $('.folio-desc-box').height() / 2});
        }
        Utilities.setDescription("Kilka stron które popełniłem");
    });
});
