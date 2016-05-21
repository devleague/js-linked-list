/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
  var head = null;
  var tail = null;

  var newLinkedList = {

    getHead: function() {
      return head;
    },

    getTail: function() {
      return tail;
    },

    add: function(value) {
      var newNode = {
        value: value,
        next: null
      };
      if (head === null) {
        head = newNode;
        tail = newNode;
      }
      tail = newNode;
      return tail;
    },

    remove: function() {

    },

    get: function(index) {
      var currentNode = head;
      if (index < 0) {
        return false;
      }
      for (var i = 0; i < index; i++) {
        if (currentNode.next === null) {
          return false;
        }
        currentNode = currentNode.next;
      }
      return currentNode;
    },

    insert: function() {

    }

  };
  return newLinkedList;
}
