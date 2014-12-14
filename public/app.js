angular.module('MyApp', ['ngCookies', 'ngResource', 'ngMessages', 'ngRoute', 'mgcrea.ngStrap','ngActivityIndicator', 'ngProgress'])
    .config(['$locationProvider', '$routeProvider' , '$activityIndicatorProvider',
        function($locationProvider, $routeProvider, $activityIndicatorProvider) {
            $activityIndicatorProvider.setActivityIndicatorStyle('SpinnerDark');
        $locationProvider.html5Mode(true);

        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'MainCtrl'
            })
            .when('/shows/:id', {
                templateUrl: 'views/detail.html',
                controller: 'DetailCtrl'
            })
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl'
            })
            .when('/signup', {
                templateUrl: 'views/signup.html',
                controller: 'SignupCtrl'
            })
            .when('/add', {
                templateUrl: 'views/add.html',
                controller: 'AddCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);