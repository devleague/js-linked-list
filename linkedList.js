/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */

 function linkedListGenerator() {

    var module = {};
    var list;
    var listLength = 0;

    module.getHead = function() {
      if (list === undefined){ return null; }
      return list;
    };

    module.getTail = function() {
      if (list === undefined){ return null; }
      let testObj = list;
      let num = 0;
      while (testObj.next !== null){
        testObj = testObj.next;
        num++;
      }
      listLength = num;
      return testObj;
    };

    module.add = function(value){
      if (!list) {
        list = { value : value, next: null };
        return list;
      } else {
        let newObj = { value : value, next: null };
        tailObj = this.getTail();
        tailObj.next = newObj;
        return newObj;
      }
    };

    module.get = function(number){
      let testObj = list;
      this.getTail();
      if (listLength < number) {return false; }
      if (number === 0){ return list; }
      for (var i = 0; i < number; i++) {
        testObj = testObj.next;
      }
      return testObj;
    }

    module.remove = function(number){

      if (number === 0){
        list = list.next;
        return;
      }

      counter = 0;
      c = list;
      p = list;

      while (counter < number){
        p = c;
        if (c.next === null){
          return false;
        } else {
          c = c.next;
        }
        counter++;
      }

      p.next = c.next;

    };

    module.insert = function(value, number){

      if (number === 0){
        list = list;
        return;
      }

      counter = 0;
      c = list;
      p = list;

      while (counter < number){
        p = c;
        if (c.next === null){
          return false;
        } else {
          c = c.next;
        }
        counter++;
      }

      p.next = c.next;

    };

    return  module;

}