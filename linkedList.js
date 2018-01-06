/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator() {
  let head = null;
  let tail = null;


  function getHead() {
    return head
  }

  function getTail() {
    return tail;
  }

  function add(string) {
    let newNode = {
      value: string,
      next: null
    }
    if (head === null) {
      head = newNode;
      tail = newNode;
      return newNode
    } else {
      tail.next = newNode
      tail = newNode
      return newNode
    }
  }

  function get(number) {
    let temp = head;
    let index = 0;
    while (temp !== null) {
      if (index === number) {
        return temp
      }
      index++
      temp = temp.next
    }
    return false
  }


  function remove(number) {
    let temp = head;
    let previous;
    //console.log(temp)
    let index = 0;
    while (temp !== null) {
      if (number === 0 && temp.next) {
        head = temp.next;
        return head
      } else if (number === 0) {
        head = null;
        return head
      } else if (index === number && temp.next === null) {
        previous.next = null;
        tail = previous
        return previous
      } else if (index === number) {
        previous.next = temp.next;
        return previous
      }
      index++;
      previous = temp;
      temp = temp.next;
    }
    return false
  }

  function insert(info, number) {
    let temp = head;
    let previous;
    let index = 0;
    let obj = {
      value: info,
      next: null
    }

   // let getNode = get(number)

    while (temp !== null) {

      if (number === 0 && temp.next) {
        obj.next = temp;
        head = obj;
        return obj;
      } else if (number === 0){
        obj.next = temp;
        head = obj;
        temp.next = null;
        return obj
      } else if (index === number && temp.next === null){
        obj.next = temp;
        previous.next = obj;
        return obj;
      } else if (index === number){
        obj.next = temp;
        previous.next = obj;
        return previous
      }
      index++;
      previous = temp;
      temp = temp.next;
    }
    return false
  }

  return {
    getHead: getHead,
    getTail: getTail,
    add: add,
    get: get,
    remove: remove,
    insert: insert
  }
}