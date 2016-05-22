/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
  // private variables
  var head = null;
  var tail = null;

  // private methods
  function getHead() {
    return head;
  }
  function getTail() {
    return tail;
  }
  function add(value) {
    if (head === null){
      head = {
        value: value,
        next: null
      };
      tail = head;
      return head;
    }else{
      tail.next = {
        value: value,
        next: null
      };
      tail = tail.next;
      return tail;
    }
  }
  function remove() {
    // body...
  }
  function get(num) {
    var currentNode = head;
    i = 0;
    while (i < num){
      currentNode = currentNode.next;
      if (currentNode === null){
        currentNode = false;
        break;
      }
      i++;
    }
    return currentNode;
  }
  function insert() {
    // body...
  }

  // publicly available
  return {
    getHead: getHead,
    getTail: getTail,
    add: add,
    remove: remove,
    get: get,
    insert: insert
  };
}