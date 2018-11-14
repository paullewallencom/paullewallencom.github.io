require('./');
var A = Buffer('123');
var B = Buffer('xyz');

console.log('Buffer.prototype.equal:');

console.log('should return true when buffers match');
console.assert(A.equals(A) === true, 'Failed:' + A.equals(A));
console.log('Passed');
console.log('should return false when buffers do not match');
console.assert(A.equals(B) === false, 'Failed:' + A.equals(B));
console.log('Passed');
