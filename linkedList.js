/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
  var head = null;
  var tail = null;

  function getHead(){
    return head;
  }

  function getTail(){
    return tail;
  }

  function add(value){
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
      }
        return tail;
  }

  function remove(number){
    var currNode = head;
    var removeNode = null;
    var prevNode = null;
    var i = 0;

    if (number === 0){
      removeNode = head;
      head = head.next;
    }
    while (i < number){
      i++;
      prevNode = currNode;
      removeNode = currNode.next;
      currNode = currNode.next;
        if (removeNode === null){
          return false;
        }
    }
    if(currNode && currNode.next === null){
      prevNode.next = null;
      tail = prevNode;
    }else if (number > 0){
      prevNode.next = removeNode.next;
    }
    return removeNode;
  }

  function get(number){
    var nextNode = head;
    i = 0;
    while (i < number){
      i++;
      nextNode = nextNode.next;
      if (nextNode === null){
        return false;
      }
    }
    return nextNode;
  }


  function insert(value, number){
    var currNode = get(number);
    var prevNode = get(number - 1);
    var insertedNode = {
      value: value,
      next: currNode
    };
    if (number === 0){
      head = insertedNode;
      return head;
    }else if( number < 0 || currNode === false){
      return false;
    }
    prevNode.next = insertedNode;
    return prevNode.next;

  }

    return  {
      getHead: getHead,
      getTail: getTail,
      add: add,
      remove: remove,
      get: get,
      insert: insert
    };



}