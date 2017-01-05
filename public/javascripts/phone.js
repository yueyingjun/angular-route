angular.module("myapp",[])
    .controller("phone",["$scope","$http","$filter",function($scope,$http,$filter){
        $http({url:"/ajax"}).then(function(data){
            var data=data.data;
            var arr=[];
            for(var i=0;i<data.length;i++){
                var current=[];
                for(var j=0;j<data.length;j++){
                    if((data[i].en==data[j].en)&&!data[j].flag){
                        data[j].flag=true;
                        current.push(data[j]);
                        current.en=data[i].en
                    }
                }
                if(current.length>0) {
                    arr.push(current);
                    var arr=$filter("orderBy")(arr,"en");
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
    }])
//服务