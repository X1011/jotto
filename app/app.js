angular.module('jotto', [])
	.controller('game', function($scope) {
	
		var channel = 'clues';
		$scope.word = 'hacks';
		$scope.clues = [];
		
		var pubnub = PUBNUB.init({
			publish_key:   'pub-c-8e12032f-3923-40df-a70d-ed394dba494d',
			subscribe_key: 'sub-c-386d444c-2db1-11e4-8788-02ee2ddab7fe'
		});
	
		pubnub.subscribe({
			channel: channel,
			message: function(clue) {
				$scope.$apply(function() {
					$scope.clues.unshift(clue);
				});
			}
		});
		
		$scope.submitGuess = function() {
			pubnub.publish({channel: channel,
				message: {
					word: $scope.guess,
					score: score($scope.word, $scope.guess)
				}
			});
			$scope.guess = '';
		};
	})
;