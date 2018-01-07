/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator() {

  // Declare let for head and tail
  let head = null;
  let tail = null;

  function getHead() {
    return head;
  };

  function getTail() {
    return tail;
  };

  //Helper function for a newNode
  function newNode1(val) {
    return {
      value: val,
      next: null,
    }
  };

  function add(val) {
    let newNode = newNode1(val); // assign variable for newNode function

    if (head === null) { // head is a thing, so keep going
      head = newNode; // assign global variable head to newNode
      tail = newNode; // assign global variable tail to newNode in order to manipulate next tag
    } else {
      let current = head; // assign current to head (which was newNode)
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode; // update current tag is now attached to newNode
      tail = newNode; // update linked list to point tail to newNode
    }
    return newNode; // 
  };

  function get(num) {
    let current = head;
    let index = 0;

    while (current !== null) {
      if (index === num) {
        return current;
      } else {
        current = current.next;
        index++;
      }
    }
    return false;
  };

  function remove(num) {
    let current = head; // assign variable to a current, which always starts at head
    let index = 0;
    let prev = null;

    while (current !== null) {
      if (index === num) { // found index, remove current node by assigning to prev node
        if (index === 0) { // test for case 1: head as target node
          head = head.next;
        } else if (current === tail) { //test for case 2: tail as target
          prev.next = null;
          tail = prev;
        } else { //test for case 3: middle nodes(s) as target
          prev.next = current.next
        }
        prev = current;
        current = current.next;
        index++;
      }
    }
    return false;
  };

  function insert(value, num) {
    let newNode = newNode1(val);
    let current = head;
    let prev = null;
    let index = 0;

    while (current !== null) {
      if (index === num) {
        if (index === 0) {
          newNode.next = head;
          head = newNode;
        } else {
          newNode.next = current;
          prev.next = newNode
        }
        return;
      }
      prev = current;
      temp = temp.next;
      index++;
    }
  };

  return {
    getHead: getHead,
    getTail: getTail,
    add: add,
    get: get,
    remove: remove,
    insert: insert,
  }
};