mainApp.controller('InstructionsController' , function ($scope,$location) {
    $scope.testPython = function () {
        console.log('Hit'); 
    }

    $scope.redirectToHome=function(){
        $location.path('/home');
    }
});