/**
 * Created by ridvanenis on 30/10/14.
 */
angular.module('MyApp').
    filter('fromNow', function() {
        return function(date) {
            return moment(date).fromNow();
        }
    });