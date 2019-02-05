mainApp.controller('TestController' , function ($scope,$location) {
    $scope.testPython = function () {
        console.log('Hit'); 
    }

    $scope.nextButton=function(){
        $location.path('/bmi');
    }
});