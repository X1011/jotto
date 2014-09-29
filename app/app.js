angular.module('jotto', [])
	.controller('game', function($scope) {
		$scope.word = 'word';
		$scope.clues = [];
		
		$scope.submitGuess = function() {
			$scope.clues.push($scope.guess);
			$scope.guess = '';
		};
	})
;