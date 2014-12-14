/**
 * Created by Rivan on 16.11.2014.
 */
angular.module('MyApp')
    .controller('WatchedCtrl', ['$scope', '$rootScope', '$routeParams', 'Watched','$activityIndicator','ngProgress',
        function($scope, $rootScope, $routeParams, Watched, $activityIndicator,ngProgress ) {

            $scope.iswatched = function(episode){
                if(episode.watchlist.indexOf($rootScope.currentUser._id) !== -1){
                    $scope.mystyle = {'background-color' : '#a8ddb5'};
                    return true;
                }else{
                    $scope.mystyle = {};
                    return false;
                }
            }

            $scope.watchedthis = function (episode) {
                var index = episode.watchlist.indexOf($rootScope.currentUser._id);
                if(index > -1){
                    ngProgress.start();
                    Watched.notwatchepisode($scope.show,episode).success(function () {
                        episode.watchlist.splice(index,1);
                        ngProgress.complete();
                    });

                }else{
                    ngProgress.start();
                    Watched.watchepisode($scope.show, episode).success(function () {
                        episode.watchlist.push($rootScope.currentUser._id);
                        ngProgress.complete();
                    })
                }

            };
        }]);