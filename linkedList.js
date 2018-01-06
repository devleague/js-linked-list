/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator() {
  let count = 0;
  let head = null;
  let tail = null;
  let previous;

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
    let current = head;
    let index = 0;
    while (current !== null) {
      if (index === number) {
        return current
      } 
      index++
      current = current.next
    }
    return false
  }


  function remove(number) {
    console.log('head',head)
    let temp = head;
    let index = 0;
    let previous;
    while (temp !== null){
      if (index === number) {
      previous = temp;
      console.log('temp', temp)
      temp = temp.next;
      console.log('newTemp', temp)
      previous.next = temp.next;
      console.log('previous', previous)
      return temp
      }
      index++
    }
    return false
  }

  function insert(value, number) {

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