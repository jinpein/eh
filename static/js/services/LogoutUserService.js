// Service for communicating service endpoint
mainApp.service('LogoutUserService', ['$http', function ($http) {

    // Rest endpoint base URL
    var BASE_LINK = 'http://localhost:8080/api/resource/logoutUser';

    this.getAllLogoutUser = function () {
        return $http({
            method: 'GET',
            url: BASE_LINK + '/getAllLogoutUser'
        })
    }
}]);