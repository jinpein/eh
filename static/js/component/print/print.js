mainApp.controller('PrintController' , function ($scope,$location) {
    $scope.testPython = function () {
        console.log('Hit'); 
    }

    $scope.printButton=function(){
        $location.path('/dashboard')
    }
    $scope.backButton=function(){
        $location.path('/eye')
    }
    
});