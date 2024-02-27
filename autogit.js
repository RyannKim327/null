// Define the Node class
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
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

  // Function to find the middle element of the linked list
  findMiddleElement() {
    let slow = this.head;
    let fast = this.head;
    
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    
    return slow.data;
  }
}

// Example usage
const list = new LinkedList();
list.addNode(1);
list.addNode(2);
list.addNode(3);
list.addNode(4);
list.addNode(5);

console.log(list.findMiddleElement()); // Output: 3
