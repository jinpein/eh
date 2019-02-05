var mainApp = angular.module('mainApp' , ['ngRoute' , 'ngAnimate', 'ui.bootstrap'])

mainApp.config(['$routeProvider', function ($routeProvider) {
    
    $routeProvider. 
        when('/login',{
            templateUrl:'../static/js/component/login/login.html',
            controller: 'LoginController'
        }).
        when('/register',{
            templateUrl:'../static/js/component/register/register.html',
            controller: 'RegisterController'
        }).
        when('/home',{
            templateUrl:'../static/js/component/home/home.html',
            controller: 'HomeController'
        }).
        when('/dashboard',{
            templateUrl: '../static/js/component/dashboard/dashboard.html',
            controller: 'DashboardController'
        }).
        when('/instructions',{
            templateUrl:'../static/js/component/instructions/instructions.html',
            controller: 'InstructionsController'
        }).
        when('/test',{
            templateUrl: '../static/js/component/test/test.html',
            controller: 'TestController'
        }).
        when('/bmi',{
            templateUrl: '../static/js/component/bmi/bmi.html',
            controller: 'BmiController'
        }).
        when('/bp',{
            templateUrl: '../static/js/component/bp/bp.html',
            controller: 'BpController'
        }).
        when('/eye',{
            templateUrl: '../static/js/component/eye/eye.html',
            controller: 'EyeController'
        }).
        when('/eye-exam',{
            templateUrl: '../static/js/component/eye-exam/eye-exam.html',
            controller: 'EyeExamController'
        }).
        when('/sugar',{
            templateUrl: '../static/js/component/sugar/sugar.html',
            controller: 'SugarController'
        }).
        when('/temperature',{
            templateUrl: '../static/js/component/temperature/temperature.html',
            controller: 'TemperatureController'
        }).
        when('/print',{
            templateUrl: '../static/js/component/print/print.html',
            controller: 'PrintController'
        }).
        otherwise({
            redirectTo: '/home'
        });
}]);
