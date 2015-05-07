# Linked List Abstract Data Structure

We will be creating a **module** that helps us generate a **Linked List**. A linked list is a data structure that contains **nodes**. Each **node** has a `value` and a `next` property. The `value` property contains some data that a user-defined when the node was created. The `next` property points to the next **node** in the list, ergo this is how the nodes are linked.

The last **node** in a Linked List will have a `null` value for the `next` property.

## Linked List Example

  {
    value: 'Ready Player One',
    next: {
      value: '1982',
      next: {
        value: 'Neuromancer',
        next: {
          value: 'Snow Crash',
          next: null
        }
      }
    }
  }

## Methods

### getHead()
Returns the value of the first node of a list.

  linkedListExample.getHead(); // returns 'Ready Player One'

### getTail()
Returns the value of the last node of a list.

  linkedListExample.getTail(); // returns 'Snow Crash'

### add(Value)
Takes in any data value and adds a new node to the end of a list. Does not return a value.


### get(Number)
Takes in a Number value and searches for the Nth node in a list and returns the value of that node.

  linkedListExample.get(3); // returns 'Snow Crash'

### remove(Number)
Takes in a Number value and searches for the Nth node in a list and removes it.

`.remove()` returns the value of the node which was removed.

  linkedListExample.remove(2); // returns 'Neuromancer'

### insert(Value, Number)
Inserts the specified element at the specified position in this list. Shifts the element currently at that position (if any) and any subsequent elements to the right.

## Getting Started
1. Fork this repository and clone it from your personal GitHub Account
1. In the Terminal, navigate to the newly created folder for this repository.
1. Install dependencies by running the command: `npm install`
1. Run tests by running the command: `npm test`
1. Your work will be one in the file named: `linkedList.js`
1. Pay attention to the tests for hints on what Method names it expects.
1. There are no stub descriptions in this exercise.
1. Make your tests pass!