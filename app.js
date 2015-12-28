/**
 * Created by Bishaka on 28/12/2015.
 */

var
    hubisosite = angular.module('hubisosite',[])
    .controller('siteCtrl',['$scope','site',function($scope,api){

        $scope.winver = "ia32";
        $scope.dwnldWin = function(){
            api.getLatestVersionNumber().then(function(ver){
                var url = "https://github.com/hubisotool/hubisotool/releases/download/"+ver+"/hubisotool-"+ver+"-win-"+$scope.winver+".zip";
                window.location.href = url;
            })
        }
    }])
    .factory('site',['$http',function($http){
        var _gut = {};
            _gut.getLatestVersionNumber = function(){
                return new Promise(function(resolve,reject){

                    var request = $http({
                        method: "get",
                        url: "https://api.github.com/repos/hubisotool/hubisotool/tags"
                    });
                    request.then( function(tags){
                        resolve(tags["data"][0].name)
                    });
                })
            };
        return _gut;
    }])

;