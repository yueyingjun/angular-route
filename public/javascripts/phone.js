angular.module("myapp",[])
.controller("phone",["$scope","$http","$filter",function($scope,$http,$filter){
    $http({url:"/ajax"}).then(function(data){
        console.log(data.data);
        var data=data.data;
        var arr=[];
        for(var i=0;i<data.length;i++){
            var newarr=[];
            for(var j=1;j<data.length;j++){
                if((data[i].en==data[j].en)&&!data[j].flag){
                    data[j].flag=true;
                    newarr.push(data[i]);
                    newarr.en=data[i].en;
                }
            }
            if(newarr.length>0){
                arr.push(newarr)
                var arr=$filter("orderBy")(arr,"en")
            }
        }
        $scope.data=arr;
        $scope.type="";
        $scope.filter=function(en){
            $scope.type=en;
        }
        $scope.show=function(){
            $scope.type="";
        }
    })
}]);