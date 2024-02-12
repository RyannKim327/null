class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Insert a new node at the end of the linked list
  insert(data) {
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

  // Remove the first node with the given data from the linked list
  remove(data) {
    if (!this.head) {
      return;
    }

    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    let prev = null;
    while (current) {
      if (current.data === data) {
        prev.next = current.next;
        return;
      }
      prev = current;
      current = current.next;
    }
  }

  // Print the linked list
  display() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}
const list = new LinkedList();
list.insert(5);
list.insert(10);
list.insert(15);
list.display(); // Output: 5, 10, 15

list.remove(10);
list.display(); // Output: 5, 15
