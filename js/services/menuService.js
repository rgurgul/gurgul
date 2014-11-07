define(['./module'], function (services) {
    services.service('Menu', function($resource) {
        return $resource('data/:menuId.json', {}, {
            query: {method: 'GET', params: {menuId: 'menu'}, isArray: true}
        });
    })
});





