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

 function add(item){
  var insert = new node();
  insert.value = item;
    if(head === null){
      head = insert;
      head.next = tail;
      tail = insert;
    }
    else{
      tail.next = insert;
      tail = insert;
    }
    return insert;
 }

  function get(num){

  if(num === 0)
    return head;
  var item = head;
  while(num > 0){
    if(item.next !== null){
      item = item.next;
      num--;
    }
    else
      return false;
  }
  return item;
 }

  function remove(num){
   if(head === null)
    return false;
  if(num === 0){
    console.log(get(0));
    var zeal = head.next;
    head = zeal;
    head.next = zeal.next;
    return;
  }
   var item = null;
     var gogo = null;
   if(get(num) !== false){
    item = get(num);
    gogo = get(num - 1);
   }
   else
    return false;
   if(item === tail){
     tail = gogo;
     tail.next = null;
   }
   else{
     gogo.next = item.next;
     item.next = null;
   }
 }

  var list = {
    getHead:getHead,
    getTail:getTail,
    add:add,
    get:get
  };

  return list;
}