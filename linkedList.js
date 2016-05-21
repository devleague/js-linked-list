/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
  var head = null;
  var tail = null;
  var node = function() {
    this.value = null;
    this.next = null;
  };

 function getHead(){
  return head;
 }
 function getTail(){
  return tail;
 }
  var list = {
    getHead:getHead,
    getTail:getTail
  };

  return list;
}