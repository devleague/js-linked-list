/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
  var head = null;
  var tail = null;
  var length = null;
  var currentNode;

  var newLinkedList = {
    
    getHead: function () {
      return head;
    },

    getTail: function () {
      return tail;
    },

    add: function (index) {
      var newNode = {
        value: index,
        next: null,

      };
      if (head === null) {
        head = newNode;
        tail = newNode;
        length ++;
      } else {
        tail.next = {
          value: index,
          next: null,
        };
      tail = tail.next;
      length ++;
      }
      return newNode;
    },

    remove: function (index) {
      var targetNode = this.get(index);
      var nextNode = this.get(index + 1);
      var previousNode = this.get(index - 1);
      for (var i= 0; i < length; i++) {
        
      }
    },

    get: function (index) {
      currentNode = head;
      for (var i = 0; i < length; i++) {
        if (index === i) {
          return currentNode;
        }
        currentNode = currentNode.next;
        if (index === i) {
          return currentNode;
        }
        if (index > currentNode) {
          return false;
        }
      }
      return currentNode;
    },
      
    insert: function (x, y) {

    }
    

};

  return newLinkedList;
}