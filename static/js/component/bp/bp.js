mainApp.controller('BpController' , function ($scope,$location) {
    $scope.testPython = function () {
        console.log('Hit'); 
    }

    $scope.nextButton=function(){
        $location.path('/temperature');
    }
    $scope.backButton=function(){
        $location.path('/bmi');
    }
});