define(['./module', 'jquery', 'utilities'], function(services, $, Utilities) {
    services.factory('menuInterface', function(reloadPageInterface, $window) {
        var outer = {
            colorGrayThird: '#444',
            goToUrl: function(link, index) {
                var clicked = link.match(/(\w+)/g);
                // jezeli juz jestem na tej stronie, przerywam.
                if (app.route[0] === clicked[0] && app.route[1] === clicked[1]) {
                    return;
                }
                // set active btn
                $('.menu-item-box.active').removeClass('active');
                $('.menu-item-box.ind-' + index).addClass('active');

                var children = $('.anim > *').get().reverse();
                reloadPageInterface.reloadPageAnimation(children, 0, function() {
                    $window.location.href = '#' + link;
                });
            },
            menuOver: function(obj) {
                if (Utilities.isMobile() || inner.youAreHere(obj)) {
                    return
                }
                var btn = $('.' + obj.i.id);
                var spans = $('span', '.menu-item-box');

                spans.css('color', this.colorGrayThird); // wszystkie na czarno
                TweenMax.to($('span', btn), .5, {color: "white"}); // najechany na bialo

                inner.moveToken(btn.position().left, btn.width() + parseInt(btn.css('padding-left')) + 10, 0.1);
            },
            menuOut: function(obj) {
                if (Utilities.isMobile() || inner.youAreHere(obj)) {
                    return
                }
                var spans = $('span', '.menu-item-box:not(.active)');
                spans.css('color', this.colorGrayThird);
                TweenMax.killTweensOf(spans); // ubijam tween, ktory moze jeszcze trwac

                var active = $('.active');
                inner.moveToken(active.offset().left - $('.menu-main').offset().left,
                        active.width() + parseInt(active.css('padding-left')) + 10, 0.2, function() {
                        $('.menu-item-box.active span').css("color", "white"); // aktywny na bialo
                    })
            }
        };
        var inner = {
            youAreHere: function(that) {
                if (!_.isUndefined(that) && that.i) { // metoda została wywołana przez kliknięcie w menu
                    if ($('.' + that.i.id).hasClass('active')) { // wczesniej wybrany btn.
                        return true;
                    }
                }
            },
            moveToken: function(leftPosition, width, speed, callback) {
                var token = $('.token');
                TweenMax.killTweensOf(token);
                TweenMax.staggerTo(token, .3, {
                    left: leftPosition,
                    width: width}, speed, callback);
            }
        };
        return outer;
    })
});