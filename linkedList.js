/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){

   var head = null;
   var tail = null;
   var length = 0;

   var moduleObject = {

	getLength: function () {

	   return length;

	},

	getHead: function () {

	   return head;

	},

	getTail: function () {

	   return tail;

	},

	add: function (value) {

	   var nodeToAdd = {

		value: value,
		next: null

	   };

	   if (head === null) {

		head = nodeToAdd;
		tail = nodeToAdd;

	   } else {

		tail.next = nodeToAdd;
		tail = nodeToAdd;

	   }

		return nodeToAdd;

		length++;

	},

	remove: function (value) {


	},

	get: function (value) {

	   if (value === 0 || value < 1) {

		return head;

	   } else {

		var currentNode = head;
		var count = 0;

	   while (currentNode.next !== null) {

		currentNode = currentNode.next;
		count++;

		if (count === value) {

		   return currentNode;

		  }

	   }

	 }

	   return false;

	},

	insert : function (value, index){

		}

   };

   return moduleObject;

}

