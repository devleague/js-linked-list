var window = window || undefined;
if (window) {
  GLOBAL = window;
} else {
  var vm = require('vm')
    , fs = require('fs')
    , sinon = require('sinon')
    , chai = require('chai')
    ;

  var basicsFile = fs.readFileSync(process.cwd() + '/linkedList.js', { encoding: 'UTF-8' });
  // file runs in VM and it's contents has access to GLOBAL
  vm.runInThisContext(basicsFile);
}

var expect = chai.expect
  , should = chai.should()
  ;

describe('Linked List Generator', function() {
  var sandbox;
  var baseLinkedList = {
    head: null,
    tail: null,
    add: function(){},
    remove: function(){},
    get: function(){},
  };

  var newLinkedList
    , linkedListGenerator = GLOBAL.linkedListGenerator;
  // beforeEach(function() {

  //   // create a sandbox
  //   sandbox = sinon.sandbox.create();

  //   // stub some console methods
  //   sandbox.stub(console, 'log');
  //   sandbox.stub(console, 'error');
  // });

  // afterEach(function() {
  //   // restore the environment as it was before
  //   sandbox.restore();
  // });

  it('should be a function', function () {
    expect(linkedListGenerator).to.exist;
    expect(linkedListGenerator).to.be.a('function');
  });

  describe('Able to create a new Linked List Object', function () {
    beforeEach(function () {
      newLinkedList = linkedListGenerator();
    });
    it('should return a linked list object', function () {
      expect(newLinkedList).to.be.an('object');
    });
    it('should have a property named `head` which has a null value', function () {
      expect(linkedListGenerator).to.exist;
      expect(newLinkedList.head).to.be.null;
    });
    it('should have a property named `tail` which has a null value', function () {
      expect(linkedListGenerator).to.exist;
      expect(newLinkedList.tail).to.be.null;
    });
  });

  describe('Has methods available through Linked List Object', function () {
    beforeEach(function () {
      newLinkedList = linkedListGenerator();
    });
    it('should have a method named `add`', function () {
      expect(newLinkedList.add).to.exist;
      expect(newLinkedList.add).to.be.a('function');
    });
    it('should have a method named `remove`', function () {
      expect(newLinkedList.remove).to.exist;
      expect(newLinkedList.remove).to.be.a('function');
    });
    it('should have a method named `get`', function () {
      expect(newLinkedList.get).to.exist;
      expect(newLinkedList.get).to.be.a('function');
    });
  });

  describe('`add` method', function () {
    var newNodeA, newNodeB;

    beforeEach(function () {
      newLinkedListA = linkedListGenerator();
      newLinkedListB = linkedListGenerator();
    });

    describe('should return a new node object', function () {
      it('should have a property named `value`', function () {
        expect(newNodeA.value).to.exist;
      });
      it('should have a property named `next`', function () {
        expect(newNodeA.next).to.be.defined;
        expect(newNodeA.next).to.be.null;
      });
    });
    it('should return a new node object', function () {
      newNodeA = newLinkedList.add('http://slashdot.org');
      expect(newNodeA).to.not.be.undefined;
      expect(newNodeA).to.be.an('object');
    });
    it('should add a new node to an empty linked list', function () {
      expect(newLinkedListB.head).to.be.null;
      expect(newLinkedListB.tail).to.be.null;
      // console.log(newLinkedListB);
      newLinkedListB.add('http://devleague.com');
      expect(newLinkedListB.head).to.be.an('object');
    });
  });

  describe.skip('`remove` method', function () {

  });

  describe.skip('`get` method', function () {

  });
});