angular.module("directives",[])
    .directive("menu",function () {
        return {
            restrict:"A",  // 自定义指令的类型:E element,A attribute,C class,M mark
//                    template: '<h1>{{abc}}</h1>',//指令模板
            templateUrl:"demo.html",  //指令外部模板  //ajax(1.向服务器发起请求，2.不能跨域)
//          replace:true,      //是否替换原有标签
            transclude:true,   //以前的内容保存下
            scope:{

            },     //scope是独立的,值：true/false/&/=/@
            link:function ($scope1,b,c) {
                $scope1.abc="指令的scope"
                $scope1.data=[
                    {
                        name:"111",
                        son:[
                            {name:"1-1"},
                            {name:"1-2"},
                            {name:"1-3"},
                            {name:"1-4"}
                        ]
                    },
                    {
                        name:"222",
                        son:[
                            {name:"2-1"},
                            {name:"2-2"},
                            {name:"2-3"},
                            {name:"2-4"}
                        ]
                    },
                    {
                        name:"333",
                        son:[
                            {name:"3-1"},
                            {name:"3-2"},
                            {name:"3-3"},
                            {name:"3-4"}
                        ]
                    },
                    {
                        name:"444",
                        son:[
                            {name:"4-1"},
                            {name:"4-2"},
                            {name:"4-3"},
                            {name:"4-4"}
                        ]
                    }
                ]
                $scope1.a=0;
                $scope1.change=function (index) {
                    $scope1.a=index;
                }
            }
        }
    }).directive("abc",function () {
        return {
            restrict:"A",
            template: '<h1>{{abc}}</h1>',
            link:function ($scope1,b,c) {
                $scope1.abc="指令的scope"
            }
        }
    })