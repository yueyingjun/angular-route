angular.module("sevices",[])
    .factory("indexDate",function($http){
      return  $http({url:"1.txt"})
    });