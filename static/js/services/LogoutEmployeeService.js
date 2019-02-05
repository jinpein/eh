// Service for communicating service endpoint
mainApp.service('LogoutEmployeeService', ['$http', function ($http) {

    // Rest endpoint base URL
    var BASE_LINK = 'http://localhost:8080/api/resource/logoutEmployee';

    this.getAllLogoutEmployee = function () {
        return $http({
            method: "GET",
            url: BASE_LINK + '/getAllLogoutEmployee'
        })
    }

    this.currentTimeGapStatus = function (employeeId) {
        return $http({
            method: "POST",
            url: BASE_LINK + "/currentTimeGap",
            data: {
                "employeeId": employeeId,
                "physicalStation": "B"
            }
        })
    }


}]);