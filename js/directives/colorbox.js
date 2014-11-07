define(['./module', 'colorbox'], function(directives, colorbox) {
    directives.directive('colorbox', function(reloadPageInterface) {
	    return {
		    restrict: 'AC',

		    link: function (scope, element, attrs) {

			    if (scope.$last) {
				    console.log(angular.fromJson(JSON.stringify(attrs.colorbox)), $('.group1').length);
				    $('.group1').colorbox({rel:'group1',transition:'fade'});
				    reloadPageInterface.reloadPageAnimation($(".anim > *"), 1);
			    }
		    }
	    };
    })
});
