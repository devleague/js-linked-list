/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
  var head = null;
  var tail = null;
  var length = 0;

  var newLinkedList = {
    
    getHead: function() {
      return head;
    },

    getTail: function() {
      return tail;
    },

    add: function(x) {
      var newNode = {
        value: x,
        next: null,
      };
      if(head === null) {
        head = newNode;
        tail = newNode;
      } else {
        tail = newNode;
      }
      length ++;
      return newNode;
    },

    remove: function(x) {

    },

    get: function(x) {
      for(var i = 0; i <= length; i++);
      var listIndex = i;
    },

    insert: function(x, y) {

    }
  };
    


  return newLinkedList;

}