/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
var linkedListGenerator = function (){

  var newLinkedList = {
    head: null,
    tail: null
  };

  var node = {
  value: null,
  next: null
  };

  function getHead() {
    return newLinkedList.head;
  }

  function getTail() {
    return newLinkedList.tail;
  }

  function add(value) {

    var newNode = {
    value: value,
    next: null
    }, current = newLinkedList.head;

    //If linkedList is empty
    if (newLinkedList.head === null) {
      newLinkedList.head = newNode;
      newLinkedList.tail = newNode;
    }
    //while linked list is not empty
    else {
      // while you have not reached the end
      while(current.next !== null){
        current = current.next;
      }
      newLinkedList.tail = newNode;
      current.next = newNode;
    }
    return newNode;
  }

  function remove(number) {

  }

  /*
  * Function that takes in number value
  * and searches for node with same number value
  * @param number placement of node to be found
  * @return node that matches with number
  */
  function get(number) {
    var newNode = {
    value: null,
    next: null,
    number: 0
    }, current = newLinkedList.head;

    var count = 0;

    while(current.next !== null){
      if (count === number){
        return current;
      }
      count++;
      current = current.next;
    }
    return newNode;
  }

  function insert(value, number) {

  }

  return {
    linkedList: newLinkedList,
    getHead: getHead,
    getTail: getTail,
    add: add,
    remove: remove,
    get: get,
    insert: insert
  };
};