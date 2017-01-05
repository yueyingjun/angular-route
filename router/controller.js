angular.module("controllers",["servers"])
.controller("list",function($scope,listData){
        listData.then(function(data){
            // console.log(data);
            $scope.data=data.data
        });
    })