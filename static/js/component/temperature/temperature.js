mainApp.controller('TemperatureController' , function ($scope,$location) {
    $scope.testPython = function () {
        console.log('Hit'); 
    }

    $scope.nextButton=function(){
        $location.path('/sugar');
    }
    $scope.backButton=function(){
        $location.path('/bp');
    }
});