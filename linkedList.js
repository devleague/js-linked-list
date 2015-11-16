/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
 //think of Module as a "controller", who has access/control to what
function linkedListGenerator () {
 var head = null;
 var tail = null;
 var length = 0;


 //private variables go here, below is public and returns public
 var newLinkedList = {
   //variables here are 'local' and exist only for duration of instance
   getHead: function () {

   return head;
   },

   getTail: function () {

   return tail;
   },

   add: function (x) {
   //using if and else to check if 'head' has a value since we're creating 'nodes', else == have to recreate a node if head is null
    var node = {
      value: x,
      next: null
    };
    if (head === null) {
      head = node;
      tail = node;
      length++;
    } else {
      tail.next = {
        value: x,
        next: null
      };
      length++;
      tail = tail.next;
    }
    //why out of scope? had to move var node outside if
    return node;
  },

   get: function (index) {

    var currentNode = {
      value: index,
      next: null
    };

    //for loop not the best option, since don't really have an index
    //stepping over: head.next; current.next; tail.next
    //step1: if current exists, set it
    //step2: determine target, e.g. if target is equal to i return current
    if (index >= head && index <= tail) {
      currentNode = head;

      while (currentNode++ < index) {
      currentNode = currentNode.next;
      }
      return currentNode.value;
    } else {
      return false;
      }
   },


   remove: function () {

   },

   insert: function () {
     //similar to 'add' take the current thing and add next to it
     //use 'get ()' and minus/add to determine where to move
   },
  };
   return newLinkedList;
}





