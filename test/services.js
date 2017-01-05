angular.module("services",[]).factory("indexData",function($http){
    return $http({url:"data.txt"})
})