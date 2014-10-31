/**
 * Created by ridvanenis on 30/10/14.
 */
angular.module('MyApp')
    .controller('SignupCtrl', ['$scope', 'Auth', function($scope, Auth) {
        $scope.signup = function() {
            Auth.signup({
                email: $scope.email,
                password: $scope.password
            });
        };
    }]);