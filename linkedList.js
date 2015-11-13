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

      return newNode;
    },

    remove: function(x) {

    },

    get: function(x) {
    },

    insert: function(x, y) {

    }
  };
    


  return newLinkedList;

}