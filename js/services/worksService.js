define(['./module'], function (services) {
    services.service('worksServices', function($resource) {
        return $resource('data/:workId.json', {}, {
            query: {method: 'GET', params: {workId: 'works'}, isArray: true}
        });
    })
});





