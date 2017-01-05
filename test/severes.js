angular.module("serves",[])
    .factory("indexData",function($http){
        return  $http({url:"2.txt"});
    })
