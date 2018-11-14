# buffer-equals-polyfill

Polyfills Node v0.10.x with v0.12.x `Buffer.prototype.equals` functionality.

See [v.12 API Docs](http://nodejs.org/api/buffer.html#buffer_buf_equals_otherbuffer)

```js
  Buffer('123').equals(Buffer('123')); // true
  Buffer('123').equals(Buffer('xyz')); // false
```
