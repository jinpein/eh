mainApp.controller('LoginController' , function ($scope,$location) {
    $scope.testPython = function () {
        console.log('Hit'); 
    }
    
    $scope.registerButton=function(){
        $location.path('/register')
    }
    $scope.backButton=function(){
        $location.path('/eye')
    }
});