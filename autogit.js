// Define the Node class
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// Define the LinkedList class
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Function to add a new node to the linked list
  addNode(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // Function to find the length of the linked list
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

// Create a new linked list
const ll = new LinkedList();
ll.addNode(1);
ll.addNode(2);
ll.addNode(3);

// Find the length of the linked list
const length = ll.getLength();
console.log("Length of the linked list: ", length);
