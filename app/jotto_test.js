describe('score', function() {
	it('is 0 if no letters in common', function() {
		score('a', 'b').should.equal(0);
	});
	
	it('is 1 if 1 letter in common', function() {
		score('a', 'a').should.equal(1);
	});
	
	it('counts duplicates in guess only once', function() {
		score('a', 'aa').should.equal(1);
	});
	
	it('counts duplicates in target only once', function() {
		score('aa', 'a').should.equal(1);
	});
	
	it('ignores case', function() {
		score('a', 'A').should.equal(1);
	});
	
	it('works with numbers and spaces', function() {
		score('1 ', '1 ').should.equal(2);
	});
});
