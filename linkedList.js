/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
		var head = null;
		var tail = null;

		function getHead(){
			return head;
		}

		function getTail(){
			return tail;
		}

		function add(value){
			var currNode = head;
			var newNode = {
				value: value,
				next: null,
			};
			//the case we are adding to an empty list
			if(currNode === null){
				head = newNode;
				tail = newNode;
			}else{
				while(currNode){
					//the case we are adding to a list of size one
					if(currNode.next === null){
						currNode.next = newNode;
						tail = newNode;
						break;
					}
					//the case we are adding to a list of size two or greater
					currNode = currNode.next;
					if(currNode.next === null){
						currNode.next = newNode;
						tail = newNode;
						break;
					}
				}
			}
			return newNode;
		}

		function get(number){
			var count = 0;
			var currNode = head;

			if(currNode === null){
				return false;
			}
			//the while loop keeps running until it reaches null, or no number
			while(count !== number && currNode.next !== null){
				currNode = currNode.next;
				count++;		
			}
			//if there is no number and the currNode.next equals null than it should return false
			if(count !== number && currNode.next === null){
				return false;
			}
			return currNode;

		}

		function remove(number){
			var count = 1;
			//if your removing the head, than head needs to be set at head.next
			if(number === 0){
				var nextNode = head.next;
				head = nextNode;
				return;
			}
			//if we are not removing the head.
			var currNode = head.next;
			var prevNode = head;

			while(currNode.next !== null){
				if(number === count){
					prevNode.next = currNode.next;
					return;
				}
				count++;
				prevNode = currNode;
				currNode = currNode.next;
			}
			if(currNode && currNode.next === null){
				//checking if this is the tail, if that's the case than we are setting prevNode.next to null, so we can set the new tail.
				prevNode.next = null;
				tail = prevNode;
				if(number >= count){
					return false;
				}
				return;
			}


			return false;
		}

		function insert(value,number){
			var count = 0;
			var currNode = head;
			var prevNode;
			var newNode = {
				value:value,
				next:null,
			};

			if(number < 0){
				return false;
			}
			if(number === 0){
				head = newNode;
				newNode.next = currNode;
			}else{
				while(count++ < number){
					prevNode = currNode;
					currNode = currNode.next;
					if(!currNode){
						return false;
					}
				}
				newNode.next = currNode;
				prevNode.next = newNode;
			}
		}
			

		

		return{
			getHead: getHead,
			getTail: getTail,
			add:add,
			get:get,
			remove:remove,
			insert:insert,
		};

}