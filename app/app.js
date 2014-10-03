angular.module('jotto', [])
	.controller('game', function($scope) {
		$scope.word = 'word';
		$scope.clues = [];
		
		$scope.submitGuess = function() {
			$scope.clues.unshift({
				word: $scope.guess,
				score: score($scope.word, $scope.guess)
			});
			$scope.guess = '';
		};
	})
;