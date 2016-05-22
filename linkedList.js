/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
var linkedList = linkedListGenerator;
function linkedListGenerator(){
  var head = null;
  var tail = null;

  return {
    getHead: getHead,
    getTail: getTail,
    add: add,
    remove: remove,
    get: get,
    insert: insert
  };
  function getHead () {
    return head;
  }
  function getTail () {
    return tail;
  }
  function add (value) {
    var addNode = {
      value: value,
      next: null
    };
    if (head === null) {
      head = addNode;
      tail = addNode;
      // console.log(head, tail);
      return addNode;
    } else {
      tail.next = addNode;
      tail = addNode;
    }
  }
  function remove (number) {
    var removeNode = get(number);
    var prevNode = get(number - 1);
    if (number === 0) {
      return head = removeNode.next;
    } else if (removeNode.next === null) {
      prevNode.next = null;
      return tail = prevNode;
    } else if (removeNode === false) {
      return false;
    } else {
    prevNode.next = removeNode.next;
    }
    return prevNode;
  }
  function get (number) {
    var getNode = head;
    var i = 0;
    while (i < number) {
      getNode = getNode.next;
      i++;
      if (getNode === null) {
        return false;
      }
    }
    return getNode;
  }
  function insert (value, number) {
    var prevNode = get(number - 1);
    var nextNode = get(number);
    var insertNode = {
      value: value,
      next: nextNode
    };
    debugger;
    if (number === 0) {
      return head = insertNode;
    } else if (nextNode === false || number < 0) {
      return false;
    }
    return prevNode.next = insertNode;
  }
}