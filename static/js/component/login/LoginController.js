mainApp.controller('LoginController', function ($scope, $location, LoginEmployeeService) {


    $scope.redirectToHome = function () {
        $location.path('/landingPage');
    };

    $scope.loginMode = function () {
        console.log("Hit")
        // Bind python script using python-shell js library
        var python = require('python-shell');
        var options = {
            mode: 'json',
            encoding: 'utf8',
            pythonOptions: ['-u'],
            scriptPath: './engine/',
            args: [1],
            pathonPath: '/engine/venv/bin/python3.5'
        };

        var py = new python.PythonShell('/face_recognition.py', options);
        py.on('message', function (message) {
            console.log(message);
            // var data = JSON.stringify(message);
            // var object = JSON.parse(data);
            // console.log(object.department);
            if (message.status == 'isEmpty') {
                swal({
                    title: "Error!",
                    text: "Atleast one person added to the system.",
                    icon: "error"
                });
            }

            if (message.status == 'IN') {
                // console.log("HIT" + message.data.employee_id)
                // console.log(message.data.firstname);
                LoginEmployeeService.saveLoginEmployee(message.data.employee_id)
                    .then(function (response) {
                        console.log("Status:" + response.status)
                    })
                var name = document.getElementById('name');
                var position = document.getElementById('position');
                var department = document.getElementById('department');
                var employee_id = document.getElementById('employee_id');
                name.innerHTML = message.data.firstname + " " + message.data.lastname;
                employee_id.innerHTML = message.data.employee_id;
                position.innerHTML = message.data.position;
                department.innerHTML = message.data.department;
            }

        })
    }

});