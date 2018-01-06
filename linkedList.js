/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator() {
  let head = null;
  let tail = null;

  function add(data) {
    let newNode = node(data);

    if (head === null) {
      head = newNode;
      tail = newNode;
    } else {
      let temp = head;
      while (temp.next !== null) {
        temp = temp.next;
      }

      temp.next = newNode;
      tail = temp.next;
    }
    return newNode;
  }

  function get(number) {
    let temp = head;
    let index = 0;

    while (temp !== null) {
      if (index === number) {
        return temp;
      } else {
        temp = temp.next;
        index++;
      }
    }
    return false;
  }

  function remove(number) {
    let temp = head;
    let prev = null;
    let index = 0;

    while (temp !== null) {
      if (index === number) {
        if (index === 0) {
          head = head.next;
        } else if (temp === tail) {
          prev.next = null;
          tail = prev;
        } else {
          prev.next = temp.next;
        }
        return true;
      }

      prev = temp;
      temp = temp.next;
      index++;
    }

    return false;
  }

  function insert(value, number) {
    let temp = head;
    let prev = null;
    let index = 0;
    let newNode = node(value);

    while (temp !== null) {
      if (index === number) {
        if (index === 0) {
          newNode.next = head;
          head = newNode;
        } else {
          newNode.next = temp;
          prev.next = newNode;
        }

        return;
      }

      prev = temp;
      temp = temp.next;
      index++;
    }

    if (index === number) {
      prev.next = newNode;
      tail = newNode;
    } else {
      return false;
    }
  }

  function getHead() {
    return head;
  }

  function getTail() {
    return tail;
  }

  function node(data) {
    return {
      value: data,
      next: null
    };
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