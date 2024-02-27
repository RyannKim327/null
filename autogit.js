class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Function to add a new node to the linked list
  addNode(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // Function to reverse the linked list
  reverse() {
    let previous = null;
    let current = this.head;
    let next = null;

    while (current !== null) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }

    this.head = previous;
  }

  // Function to print the linked list
  printList() {
    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
}

// Usage
const list = new LinkedList();
list.addNode(1);
list.addNode(2);
list.addNode(3);

console.log("Original Linked List:");
list.printList();

list.reverse();

console.log("\nReversed Linked List:");
list.printList();
