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
      //if node was not found in list

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
      //if node was not found in list

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