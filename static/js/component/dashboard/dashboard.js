mainApp.controller('DashboardController' , function ($scope,$location) {
    $scope.testPython = function () {
        console.log('Hit'); 
    }

    $scope.redirectToHome=function(){
        $location.path('/home');
    }
    $scope.ToInstructions=function(){
        $location.path('/instructions');
    }
});