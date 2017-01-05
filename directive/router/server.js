angular.module("servers",[])
    .factory("listData",function($http){
        // return [{title:"标题1",con:"内容"}]
        return $http({url:"./model.txt"})
    })