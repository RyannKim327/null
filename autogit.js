class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Method to reverse the linked list
  reverse() {
    let prev = null;
    let current = this.head;
    let next = null;

    while (current) {
      next = current.next; // Store the next node
      current.next = prev; // Reverse the current node's pointer
      prev = current; // Move prev to current node
      current = next; // Move current to next node
    }

    this.head = prev; // Reset the head to the last node
  }

  // Method to add a new node to the linked list
  add(value) {
    const newNode = new Node(value);

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
  
  // Method to display the linked list
  display() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

// Example usage
const linkedList = new LinkedList();

linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);

console.log("Original Linked List:");
linkedList.display();

linkedList.reverse();

console.log("Reversed Linked List:");
linkedList.display();
