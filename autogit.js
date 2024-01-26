// Define class for a single node in the linked list
class Node {
  constructor(data) {
    this.data = data; // Data stored in the node
    this.next = null; // Reference to the next node in the list
  }
}

// Define class for linked list
class LinkedList {
  constructor() {
    this.head = null; // Reference to the first node in the list
    this.tail = null; // Reference to the last node in the list
  }

  // Method to add a new node to the end of the list
  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      // If the list is empty, set the new node as both head and tail
      this.head = newNode;
      this.tail = newNode;
    } else {
      // If the list is not empty, append the new node after the tail
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // Method to insert a new node at a specific position
  insertAt(data, position) {
    if (position < 0 || position > this.getLength()) {
      // Invalid position
      return false;
    }

    const newNode = new Node(data);

    if (position === 0) {
      // If inserting at the beginning, update head
      newNode.next = this.head;
      this.head = newNode;
      if (!this.tail) {
        this.tail = newNode;
      }
    } else if (position === this.getLength()) {
      // If inserting at the end, update tail
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      // If inserting at any other position, find the appropriate position and insert
      let currentNode = this.head;
      let previousNode = null;
      let currentPosition = 0;

      while (currentPosition < position) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        currentPosition++;
      }

      previousNode.next = newNode;
      newNode.next = currentNode;
    }

    return true;
  }

  // Method to remove a node at a specific position
  removeAt(position) {
    if (position < 0 || position >= this.getLength()) {
      // Invalid position
      return false;
    }

    let currentNode = this.head;
    let previousNode = null;
    let currentPosition = 0;

    if (position === 0) {
      // If removing the first node, update head
      this.head = currentNode.next;
      if (!this.head) {
        this.tail = null;
      }
    } else {
      // If removing any other node, find the appropriate position and remove
      while (currentPosition < position) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        currentPosition++;
      }

      previousNode.next = currentNode.next;
      if (currentPosition === this.getLength() - 1) {
        // If removing the last node, update tail
        this.tail = previousNode;
      }
    }

    return true;
  }

  // Method to get the length of the list
  getLength() {
    let count = 0;
    let currentNode = this.head;

    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }

    return count;
  }

  // Method to print the list
  print() {
    let currentNode = this.head;
    let listString = '';

    while (currentNode) {
      listString += currentNode.data + ' -> ';
      currentNode = currentNode.next;
    }

    listString += 'null';
    console.log(listString);
  }
}
// Create a new linked list
const list = new LinkedList();

// Append nodes to the list
list.append(5);
list.append(10);
list.append(15);

// Print the list
list.print(); // Output: 5 -> 10 -> 15 -> null

// Insert a node at a specific position
list.insertAt(8, 1);

// Print the list
list.print(); // Output: 5 -> 8 -> 10 -> 15 -> null

// Remove a node at a specific position
list.removeAt(2);

// Print the list
list.print(); // Output: 5 -> 8 -> 15 -> null

// Get the length of the list
console.log(list.getLength()); // Output: 3
