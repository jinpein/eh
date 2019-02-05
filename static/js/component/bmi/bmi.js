mainApp.controller('BmiController' , function ($scope,$location) {
    $scope.nextButton=function(){
        $location.path('/bp');
    }

    $scope.backButton=function(){
        $location.path('/test');
    }

    $scope.calculateButton=function(){
        console.log("Hit")
        // Bind python script using python-shell js library
        // var require: pythonshell
        var python = require('python-shell');
        var options = {
            mode: 'json',
            encoding: 'utf8',
            pythonOptions: ['-u'],
            scriptPath: './engine/',
            args: [1],
            // pythonPath: '/usr/bin/python3.5'
         };

        var py = new python.PythonShell('/test.py', options);
        // var py = new python.PythonShell('/test.py');
        py.on('message', function (message) {
            var data = JSON.stringify(message);
            var object = JSON.parse(data);
            console.log(object);
            $scope.result="Success!"
        })
    }

    
});
