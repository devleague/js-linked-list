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
  var sandbox
    , baseLinkedList = {
    head: null,
    tail: null,
    add: function(){},
    remove: function(){},
    get: function(){},
  };

  var newLinkedList
    , linkedListGenerator = GLOBAL.linkedListGenerator;

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
  });

  describe('Has methods available through Linked List Object', function () {
    beforeEach(function () {
      newLinkedList = linkedListGenerator();
    });
    it('should have a method named `getHead`', function () {
      expect(newLinkedList.getHead).to.exist;
      expect(newLinkedList.getHead).to.be.a('function');
    });
    it('should have a method named `getTail`', function () {
      expect(newLinkedList.getTail).to.exist;
      expect(newLinkedList.getTail).to.be.a('function');
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
    it('should have a method named `insert`', function () {
      expect(newLinkedList.insert).to.exist;
      expect(newLinkedList.insert).to.be.a('function');
    });
  });

  describe('`getHead` method', function () {
    var urlList;
    beforeEach(function () {
      urlList = linkedListGenerator();
    });
    it('should retrieve the value of the first node in a list', function () {
      expect(urlList.getHead).to.be.a('function');
      expect(urlList.getHead()).to.be.null;
    });
  });

  describe('`getTail` method', function () {
    var urlList;
    beforeEach(function () {
      urlList = linkedListGenerator();
    });
    it('should retrieve the value of the first node in a list', function () {
      expect(urlList.getTail).to.be.a('function');
      expect(urlList.getTail()).to.be.null;
    });
  });

  describe('`add` method', function () {
    var newNodeA, newNodeB, newNodeC;

    beforeEach(function () {
      newLinkedListA = linkedListGenerator(); // return new node
      newLinkedListB = linkedListGenerator(); // for `head` and `tail`
      newLinkedListC = linkedListGenerator(); // for `tail`
      newNodeA = newLinkedListA.add('http://slashdot.org');
    });

    describe('should return a node object after appending the node', function () {
      it('should have a property named `value`', function () {
        expect(newNodeA.value).to.exist;
      });
      it('should have a property named `next`', function () {
        expect(newNodeA.next).to.be.defined;
        expect(newNodeA.next).to.be.null;
      });
      it('should return a new node object', function () {
        expect(newNodeA).to.not.be.undefined;
        expect(newNodeA).to.be.an('object');
      });
    });

    describe('should append new nodes', function () {
      it('`head` and `tail` should reference the same node object when adding to an empty list', function () {
        // add a new node!
        newLinkedListB.add('http://devleague.com');

        // test!
        expect(newLinkedListB.getHead()).to.deep.equal({
          value: 'http://devleague.com',
          next: null
        });
        expect(newLinkedListB.getTail()).to.deep.equal({
          value: 'http://devleague.com',
          next: null
        });

        // really the same?
        expect(newLinkedListB.getHead()).to.equal(newLinkedListB.getTail())
      });
    });

    describe('should append even more nodes', function () {
      it('`tail` should reference the most recently added node', function () {
        // add new nodes
        newLinkedListC.add('http://eff.org')
        newLinkedListC.add('http://devleague.com');

        // tests!
        expect(newLinkedListC.getHead()).to.deep.equal({
          value: 'http://eff.org',
          next: {
            value: 'http://devleague.com',
            next: null
          }
        });
        expect(newLinkedListC.getTail()).to.deep.equal({
          value: 'http://devleague.com',
          next: null
        });

        // add another node
        newLinkedListC.add('http://xkcd.org');

        // test!
        expect(newLinkedListC.getHead()).to.deep.equal({
          value: 'http://eff.org',
          next: {
            value: 'http://devleague.com',
            next: {
              value: 'http://xkcd.org',
              next: null
            }
          }
        });
        expect(newLinkedListC.getTail()).to.deep.equal({
          value: 'http://xkcd.org',
          next: null
        });
      });
    });
  });

  describe('`get` method', function () {
    var urlList, bookList;

    beforeEach(function () {
      urlList = linkedListGenerator();
      bookList = linkedListGenerator();

      var urlArr = [
        'news.ycombinator.com',
        'mozilla.org',
        'eff.org',
        'icann.org'
      ];

      var bookArr = [
        'Ready Player One',
        '1982',
        'Neuromancer',
        'Snow Crash'
      ];

      urlArr.forEach(function(url) {
        urlList.add(url);
      });
      bookArr.forEach(function(book) {
        bookList.add(book);
      });
    });

    describe('takes an argument', function () {
      it('should find a node by it\'s index in the Linked List', function () {
        // urlList Tests
        var fetchedNode = urlList.get(0);
        expect(fetchedNode.value).to.equal('news.ycombinator.com');
        expect(fetchedNode.next).to.be.an('object');
        expect(fetchedNode.next.value).to.equal('mozilla.org');

        fetchedNode = urlList.get(1);
        expect(fetchedNode.value).to.equal('mozilla.org');
        expect(fetchedNode.next).to.be.an('object');
        expect(fetchedNode.next.value).to.equal('eff.org');

        fetchedNode = urlList.get(2);
        expect(fetchedNode.value).to.equal('eff.org');
        expect(fetchedNode.next).to.be.an('object');
        expect(fetchedNode.next.value).to.equal('icann.org');

        fetchedNode = urlList.get(3);
        expect(fetchedNode.value).to.equal('icann.org');
        expect(fetchedNode.next).to.be.null;

        // deep check
        expect(urlList.getHead()).to.deep.equal({
          value: 'news.ycombinator.com',
          next: {
            value: 'mozilla.org',
            next: {
              value: 'eff.org',
              next: {
                value: 'icann.org',
                next: null
              }
            }
          }
        });

        // bookList Tests
        var fetchedNode = bookList.get(0);
        expect(fetchedNode.value).to.equal('Ready Player One');
        expect(fetchedNode.next).to.be.an('object');
        expect(fetchedNode.next.value).to.equal('1982');

        fetchedNode = bookList.get(1);
        expect(fetchedNode.value).to.equal('1982');
        expect(fetchedNode.next).to.be.an('object');
        expect(fetchedNode.next.value).to.equal('Neuromancer');

        fetchedNode = bookList.get(2);
        expect(fetchedNode.value).to.equal('Neuromancer');
        expect(fetchedNode.next).to.be.an('object');
        expect(fetchedNode.next.value).to.equal('Snow Crash');

        fetchedNode = bookList.get(3);
        expect(fetchedNode.value).to.equal('Snow Crash');
        expect(fetchedNode.next).to.be.null;

        // deep check
        expect(bookList.getHead()).to.deep.equal({
          value: 'Ready Player One',
          next: {
            value: '1982',
            next: {
              value: 'Neuromancer',
              next: {
                value: 'Snow Crash',
                next: null
              }
            }
          }
        });
      });
      it('should return `false` if no node is found', function () {
        expect(urlList.get(4)).to.be.false;
        expect(urlList.get(5)).to.be.false;
        expect(bookList.get(4)).to.be.false;
        expect(bookList.get(5)).to.be.false;
      });
    });
  });

  describe('`remove` method', function () {
    var urlList, bookList;

    beforeEach(function () {
      urlList = linkedListGenerator();
      bookList = linkedListGenerator();

      var urlArr = [
        'news.ycombinator.com',
        'mozilla.org',
        'eff.org',
        'icann.org'
      ];

      var bookArr = [
        'Ready Player One',
        '1982',
        'Neuromancer',
        'Snow Crash'
      ];

      urlArr.forEach(function(url) {
        urlList.add(url);
      });
      bookArr.forEach(function(book) {
        bookList.add(book);
      });
    });

    describe('takes an argument', function () {
      it('should remove a node by it\'s index in the Linked List', function () {
        // remove middle node
        urlList.remove(2);
        // retrieve new node at position 2
        var newNodeAtPosition = urlList.get(2);
        expect(newNodeAtPosition.value).to.equal('icann.org');
        expect(newNodeAtPosition.next).to.be.null;
        // deep check
        expect(urlList.getHead()).to.deep.equal({
          value: 'news.ycombinator.com',
          next: {
            value: 'mozilla.org',
            next: {
              value: 'icann.org',
              next: null
            }
          }
        });

        // remove last node
        urlList.remove(2);
        // retrieve new node at position 2
        newNodeAtPosition = urlList.get(2);
        // should not exist!
        expect(newNodeAtPosition).to.be.false;
        // deep check
        expect(urlList.getHead()).to.deep.equal({
          value: 'news.ycombinator.com',
          next: {
            value: 'mozilla.org',
            next: null
          }
        });
      });
      it('should return `false` if a node cannot be found to be removed', function () {
        expect(urlList.remove(9)).to.be.false;
        expect(urlList.remove(4)).to.be.false;
        expect(bookList.remove(4)).to.be.false;
        expect(bookList.remove(6)).to.be.false;
      });
    });
  });

  describe('`insert` method', function () {
    var urlList, bookList;

    beforeEach(function () {
      urlList = linkedListGenerator();
      bookList = linkedListGenerator();

      var urlArr = [
        'news.ycombinator.com',
        'icann.org'
      ];

      var bookArr = [
        'Neuromancer',
        'Snow Crash'
      ];

      urlArr.forEach(function(url) {
        urlList.add(url);
      });
      bookArr.forEach(function(book) {
        bookList.add(book);
      });
    });
    describe('takes two arguments, a `value` and an `index`', function () {
      it('should add a new node at a given index', function () {
        // insert into second position of list
        urlList.insert('mozilla.org', 1);
        expect(urlList.get(0).value).to.be.equal('news.ycombinator.com');
        expect(urlList.get(1).value).to.be.equal('mozilla.org');
        expect(urlList.get(2).value).to.be.equal('icann.org');

        // insert into beginning of list
        bookList.insert('Ready Player One', 0);
        expect(bookList.get(0).value).to.be.equal('Ready Player One');
        expect(bookList.get(1).value).to.be.equal('Neuromancer');
        expect(bookList.get(2).value).to.be.equal('Snow Crash');

        urlList.insert('devleague.com', 1);
        expect(urlList.get(0).value).to.be.equal('news.ycombinator.com');
        expect(urlList.get(1).value).to.be.equal('devleague.com');
        expect(urlList.get(2).value).to.be.equal('mozilla.org');
        expect(urlList.get(3).value).to.be.equal('icann.org');
      });
      it('should return `false` if the index given is a value larger than the List\'s length', function () {
        // urlList has two items, it's max index value is 1
        // inserting to index `2` should return false
        expect(urlList.insert('boingboing.net', 2)).to.be.false;

        // test -1
        expect(bookList.insert('The Stranger', -1)).to.be.false;
      });
    });
  });
});