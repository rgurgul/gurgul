define([], function() {

    var roadAtlasStyles = [
        {
            "featureType": "landscape",
            "stylers": [
                {
                    "visibility": "simplified"
                },
                {
                    "saturation": -100
                },
                {
                    "gamma": 4.33
                },
                {
                    "lightness": -2
                }
            ]
        },
        {
            "featureType": "poi",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": 15
                }
            ]
        },
        {
            "featureType": "road.highway",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "stylers": [
                {
                    "visibility": "simplified"
                },
                {
                    "saturation": -100
                }
            ]
        },
        {
            "featureType": "administrative.locality",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "saturation": -100
                },
                {
                    "gamma": 2.81
                },
                {
                    "lightness": -8
                }
            ]
        },
        {
            "featureType": "administrative.country",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative.country",
            "stylers": [
                {
                    "lightness": -57
                },
                {
                    "gamma": 8.55
                },
                {
                    "saturation": -100
                }
            ]
        },
        {},
        {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative.province",
            "stylers": [
                {
                    "hue": "#00ffd5"
                },
                {
                    "saturation": 18
                },
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative",
            "stylers": [
                {
                    "saturation": -100
                }
            ]
        },
        {
            "featureType": "water",
            "stylers": [
                {
                    "lightness": -51
                }
            ]
        },
        {
            "featureType": "water",
            "stylers": [
                {
                    "lightness": 72
                }
            ]
        },
        {
            "featureType": "water"
        },
        {
            "featureType": "administrative",
            "elementType": "geometry"
        }
    ];

    return roadAtlasStyles;
})
