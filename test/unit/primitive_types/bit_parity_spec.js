var hello = require('/src/primitive_types/bit_parity')

describe('hello', function(){
	it('should return hello', function(){
		chai.assert.equal("hello", hello());
	})
})