/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
 //think of Module as a "controller", who has access/control to what
function linkedListGenerator () {
 var head = null;
 var tail = null;
 var length = 10;


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
    if (head === null) {
    var node = {
      value: x,
      next: null
    };
    head = node;
    tail = node;
    length++;
    }
    //if if statement returns null, need to recreate a node in else statement
    else {
    head.next = {
      value: x,
      next: null
    };
    length++;
    tail = head.next;
    }
    //why out of scope?
    return node;
  },

   get: function (newLinkedList) {

    for (var i=0; i < newLinkedList.length; i++) {
      if (i === node) {
        return node;
      }
        else if (i !== node){
         return false;
       }
      }
     },

   remove: function () {

   },
   insert: function () {

   },
  };
 return newLinkedList;
}



// return makeList;
// };

