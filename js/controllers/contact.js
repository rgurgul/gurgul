define(['./module',
        'jquery',
        'utilities',
        'async!https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false',
        './files/roadAtlasStyles'],
	function(controllers, $, Utilities, maps, roadAtlasStyles) {
		controllers.controller('Contact', function($scope, reloadPageInterface) {
			$scope.$on('$viewContentLoaded', function() {
				reloadPageInterface.reloadPageAnimation($(".anim > *"), 1);
				reloadPageInterface.updateMenuPosition($('.in'));
				initMap();
			});
			Utilities.setDescription("Napisz do mnie");

			function initMap() {
				var map, centermap = new google.maps.LatLng(57.03787, -10.75000), mapOptions = {
					zoom: 4,
					center: centermap,
					panControl: false,
					zoomControl: false,
					mapTypeControl: false,
					scaleControl: false,
					streetViewControl: false,
					overviewMapControl: false
				};
				map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
				map.setOptions({
					styles: roadAtlasStyles
				});
				if (!Utilities.isMobile()) {
					var titleLatLng = new google.maps.LatLng(52.1924999, 21.0440174);
					var coordInfoWindow = new google.maps.InfoWindow();
					var infoBox = document.createElement("div");
					infoBox.className = "info-window";
					infoBox.innerHTML = ['Robert Gurgul', 'Warszawa, Mokotów'].join('<br>');
					coordInfoWindow.setContent(infoBox);
					coordInfoWindow.setPosition(titleLatLng);
					coordInfoWindow.open(map);
				}
			}

			$scope.btnVisible = false;
			$scope.sendMessage = function(user) {
				$.when(Utilities.sendData(user)).done(function() {
					$scope.btnVisible = true;
					$scope.reset();
					$scope.$apply();
				}).fail(function() {
					alert("coś poszło nie tak, spróbuj ponownie.");
				});
			};
			$scope.onFocus = function() {
				$scope.btnVisible = false;
			}
			$scope.reset = function() {
				$scope.user = {}
			};
			$scope.reset();
		});
	});
