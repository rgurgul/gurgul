define(['jquery'], function($) {

    var Utilities = {
        isMobile: function() {
            if (Modernizr.mq('only all and (max-width: 640px)')) {
                return true;
            }
        },
        waitFor: function(arr, callback) {
            var result = 0;
            if (_.isArray(arr)) {
                _.each(arr, function(obj) {
                    checkItem(obj);
                })
            } else {
                checkItem(arr);
            }
            if (result == arr.length) {
                callback();
            } else {
                setTimeout(function() {
                    Utilities.waitFor(arr, callback);
                }, 10)
            }
            function checkItem(obj) {
                if (/\./.test(obj)) {
                    if ($(obj).length && $(obj).length > 0) {
                        result++;
                    }
                } else {
                    //console.log(app[obj]);
                    //console.log('util', app)
                    if (app[obj] == true) {
                        result++;
                    }
                }
            }
        },
        markText: function(el) {
            var spans = el.find('span');
            var arr = [];
            for (var i = 0; i < spans.length; i++) {
                var texts = $(spans[i]).text().split(' ');
                arr[i] = [];
                for (var j = 0; j < texts.length; j++) {
                    arr[i].push('<span class="span-bg">' + texts[j] + '&nbsp;</span>');
                }
                $(spans[i]).html('')
                for (var k = 0; k < arr[i].length; k++) {
                    $(spans[i]).append(arr[i][k]);
                }
            }
        },
        sendData: function(userData) {
            var dfd = $.Deferred();
            var obj = $.extend(userData, {"_explicitType": "ContactFormVo", "title": "gurgul.info"})
            var data = JSON.stringify({
                "serviceName": "ContactFormService",
                "methodName": "sendMail",
                "parameters": [obj]
            });
            $.post("Php/?contentType=application/json", data, function() {
                dfd.resolve();
            }).fail(function() {
                    dfd.reject();
                });
            return dfd.promise();
        },
        setDescription: function(value) {
            $('html head meta[name=description]').attr("content", value);
        }
    };
    return Utilities;
})
