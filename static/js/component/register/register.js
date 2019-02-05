mainApp.controller('RegisterController' , function ($scope,$location, UserInformationService) {
    $scope.testPython = function () {
        console.log('Hit');
    }

    $scope.printButton=function(){
        $location.path('/dashboard')
    }
    $scope.loginButton=function(){
        $location.path('/login')
    }

    // $scope.username = "";
    // $scope.fname = "";
    // $scope.lname = "";
    // $scope.email = "";
    // $scope.password = "";
    // $scope.cpassword = "";
    // $scope.age = "";
    // $scope.gender = "";
    // $scope.phone = ""

    // Getter Receiver
    if (UserInformationService.getUser() == undefined){
        console.log('UNDEFINED');
    }else{
        $scope.client = {
            username: UserInformationService.getUser().username,
            fname: UserInformationService.getUser().fname,
            lname: UserInformationService.getUser().lname,
            email: UserInformationService.getUser().email,
            password: UserInformationService.getUser().password,
            age: UserInformationService.getUser().age,
            gender: UserInformationService.getUser().gender
        }
    }


    $scope.submitBtn = function() {
        console.log("hit")
    };
});



