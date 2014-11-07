define(['./module', 'utilities'], function(directives, Utilities) {
    directives.directive('about', function(reloadPageInterface) {
    return {
        restrict: 'E',
        templateUrl: "tpl/about-tpl.html",
        compile: function(scope, element) {
            return function(scope) {
                reloadPageInterface.reloadPageAnimation($('.anim > *'), 1);

                if (Utilities.isMobile()) {
                    return
                }
                $(".item-desc").eq(0).slideDown(200, function(){
                    reloadPageInterface.updateMenuPosition($('.in'));
                });
                $(".btn-box").addClass('plus');
                $(".btn-box").eq(0).removeClass('plus').addClass('minus');
                $(".item-box").click(function() {
                    if ($(".item-desc", this).is(":hidden")) {
                        $(".item-desc").slideUp();
                        $(".btn-box").removeClass('minus').addClass('plus');
                    } else {
                        return;
                    }
                    $(".item-desc", this).slideToggle(function(){
                        reloadPageInterface.updateMenuPosition($('.in'));
                    });
                    $(".btn-box", this).removeClass('plus').addClass('minus');
                })
                Utilities.setDescription("Nazywam się Robert Gurgul. Specjalizuje się w programowaniu aplikacji internetowych typu Single Page Web Applications.")
            }
        }
    }
    })
});
