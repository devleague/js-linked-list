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
  function add(Value) {
    if (head === null){
      head = {
        value: Value,
        next: null
      };
      tail = head;
      return head;
    }else{
      tail.next = {
        value: Value,
        next: null
      };
      tail = {
        value: Value,
        next: null
      };
      return tail;
    }
  }
  function remove() {
    // body...
  }
  function get() {
    // body...
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