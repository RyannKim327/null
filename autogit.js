// Define a Node class for creating nodes
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Define a LinkedList class
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Function to add a new node to the end of the linked list
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

  // Function to calculate the length of the linked list
  getLength() {
    let count = 0;
    let current = this.head;

    while (current) {
      count++;
      current = current.next;
    }

    return count;
  }
}

// Create a linked list
let linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);

// Calculate the length of the linked list
let length = linkedList.getLength();
console.log("Length of the linked list is: " + length);
