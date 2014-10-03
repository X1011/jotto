function score(target, guess) {
	return guess.split('')
		.map(function(char) {return target.indexOf(char) != -1})
		.map(function(char) {return char ? 1 : 0})
		.reduce(function(a, b) {return a + b})
	;
}
