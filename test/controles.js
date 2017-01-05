angular.module("controles",["ngRoute","serves"])
    .controller("index",function($scope,indexData,$routeParams){
        indexData.then(function(data){
            $scope.data=data.data;
            if($routeParams.id==0){
                $scope.tpl=data.data[0].artcle
            }else if($routeParams.id==1){
                $scope.tpl=data.data[1].artcle
            }else if($routeParams.id==2){
                $scope.tpl=data.data[2].artcle
            }

        })
    })
