/**
 * Created by Rivan on 16.11.2014.
 */
angular.module('MyApp')
    .controller('WatchedCtrl', ['$scope', '$rootScope', '$routeParams', 'Watched',
        function($scope, $rootScope, $routeParams, Watched) {

            $scope.iswatched = function(episode){
                if(episode.watchlist.indexOf($rootScope.currentUser._id) !== -1){
                    $scope.mystyle = {'background-color' : '#a8ddb5'};
                    return true;
                }else{
                    return false;
                }
            }

            $scope.watchedthis = function (episode) {
                var index = episode.watchlist.indexOf($rootScope.currentUser.id);
                if(index > -1){
                    Watched.notwatchepisode($scope.show,episode).success(function () {
                        episode.watchlist.splice(index,1);
                    });
                }else{
                    Watched.watchepisode($scope.show, episode).success(function () {
                        episode.watchlist.push($rootScope.currentUser._id);
                    })
                }
            }
        }]);