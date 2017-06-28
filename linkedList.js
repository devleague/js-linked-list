/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
 function linkedListGenerator(){

  var storage = {};

  function print (){
    console.log(storage);
  }
  
  function getHead() {
    if (storage.value){
      return storage;  
    } else {
      return null;
    }
    
  }

  function getTail(){
    var current = storage;
    if (current.value){
      while (current.next){
        current = current.next;
      }
      return current;
    } else {
      return null;
    }
  }

  function add(param){
    var current = storage;

    if (getTail() === null){
      current.value = param;
      current.next = null;
      return current;
    } else {
      while (current.next){
        current = current.next;
      }
      current.next = {
        value: param,
        next: null
      };
      return current.next;
    }
  }
  
  function get(Number){
    var current = storage;
    if (Number === 0){
      return current;
    } else if (Number < 0){
      return false;
    } else {
      for (var i = 1; i <= Number; i++){
        if (current.next){
          current = current.next;
        } else {
          return false;
        }
      }
      return current;
    }
  }

  function remove(Number){
    var prevNode = get((Number - 1));
    var removeNode = get(Number);
    var nextNode = get((Number + 1));

    
    if (removeNode){
      if (prevNode){
        if (nextNode){
          prevNode.next = nextNode;
        } else {
          prevNode.next = null;
        }
      } else {
        storage = nextNode;
      }
    } else {
      return false;
    }
  }


  // ### insert(Value, Number)
  // Inserts the specified element at the specified position in this list. Shifts the element currently at that position (if any) and any subsequent elements to the right.

  function insert(Value, Number){
    var prevNode = get((Number - 1));
    var nextNode = get(Number);

    if (Number < 0){
      return false;
    } else if (Number === 0){
      storage = {
        value: Value,
        next: nextNode
      };
    } else {
      if (nextNode){
        prevNode.next = { 
          value: Value,
          next: nextNode
        };
      } else {
        return false;
      }
    }
  }

  return {
    print: print,
    getHead: getHead,
    getTail: getTail,
    add: add,
    get: get,
    remove: remove,
    insert: insert
  };
}

var example = linkedListGenerator();





