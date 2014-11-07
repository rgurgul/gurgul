define(['./app', 'jquery', 'utilities', 'analitics'], function(application, $, Utilities) {

    return application.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/about', {templateUrl: 'tpl/about.html'}).when('/folio',
            {templateUrl: 'tpl/folio.html', controller: "Folio"}).when('/folio/:workId',
            {templateUrl: 'tpl/work-detail.html', controller: "WorksServices"}).when('/contact',
            {templateUrl: 'tpl/contact.html', controller: "Contact"}).when('/mobile',
            {templateUrl: 'tpl/galaxy.html', controller: "Galaxy"}).otherwise({redirectTo: '/about'});
    }]).run(function($rootScope, menuInterface, reloadPageInterface) {
        app.route = new Array(2);
        $rootScope.$on('$routeChangeSuccess', function($route, $routeParams) {

            if (reloadPageInterface.status
                == 1
                && app.route[0]
                && _.isFunction(reloadPageInterface.pagesMethods[app.route[0]])) {
                reloadPageInterface.pagesMethods[app.route[0]](false); // sytuacja history
            }

            if ($routeParams.params.workId) {
                app.route[0] = $routeParams.$$route.originalPath.match((/\w+/))[0];
                app.route[1] = $routeParams.params.workId;
            } else {
                try {
                    app.route[0] = $routeParams.$$route.originalPath.replace('/', '');
                    app.route[1] = undefined;
                } catch (err) {
                }
            }
            $rootScope.title = app.route[0];
            $('.menu-item-box.active').removeClass('active');//remove active btn always when route change

            Utilities.waitFor(['.menu-item-box.' + app.route[0]], function() {
                $('.menu-item-box.' + app.route[0]).addClass('active');//set active btn - potrzebny kiedy wchodzimy przez f5
                if (Utilities.isMobile()) {
                    return;
                }
                Utilities.waitFor(['menuTweenFinish', '.active'], function() {
                    menuInterface.menuOut();
                    TweenMax.to($('.menu-main'), .1, { opacity: 1 });
                })
            })
        })
    })
});
