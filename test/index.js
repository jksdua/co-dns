
var co = require('co');
var dns = require('..');
var assert = require('assert');

describe('others', function(){
  it('should be wrapped', function(done){
    co(function *(){
      var ret = yield dns.lookup('nodejs.org');
      assert(Array.isArray(ret) && ret.length === 2);

      var ret = yield dns.resolve('nodejs.org');
      assert(Array.isArray(ret));

      var ret = yield dns.reverse('8.8.8.8');
      assert(Array.isArray(ret));
    })(done);
  })
})
