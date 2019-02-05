// Service for communicating service endpoint
mainApp.service('UserInformationService', ['$http', function ($http) {

    // Rest endpoint base URL
    var BASE_LINK = 'http://localhost:8080/api/resource/user-info';

    // Update career profile rest end point as service
    this.updateUserProfile = function (User1) {
        return $http({
            method: 'PUT',
            url: BASE_LINK + '/updateUserProfile',
            data: {
                // id: User1.id,
                // department: User1.department,
                // position: User1.position,
                // station: "A",
                // employee_id: User1.employeeid,
                // employee: {
                //     e_id: User1.id,
                //     firstname: User1.firstname,
                //     lastname: User1.lastname,
                //     phone: User1.phone,
                //     email: User1.email
                id: User1.id,
                user_name: User1.username,
                user: {
                    u_id: User1.id,
                    fname:  User1.fname,
                    lname:  User1.lname,
                    email:  User1.email,
                    password: User1.password,
                    age:    User1.age,
                    gender: User1.gender
                }
            }
        });
    }


    // Delete career profile rest end point as service
    this.deleteUserProfileById = function (id) {
        return $http({
            method: 'DELETE',
            url: BASE_LINK + '/deleteUserProfileById/' + id
        })
    }

    // Get all Career Profile from the server
    this.getAllUserProfile = function () {
        return $http({
            method: 'GET',
            url: BASE_LINK + '/getAllUserProfile'
        })
    }

    // Create Career Profile to the server
    this.createUserProfile = function (User1) {
        return $http({
            method: 'POST',
            url: BASE_LINK + '/createUserProfile',
            data: {
                // department: User1.department,
                // position: User1.position,
                // station: "A",
                // employee_id: User1.employeeid,
                // employee: {
                //     firstname: User1.firstname,
                //     lastname: User1.lastname,
                //     phone: User1.phone,
                //     email: User1.email
                user_name: User1.username,
                user: {
                    fname:  User1.fname,
                    lname:  User1.lname,
                    email:  User1.email,
                    password: User1.password,
                    age:    User1.age,
                    gender: User1.gender
                }
            }
        });
    }

    // Setter
    this.setUser = function (data) {
        // Undefined data trapping
        if (data == undefined) {
            this.user = undefined;
        } else {
            this.user = {
                // employeeid: data.employeeid,
                // firstname: data.firstname,
                // lastname: data.lastname,
                // phone: data.phone,
                // email: data.email,
                // department: data.department,
                // position: data.position
                user_name:  data.username,
                fname:      data.fname,
                lname:      data.lname,
                email:      data.email,
                password:   data.password,
                age:        data.age,
                gender:     data.gender
            }
        }
    }

    this.setUserWithId = function (data) {
        // Undefined data trapping
        if (data == undefined) {
            this.employee = undefined;
        } else {
            this.employee = {
                // id: data.id,
                // employeeid: data.employeeid,
                // firstname: data.firstname,
                // lastname: data.lastname,
                // phone: data.phone,
                // email: data.email,
                // department: data.department,
                // position: data.position
                id: data.id,
                user_name: data.username,
                fname: data.fname,
                lname: data.lname,
                email: data.email,
                password: data.password,
                age: data.age,
                gender: data.gender
            }
        }
    }

    // Getter
    this.getUser = function () {
        return this.user;
    }
}]);