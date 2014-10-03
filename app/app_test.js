describe('score', function() {
	it('is 0 if no letters in common', function() {
		score('a', 'b').should.equal(0);
	});
	
	it('is 1 if 1 letter in common', function() {
		score('a', 'a').should.equal(1);
	});
	
	it('rejects duplicate letters');
});
