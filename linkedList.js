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
  function remove(num) {
    var currentNode = head;
    var nodeToRemove = null;
    var nodeBeforeRemove = null;
    var i = 0;

    if (num === 0){
      nodeToRemove = head;
      head = head.next;
    }
    while (i < num){
      nodeBeforeRemove = currentNode;
      nodeToRemove = currentNode.next;
      currentNode = currentNode.next;
      if (nodeToRemove === null){
        nodeToRemove = false;
        return nodeToRemove;
      }
      i++;
    }
    if (nodeToRemove.next === null){
      nodeBeforeRemove.next = null;
      tail = nodeBeforeRemove;
    }else if (num > 0){
      nodeBeforeRemove.next = nodeToRemove.next;
    }
    return nodeToRemove;
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