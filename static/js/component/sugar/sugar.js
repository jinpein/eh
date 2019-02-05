mainApp.controller('SugarController' , function ($scope,$location) {
    $scope.testPython = function () {
        console.log('Hit'); 
    }

    $scope.nextButton=function(){
        $location.path('/eye');
    }
    $scope.backButton=function(){
        $location.path('/temperature')
    }
});