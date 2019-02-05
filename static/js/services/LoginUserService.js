// Service for communicating service endpoint
mainApp.service('LoginUserService', ['$http', function ($http) {

    // Rest endpoint base URL
    var BASE_LINK = 'http://localhost:8080/api/resource/loginUser';

    this.getAllLoginUser = function () {
        return $http({
            method: 'GET',
            url: BASE_LINK + '/getAllLoginUser'
        })
    }
}]);