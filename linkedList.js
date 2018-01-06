/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator() {
    let head = null;
    let tail = null;
    function node(value) {
        return {
            value: value,
            next: null
        }
    }
    function getHead() {
        return head;
    }
    function getTail() {
        return tail;
    }
    function add(value) {
        let newNode = node(value);
        currentNode = head;
        if (currentNode === null) {
            head = newNode;
        } else {
            tail.next = newNode;
        }
        tail = newNode;
        return newNode;
    }

    function get(num) {
        let thisNode = head;
        let index = 0;
        while (thisNode !== null) {
            if (index === num) {
                return thisNode;
            } else {
                index++
            }
            thisNode = thisNode.next;
        }
        if (!thisNode) {
            return false;
        }
        return thisNode;
    }

    function remove(val) {
        let current = get(val);
        let previousNode = get(val - 1);
        if (current === false) {
            return false;
        } else if (current === tail) {
            previousNode.next = null;
            return tail = previousNode;
        } else if (val === 0) {
            return head = current.next;

        } else {
            previousNode.next = current.next;

        }

    }
    function insert(value, index) {
        let current = get(index);
        let previousNode = get(index - 1)
        let newNode = node(value);
        if (current === false) {
            return false;
        } else if (index === 0) {
            newNode.next = head;
            return head = newNode;
        } else {
            newNode.next = current;
           return previousNode.next = newNode;
        }
    }

    return {
        getHead: getHead,
        getTail: getTail,
        add: add,
        remove: remove,
        get: get,
        insert: insert
    };
}




