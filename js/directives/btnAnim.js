define(['./module', 'utilities'], function(directives, Utilities) {
    directives.directive('btnAnimBasic', function() {
        return{
            restrict: 'A',
            scope: {
                title: "@"
            },
            template: "<div class=\"no-select anim-box\">\n  <div style='width: 0px'>{{title}}</div>\n</div>",
            link: function(scope, element){
                $(".anim-box", element).append('<div>' + scope.title + '</div>');
                var padding = parseInt($(".anim-box", element).css('padding-left'));
                $(element).css('width', $(".anim-box", element).width() + padding * 2);
            },
            controller: function() {
                this.go = function(el, value) {
                    TweenMax.killTweensOf(el);
                    TweenMax.to(el, .25, {top: value});
            }
            }
        }
    })

    directives.directive('btnAnimNormal', function() {
        return{
            restrict: 'A',
            require: "btnAnimBasic",
            link: function(scope, element, attrs, btnAnimBasicCtrl) {
                if (Utilities.isMobile()) {
                    return {};
                }
                var el = $('.anim-box', element);
                element.bind('mouseover', function(evt) {
                    btnAnimBasicCtrl.go(el, -2);
                })
                element.bind('mouseout', function(evt) {
                    btnAnimBasicCtrl.go(el, -(parseInt($('div', el).css('line-height')) + 2));
                })
                // zapobiega wykonaniu mouse over z opóznieniem kiedy user poruszy myszką
                element.bind('click', function() {
                    element.triggerHandler('mouseout');
                })
            }
        }
    })

    directives.directive('btnAnimAccording', function() {
        return{
            restrict: 'A',
            require: "btnAnimBasic",
            link: function(scope, element, attrs, btnAnimBasicCtrl) {
                if (Utilities.isMobile()) {
                    return {};
                }
                var el = $('.anim-box', element);
                //console.log('h', $('div:first', el).css('line-height'))
                element.bind('mouseover', function(evt) {
                    if ($(".item-desc", element.parent().parent()).is(":hidden")) {
                        btnAnimBasicCtrl.go(el, -2);
                    }
                })
                element.bind('mouseout', function(evt) {
                    btnAnimBasicCtrl.go(el, -(parseInt($('div', el).css('line-height')) + 2))
                })

                // zapobiega wykonaniu mouse over z opóznieniem kiedy user poruszy myszką
                element.bind('click', function() {
                    if ($(".item-desc", element.parent().parent()).is(":hidden")) { // don't move when is open
                        element.triggerHandler('mouseout');
                    }
                })
            }
        }
    })
});
