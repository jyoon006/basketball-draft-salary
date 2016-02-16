var selectedPlayerList = [];
var salaryTotal;

function selectedPlayer(obj) {

	var playerName = obj.firstName + " " + obj.lastName;
	var position = obj.Pos;
	var salary = obj.Salary;

	selectedPlayerList.push({
		name: playerName,
		position: position,
		salary: salary
	});
	salaryTotal = calculateSalary(selectedPlayerList);
	console.log(selectedPlayerList);
	console.log(salaryTotal);
	if (salaryTotal < 0) {
		document.getElementById("salarytotal").style.color = "red";
	}

	document.getElementById("salarytotal").innerHTML = "Current Salary: $" + salaryTotal.toLocaleString();

}

function calculateSalary(selectedPlayerList) {

	return selectedPlayerList.reduce(function (curr, next) {
		return curr - next.salary;
	}, 65000000);
}

myApp.controller('SelectedPlayerController', function ($scope) {
	$scope.selectedPlayers = selectedPlayerList;

	$scope.selectedRow = null;

	$scope.setClickedRow = function (index) {
		$scope.selectedRow = index;
	}

	$scope.deleteSelectedPlayer = function (index, player) {
		console.log(player);
		selectedPlayerList.splice(index, 1);
		salaryTotal += player.salary;
		console.log(salaryTotal);

		if (salaryTotal >= 0) {
			document.getElementById("salarytotal").style.color = "#AFB0E3";
		}

		document.getElementById("salarytotal").innerHTML = "Current Salary: $" + salaryTotal.toLocaleString();
	}
});