angular.module("myapp",["ngRoute","ngAnimate","servers","controllers"])
.config(function($routeProvider){
        $routeProvider.when("/",{
            templateUrl:"demo1.html",
            controller:"list"
        }).when("/list/:id",{
            templateUrl:"list.html",
            controller:"list"
        }).when("/show/:id",{
            templateUrl:"show.html",
            controller:"list"
        }).otherwise("/")

    })