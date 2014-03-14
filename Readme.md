# co-dns

  Node core `dns` wrapped functions that return thunks for [co](https://github.com/visionmedia/co).

## Installation

```
$ npm install co-dns --save
```

## Example

 Use all the regular async dns functions without callback hell:

```js
var wrap = require('co-dns')
var dns = wrap(require('dns'))

var hostnames = yield dns.reverse('8.8.8.8') // returns an array

// returns an array, where ip[0] is the ip address and ip[1] is the family (ipv4 or ipv6)
var ip = yield dns.lookup('bing.com')
```

## License

  MIT

