function score(target, guess) {
	target = target.toLowerCase();
	guess = guess.toLowerCase();
	
	var chars = guess.split('')
		
		//select matching characters
		.filter(function(char) {
			return target.indexOf(char) != -1;
		})
		
		//dedupe set of characters
		.reduce(function(set, char) {
			set[char] = true;
			return set;
		}, {})
	;
		
	return Object.keys(chars).length;
}
