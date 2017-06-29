/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
 function linkedListGenerator(){
  var keith = {};


  function getHead(){

   if(keith.value){
    return keith;
  }else{
    return null;
  }
}

function getTail(){
  let node = keith;
  if (node.value){
    while (node.next){
      node = node.next;
    }
    return node;
  }else{
    return null;
  }

}

function add(value){
  let node = keith;
  var tail=getTail();

  if(tail === null){
    node.value = value;
    node.next = null;
    return node;
  }else{
    tail.next = {
      value: value,
      next:null
    };
    return tail.next;
  }
  return null;
}

function get(number){
  let node=keith;
  for(let i=0; i<number; i++){
    if(node.next){
      node=node.next;
    }else{
      return false;
    }
  }
  return node;

}

function remove(number){
  var count=0;
  var prevNode;
  let node=keith;

  if(number === 0){
    keith=node.next;
    return;
  }


  while(count<number){
    if(!node.next){
      return false;
    }

    prevNode=node;
    node=node.next;
    count++;
    console.log(count);
  }

  prevNode.next=node.next;



}
function insert(value, number){

  let current = get(number);

  let previousNode=get(number-1);
   let keith1 = {
    value:value,
    next:null
    };
     if(number === 0){
       keith1.next = current;
        keith=keith1;
     }else if(number < 0){
      return false;
     }else if(current.next === null){
      keith1.next = current;
      previousNode.next = keith1;
      return keith1;

     }else if(current){
      keith1.next = current;
      previousNode.next = keith1;
      return keith1;
    }else{
      return false;
    }

console.log(getTail("icann.org"));







  // console.log("GET HEAD", getHead());


}

return{
  getHead:getHead,
  getTail:getTail,
  add:add,
  get:get,
  remove:remove,
  insert:insert


};
}

var li=linkedListGenerator();
