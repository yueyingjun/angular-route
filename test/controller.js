angular.module("ctrls",["services"])
.controller("index",["$scope","$http","indexDate",function($scope,$http,indexDate){
    indexDate.then(function(data){
        $scope.data=data.data;
    })
}]).controller("list",function($scope,$routeParams){
    $scope.data.forEach(function(obj){
        for(var i=0;i<obj.length;i++){
            if($routeParams.id=obj[i].id){
                $scope.con=obj[i].con;
            }
        }
    })
})