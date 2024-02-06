// Define a class for the List Node
class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Define a class for the Linked List
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Add a node to the end of the list
  append(data) {
    const newNode = new ListNode(data);

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

  // Remove a node with the given data from the list
  remove(data) {
    if (!this.head) {
      return;
    }

    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    let previous = null;

    while (current && current.data !== data) {
      previous = current;
      current = current.next;
    }

    if (!current) {
      return;
    }

    previous.next = current.next;
  }

  // Print the list
  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// Example Usage
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.print(); // Output: 1 2 3
list.remove(2);
list.print(); // Output: 1 3
