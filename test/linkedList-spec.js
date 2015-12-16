var window = window || undefined;
if (!window) {
  GLOBAL = window
  var vm = require('vm');
  var fs = require('fs');
  var sinon = require('sinon');
  var chai = require('chai');

  var basicsFile = fs.readFileSync(process.cwd() + '/linkedList.js', { encoding: 'UTF-8' });

  // file runs in VM and it's contents has access to GLOBAL
  vm.runInThisContext(basicsFile);
}

var expect = chai.expect;
var should = chai.should();

/* Write tests below */

