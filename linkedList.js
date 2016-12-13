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

  function getHead() {
    return newLinkedList.head;
  }

  function getTail() {
    return newLinkedList.tail;
  }

  function add(value) {

    var newNode = {
      value: value,
      next: null,
      index: 0
    };

    var current = newLinkedList.head;

    //If linkedList is empty
    if (current === null) {
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
    var previousNode = get(number - 1);
    var currentNode = get(number);
    var nextNode = get(number + 1);

    //If at end of list
    if (currentNode.next === null){
      newLinkedList.tail = previousNode;
    }

    //If at head of list
    if (previousNode === false) {
      newLinkedList.head = nextNode;
    }

    //if index of node doesn't exist
    if (number === false) {
      return false;
    }

    else {
      previousNode.next = nextNode;
    }
  }

  /*
  * Function that takes in number value
  * and searches for node with same number value
  * @param number placement of node to be found
  * @return node that matches with number
  * @return false node with number index is not found
  */
  function get(number) {
    var current = newLinkedList.head;
    var index = 0;

    //Iterate through the list if there is more than 1 node
    while(current.next !== null){
      //if first index is number
      if (index === number){
        //return node
        return current;
      }
      //add 1 to index
      index++;
      //change node to be checked to next node
      current = current.next;
    }
    //if index isn't equal to number
    if (index != number) {
      return false;
    }
    //return node
    return current;
  }

  function insert(value, number) {
    var previousNode = get(number - 1);
    var nextNode = get(number);

    var newNode = {
      value: value,
      next: null
    };

    //If at end of list
    if(nextNode === false){
      return false;
    }

    //If at head of list
    if(previousNode === false){
      newNode.next = nextNode;
      newLinkedList.head = newNode;
    }

    //Insert in between
    else {
      newNode.next = nextNode;
      previousNode.next = newNode;
    }
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