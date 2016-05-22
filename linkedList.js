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
    var oldNode = get(number - 1);
    debugger;
    if (number === 0) {
      return head = removeNode.next;
    } else if (removeNode.next === null) {
      oldNode.next = null;
      return tail = oldNode;
    } else if (removeNode === false) {
      return false;
    } else {
    oldNode.next = removeNode.next;
    }
    // while (i <= number) {
    //   removeNode = removeNode.next;
    //   nodeNext = removeNode.next;
    //   if (removeNode === null) {
    //     return false;
    //   } else if (i === number) {
    //     removeNode = nodeNext.next;
    //   }
    //   i++;
    // }
    console.log('Removing: ', removeNode,'New next: ', oldNode.next);
    return oldNode;
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

  }
}