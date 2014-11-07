define(['./module', 'utilities', 'TweenMax'], function(services, Utilities, TweenMax) {
    services.factory('reloadPageInterface', function() {
        return {
            status: 1,
            reloadPageAnimation: function(children, visibleTarget, callback) {
	            Boolean(visibleTarget) ? $('.loading').fadeOut('slow') : $('.loading').fadeIn('slow');
                var self = this;
                if (children.length === 0) {
                    _.isFunction(callback) ? callback() : null;
                    return;
                }
                if (_.isFunction(this.pagesMethods[app.route[0]])) {
                    this.pagesMethods[app.route[0]](Boolean(visibleTarget));
                }
                var time = 1;
                var delay = time / children.length;
                TweenMax.staggerTo(children, time, {
                    opacity: visibleTarget, ease: Back.easeOut
                }, delay, function() {
                    self.status = visibleTarget;
                    _.isFunction(callback) ? callback() : null;
                })
            },
            updateMenuPosition: function(obj) {
                app.menuPositionObj = obj;
                if (Utilities.isMobile()) {
                    return
                }
                Utilities.waitFor([".menu-main", obj.selector], function() {
                    var menu = $(".menu-main");
                    TweenMax.to(menu, .5, {
                        left: parseInt($('.nav').width() + obj.width() + parseInt($('.content').css('padding-left'))
                            - menu.width() + 10),
                        top: parseInt(obj.offset().top - 30),
                        ease: Expo.easeOut, delay: 0, onComplete: function() {
                            app.menuTweenFinish = true;
                        }})
                });
            },
            pagesMethods: {
                contact: function(visible) {
                    var inner = {
                        before: function() {
                            $('body').append("<div id='map-canvas'>canvas</div>");
                            $('#map-canvas').fadeIn(1500);
                        },
                        after: function() {
                            $('#map-canvas').fadeOut(2000, function() {
                                $(this).remove();
                            });
                        }
                    };
                    Boolean(visible) ? inner.before() : inner.after();
                }
            }
        };
    });
});





