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
    return newNode;
  };

  function remove(x) {
    let currentNode = get(x);
    let previousNode = get(x - 1);
    let nextNode = get(x + 1);

    if (x === 0) {
      head = nextNode;
    }
    if (currentNode.next === null) {
      tail = previousNode;
      tail.next = null;
    } else {
      previousNode.next = nextNode;
    }
    return false;
  };

  function get(x) {
    let currentNode = head;
    let counter = 0;
    while (currentNode && counter <= x) {
      if (counter === x) {
        return currentNode;
      } else {
        counter++
        currentNode = currentNode.next;
      }
    }
    return false;
  };

  function insert(data, x) {
    let previousNode = get(x - 1);
    let currentNode = get(x);
    let newNode = {};
    newNode.value = data;

    if (!currentNode) {
      return false;
    } else if (!previousNode) {
      newNode.next = head;
      head = newNode;
    } else {
      newNode.next = currentNode;
      previousNode.next = newNode;
    }
  }
   

  return {
    getHead: getHead,
    getTail: getTail,
    add: add,
    remove: remove,
    get: get,
    insert: insert,
  }
}