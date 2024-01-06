class Node {
  constructor(data) {
    this.data = data;
    this.next = null; // points to the next node
  }
}

class LinkedList {
  constructor() {
    this.head = null; // points to the first node in the list
    this.tail = null; // points to the last node in the list
  }

  // Function to add a new node at the end of the list
  append(data) {
    const newNode = new Node(data);

    // If the list is empty, make the new node the head and tail
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Otherwise, add the new node after the last node
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // Function to insert a new node at a specific position in the list
  insertAt(data, position) {
    if (position < 0) {
      console.log("Invalid position");
      return;
    }

    const newNode = new Node(data);

    // If position is 0, make the new node the head
    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
      if (!this.tail) {
        this.tail = newNode;
      }
      return;
    }

    let current = this.head;
    let previous = null;
    let count = 0;

    // Traverse the list to find the position to insert the new node
    while (current && count < position) {
      previous = current;
      current = current.next;
      count++;
    }

    // If position exceeds the length of the list, add the new node at the end
    if (!current) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      // Otherwise, insert the new node at the specified position
      newNode.next = current;
      previous.next = newNode;
    }
  }

  // Function to remove a node from the list
  remove(data) {
    let current = this.head;
    let previous = null;

    // Traverse the list to find the node to remove
    while (current) {
      if (current.data === data) {
        // If the node to remove is the head, update the head
        if (previous === null) {
          this.head = current.next;
          // If the list becomes empty, update the tail
          if (this.head === null) {
            this.tail = null;
          }
        } else {
          // Otherwise, remove the node by bypassing it
          previous.next = current.next;
          // If the node to remove is the tail, update the tail
          if (current === this.tail) {
            this.tail = previous;
          }
        }
        return; // Exit the function after removal
      }

      previous = current;
      current = current.next;
    }
  }

  // Function to search for a specific data in the list
  search(data) {
    let current = this.head;

    // Traverse the list to find the data
    while (current) {
      if (current.data === data) {
        return true; // Data found
      }
      current = current.next;
    }

    return false; // Data not found
  }

  // Function to get the length of the list
  length() {
    let current = this.head;
    let count = 0;

    // Traverse the list, counting the nodes
    while (current) {
      count++;
      current = current.next;
    }

    return count;
  }

  // Function to display the list in an array
  toArray() {
    const arr = [];
    let current = this.head;

    // Traverse the list, adding the nodes' data to the array
    while (current) {
      arr.push(current.data);
      current = current.next;
    }

    return arr;
  }
}
const myList = new LinkedList();

myList.append(10);
myList.append(20);
myList.append(30);

console.log(myList.length());  // Output: 3
console.log(myList.toArray()); // Output: [10, 20, 30]

myList.insertAt(15, 1);

console.log(myList.search(20)); // Output: true
console.log(myList.toArray());   // Output: [10, 15, 20, 30]

myList.remove(15);

console.log(myList.search(15)); // Output: false
console.log(myList.toArray());  // Output: [10, 20, 30]
