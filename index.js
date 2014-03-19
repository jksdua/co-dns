
/**
 * Module dependencies.
 */

var thunk = require('thunkify');
var dns = module.exports = require('dns');

/**
 * Methods to wrap.
 */

var methods = [
  'lookup',
  'resolve4',
  'resolve6',
  'resolveCname',
  'resolveMx',
  'resolveNs',
  'resolveTxt',
  'resolveSrv',
  'resolveNaptr',
  'resolveSoa',
  'reverse',
  'resolve'
];

// wrap

methods.forEach(function(name){
  if (!dns[name]) return;
  dns[name] = thunk(dns[name]);
});