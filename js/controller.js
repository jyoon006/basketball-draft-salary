var myApp = angular.module('myApp', []);

myApp.controller('PlayerController', function ($scope, $http) {
	$scope.players = [];
	$http.get('js/data.json').success(function (data) {
		$scope.players = data;
		$scope.sort = function (keyname) {
			$scope.sortKey = keyname;
			$scope.reverse = !$scope.reverse;
		}

		$scope.selectedRow = null;

		$scope.setClickedRow = function (index) {
			$scope.selectedRow = index;
		}

		$scope.pushClickedRow = function (index) {
			console.log(index);
			selectedPlayer(index);
		}

	});

});