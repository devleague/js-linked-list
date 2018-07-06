/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator() {
  let head = null;
  let tail = null;

  function getHead() {
    return head;
  };

  function getTail() {
    return tail;
  };

  function add(x) {
    let newNode = {}
    newNode.value = x;
    newNode.next = null;

    if (!head) {
      head = newNode;
      tail = newNode;
    } else {
      tail.next = newNode;
      tail = newNode;
    }
    return tail;
  };

  function remove() { };

  function get(x) {
    let currentNode = head;
    let counter = 0;
    while (counter < x) {
      if (currentNode.next === null) {
        return false
      } else {
        currentNode = currentNode.next;
        counter++
      }
    }
    return currentNode;
  };

  function insert() { };

  return {
    getHead: getHead,
    getTail: getTail,
    add: add,
    remove: remove,
    get: get,
    insert: insert,
  }
}