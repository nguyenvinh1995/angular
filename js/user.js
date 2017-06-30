var app = angular.module("vinh", []);
        app.controller("vinh-app", function ($scope, $http) {
        $http.get("users.json").then(function (response) {
            $scope.users = response.data.datauser;
        });
        // $scope.users  = [
        //     {id: '1', name: "user1"},
        //     {id: '2', name: "user2"},
        //     {id: '3', name: "user3"},
        //     {id: '4', name: "user4"},
        //     {id: '5', name: "user5"},
        //     {id: '6', name: "user6"},
        //     {id: '7', name: "user7"},
        //     {id: '8', name: "user8"},
        //     {id: '9', name: "user9"},
        //     {id: '10', name: "user10"},
        //     {id: '11', name: "user11"},
        //
        // ];
        $scope.addusers = [];
        $scope.temp = [];

// search
        $scope.search = function () {
            $scope.a = $scope.userinput;
        }

// adduser
        $scope.select = function(a) {
            if (a.check == true) {
                $scope.temp.push({id: a.id, name: a.name, age: a.age, email: a.email});
                if ($scope.temp.length == $scope.users.length) {
                    $scope.checkAll = true;
                    $scope.selectedAll = true;
                }
            } else {
                var i = 0;
                while (i < $scope.temp.length) {
                    if ($scope.temp[i].name == a.name) {
                        $scope.temp.splice(i, 1);
                    }
                    i++;
                }
                if ($scope.temp.length < $scope.users.length) {
                    $scope.selectedAll = false;
                }
            }
        }
            // CheckAll
        $scope.checkAll = function(){
            if ($scope.users.length != 0 && $scope.selectedAll == true) {
                $scope.temp = angular.copy($scope.users);
            }else{
                $scope.temp = [];
            }
        }

        $scope.add = function(){
            if ($scope.temp.length !=0){
            $scope.addusers = $scope.addusers.concat($scope.temp);
            for (var i = 0; i < $scope.temp.length; i++) {
                for (var j = 0; j < $scope.users.length; j++) {
                    if ($scope.users[j].id == $scope.temp[i].id) {
                        $scope.users.splice(j,1);
                    }
                }
            }
            $scope.temp.splice(0,$scope.temp.length);
            $scope.selectedAll = false;
        }else{
                alert("Không có User nào được chọn");
            }
            }

//remove
        $scope.xoa = function(a) {
            var confirm = window.confirm('Bạn muốn xóa User này ?')
            if (confirm){
                $scope.users.push({id: a.id , name: a.name, age: a.age, email: a.email});
            }else{
                return false;
            }

            // $scope.users.push({id: a.id, name: a.name, age: a.age,email: a.email});
            $scope.users.sort();
            var i = 0;
            for(i = 0; i < $scope.addusers.length; i ++){
                if($scope.addusers[i] == a){
                    $scope.addusers.splice(i, 1);
                }
            }
        };
        // $scope.xoa_user=function () {
        //     elert("Bạn muốn xóa User này?");
        // };

// Sort
            $scope.danhsach = 'id';
            $scope.reverse = true;
            // $scope.addusers = orderBy(users,$danhsach,$reverse);
            $scope.sortBy = function(danhsach) {
                $scope.reverse = ($scope.danhsach === danhsach) ? !$scope.reverse : false;
                $scope.danhsach = danhsach;
            };


            // $scope.checkAll = function () {
            //     if ($scope.selectedAll) {
            //         $scope.selectedAll = true;
            //     } else {
            //         $scope.selectedAll = false;
            //     }
            //     angular.forEach($scope.users, function (a) {
            //         a.Selected = $scope.selectedAll;
            //     });
            // };

             });
