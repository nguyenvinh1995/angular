var app = angular
    .module("vinh", [])
    app.controller("vinh-app", function ($scope) {
        $scope.users  = [
            {id: '1', name: "user1"},
            {id: '2', name: "user2"},
            {id: '3', name: "user3"},
            {id: '4', name: "user4"},
            {id: '5', name: "user5"},
            {id: '6', name: "user6"},
        ];

        $scope.listusers = [];
        $scope.temp = [];

// search
        $scope.search = function () {
            $scope.searchuser = $scope.userinput;
        }

// adduser
        $scope.clickusers = function(a){

            if (a.checked == true) {
                $scope.temp.push({id: a.id,name: a.name});
            }else{
                var i=0;
                while(i < $scope.temp.length){
                    if($scope.temp[i].name==a.name){
                        $scope.temp.splice(i, 1);
                    }
                    i ++;
                }
            }
        }

        $scope.addusers = function(){
            $scope.listusers = $scope.listusers.concat($scope.temp);

            for (var i = 0; i < $scope.temp.length; i++) {
                for (var j = 0; j < $scope.users.length; j++) {
                    if ($scope.users[j].id == $scope.temp[i].id) {
                        $scope.users.splice(j,1);
                    }
                }
            }
            $scope.temp.splice(0,$scope.temp.length);
        }

        $scope.undo = function(a){
            $scope.users.push({id: a.id,name: a.name})
            for (var j = 0; j < $scope.listusers.length; j++) {
                if ($scope.listusers[j].id == a.id) {
                    $scope.listusers.splice(j,1);

                }
            }
        }
    });

