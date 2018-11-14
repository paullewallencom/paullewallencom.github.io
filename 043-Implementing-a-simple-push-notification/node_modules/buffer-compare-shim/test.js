require('./');
var A = Buffer('123');
var B = Buffer('0123');
var C = Buffer('xyz');

console.log('Buffer.prototype.compare : ');

console.log('should return 0 when a byte sequences matches and buffers are of equal length');
console.assert(A.compare(A) === 0, 'Failed:' + A.compare(A));
console.log('Passed');
console.log('should return 1 when a byte sequence matches and the left buffer is smaller');
console.assert(A.compare(B) === 1, 'Failed:' + A.compare(B));
console.log('Passed');
console.log('should return 1 when a byte sequence matches and the left buffer is larger');
console.assert(B.compare(A) === -1, 'Failed:' + B.compare(A));
console.log('Passed');
console.log('should return -1 when there is no match');
console.assert(A.compare(C) === -1, 'Failed:' + A.compare(C));
console.log('Passed');

console.log('Buffer.compare : ');

console.log('should return 0 when a byte sequences matches and buffers are of equal length');
console.assert(Buffer.compare(A, A) === 0, 'Failed:' + Buffer.compare(A, A));
console.log('Passed');
console.log('should return 1 when a byte sequence matches and the left buffer is smaller');
console.assert(Buffer.compare(A, B) === 1, 'Failed:' + Buffer.compare(A, B));
console.log('Passed');
console.log('should return 1 when a byte sequence matches and the left buffer is larger');
console.assert(Buffer.compare(B, A) === -1, 'Failed:' + Buffer.compare(B, A));
console.log('Passed');
console.log('should return -1 when there is no match');
console.assert(Buffer.compare(A, C) === -1, 'Failed:' + Buffer.compare(A, C));
console.log('Passed');
