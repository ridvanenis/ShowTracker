/**
 * Created by ridvanenis on 30/10/14.
 */
angular.module('MyApp')
    .factory('Show', ['$resource', function($resource) {
        return $resource('/api/shows/:_id');
    }]);