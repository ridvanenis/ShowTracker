/**
 * Created by Rivan on 16.11.2014.
 */
angular.module('MyApp')
    .factory('Watched', ['$http', function($http) {
        return {
            watchepisode: function(show,episode, user) {
                return $http.post('/api/watchepisode', { showId: show._id, episodeId: episode._id });
            },
            notwatchepisode: function(show,episode, user) {
                return $http.post('/api/notwatchepisode', { showId: show._id, episodeId: episode._id });
            }
        };
    }]);