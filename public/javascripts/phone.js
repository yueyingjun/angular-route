function resize(Origin,type){
     var cw=document.documentElement.clientWidth;
     var ch=document.documentElement.clientHeight;
     var type=type || "x";
     if(type=="x"){
          var scale=cw/Origin*100;
     }else if(type=="y"){
          var scale=ch/Origin*100;
     }
     document.getElementsByTagName("html")[0].style.fontSize=scale+"px";
}
resize(750,"x");


angular.module("myapp",[])
    .controller("phone",["$scope","$http","$filter",function($scope,$http,$filter){
        $http({url:"/ajax"}).then(function(data){
             var data=data.data;
             var arr=[];
             for(var i=0;i<data.length;i++){
                 var current=[];
                  for(var j=1;j<data.length;j++){
                       if(data[i].en==data[j].en&&!data[j].flag){
                            data[j].flag=true;
                            current.push(data[j]);
                            current.en=data[i].en
                       }
                  }
                  if(current.length>0){
                       arr.push(current);
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
}])