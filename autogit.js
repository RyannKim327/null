// Define a Node class to create individual nodes in the linked list
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Define a LinkedList class to manage the linked list
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Method to add a new node to the end of the linked list
  append(data) {
    let newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  // Method to find the length of the linked list
  getLength() {
    let current = this.head;
    let length = 0;

    while (current) {
      length++;
      current = current.next;
    }

    return length;
  }
}

// Create a linked list and add some nodes to it
let linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

// Find the length of the linked list
let length = linkedList.getLength();
console.log("Length of the linked list: " + length);
