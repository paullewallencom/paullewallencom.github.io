var compare = require('buffer-compare');

Buffer.compare = Buffer.compare || function (buffer1, buffer2) {
  return compare(buffer1, buffer2);
};

Buffer.prototype.compare = Buffer.prototype.compare || function (buffer) {
  return compare(this, buffer);
};
