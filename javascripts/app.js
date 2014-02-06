var app = angular.module("myApp", ["switcharoo"]);

app.controller("MyCtrl", ['$scope', function($scope) {
    $scope.selectedItems = [
        "1", "4"
    ];
    $scope.listOfItems = {
        1: 'Apples',
        2: 'Oranges',
        3: 'Peaches',
        4: 'Bananas',
        5: 'Lemons'
    }
}]);