
var co = require('co');
var dns = require('..');

co(function *(){
  var ret = yield dns.lookup('nodejs.org');

  console.log('nodejs.org is hosted on ipv%d address %s', ret[1], ret[0]);
})();