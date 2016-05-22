/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
  var head = null;
  var tail = null;
  var length = 0;
  // var node = {
  //           value: null,
  //           next: {},
  //         };
  var linkedList = {
    getHead: function(){
              return head;
            },
    getTail: function(){
              var thisNode = head;
              if(!thisNode){
                return null;
              }
              while(thisNode.next !== null){
                thisNode = thisNode.next;
              }
              return thisNode;
            },
    add: function(value){
            var newNode = {
                  value: value,
                  next: null
                  };
            if(head === null && tail === null){
              head = newNode;
              tail = newNode;
            }else{
              tail.next = newNode;
              tail = newNode;
            }
            length++;
            return newNode;
         },
    remove: function(number){
            var index = 0;
            var thisNode = head;
            var prevNode;
            if(thisNode === null){
              return false;
            }
            if(length-1 < number || number < 0)
              return false;

            while(index !== number && thisNode.next !== null){
              prevNode = thisNode;
              thisNode = thisNode.next;
              index++;
            }
            if(index === 0){
              head = thisNode.next;
            }else if(thisNode.next !== null){
              prevNode.next = thisNode.next;
            }else if(thisNode.next === null){
              prevNode.next = null;
            }
            length--;
          },
    get: function(number){
          var index = 0;
          var thisNode = head;
          if(thisNode === null){
            return false;
          }
          if(length-1 < number || number < 0)
            return false;
          for(index; index < number; index++){
            if(thisNode.next !== null)
              thisNode = thisNode.next;
          }
          // while(index !== number && thisNode.next !== null){
          //   thisNode = thisNode.next;
          //   index++;
          // }
          // if(index !== number && thisNode.next === null){
          //   return false;
          // }
          return thisNode;
    },
    insert: function(value, number){

          },
  };
  return linkedList;
}