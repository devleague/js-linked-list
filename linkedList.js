/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
  var head = null;
  var tail = null;
  // var node = {
  //           value: null,
  //           next: {},
  //         };
  var linkedList = {
    getHead: function(){
              return head;
            },
    getTail: function(){
              return tail;
            },
    add: function(value){
            var newNode = {
                  value: null,
                  next: {}
                  };
            newNode.value = value;
            newNode.next = null;
            if(head === null && tail === null){
              head = newNode;
              tail = newNode;
            }else{
              tail = newNode;
            }
            return newNode;
         },
    remove: function(number){

          },
    get: function(number){
          var index = 0;
          var thisNode = head;
          while(index !== number && thisNode === null){
            thisNode = thisNode.next;
            index++;
          }
          return thisNode;
        },
    insert: function(number){

          },
  };
  return linkedList;
}