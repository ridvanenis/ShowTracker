/**
 * Created by ridvanenis on 30/10/14.
 */
angular.module('MyApp')
    .controller('NavbarCtrl', ['$scope', 'Auth', function($scope, Auth) {
        $scope.logout = function() {
            Auth.logout();
        };
    }]);