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

  function remove(){
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


  function insert(){
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