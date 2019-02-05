mainApp.controller('EyeController' , function ($scope,$location) {
    $scope.testPython = function () {
        console.log('Hit'); 
    }

    $scope.nextButton=function(){
        $location.path('/print');
    }
    $scope.backButton=function(){
        $location.path('/sugar')
    }

    $scope.testButton=function(){
        $location.path('/eye-exam')
    }
    // $scope.testButton=function(EyeTest){
    //     var modalInstance = $modal.open({
    //         templateUrl: '../static/js/component/eye-exam/eye-exam.html',
    //         controller: 'EyeExamController',
    //         resolve: {
    //             titlename2: function(){
    //                 return EyeTest;
    //             }
    //         }
    //     })
    // }

    // $scope.open=function(){
    //     console.log('opening pop up');
    //     var modalInstance = $modal.open({
    //         templateUrl: '/eye-exam'
    //     })
    // }
    $scope.open = function PopupCenter(url, title, w, h){
    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : window.screenX;
    var dualScreenTop = window.screenTop != undefined ? window.screenTop : window.screenY;

    // var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    // var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
    var width = 10;
    var height = 10;
    var systemZoom = width / window.screen.availWidth;
    var left = (width - w) / 2 / systemZoom + dualScreenLeft
    var top = (height - h) / 2 / systemZoom + dualScreenTop
    // var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w / systemZoom + ', height=' + h / systemZoom + ', top=' + top + ', left=' + left);
    var newWindow = window.open('../static','EyeExam','resizable,height=260,width=370')    
    // Puts focus on the newWindow
    if (window.focus) newWindow.focus();
    }
    
}); 
