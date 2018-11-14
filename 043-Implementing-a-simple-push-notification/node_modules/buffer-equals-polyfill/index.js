var compare = require('buffer-compare');

Buffer.prototype.equals = Buffer.prototype.equals || function (buffer) {
  return compare(this, buffer) === 0;
}
