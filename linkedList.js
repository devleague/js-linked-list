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

    add: function(value) {
      var newNode = {
        value: value,
        next: null
      };
      if (head === null) {
        head = newNode;
        tail = newNode;
        length ++;
      } else {
        tail.next = newNode;
        tail = newNode;
      }
      return newNode;
    },

    remove: function(index) {
      var currNode = this.get(index);
      var prevNode = this.get(index - 1);
      if (index === 0) {
        return head = currNode.next;
      } else if (currNode.next === null) {
        prevNode.next = null;
        return tail = prevNode;
      } else if (currNode === false) {
        return false;
      } else {
        prevNode.next = currNode.next;
      }
      return prevNode;
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

    insert: function(value, index) {
      var currNode = this.get(index);
      var prevNode = this.get(index - 1);
      var insertNode = {
        value: value,
        next: currNode
      };
      if (index === 0) {
        return head = insertNode;
      } else if (currNode === false || index < 0) {
        return false;
      }
      return prevNode.next = insertNode;
    }

  };
  return newLinkedList;
}
