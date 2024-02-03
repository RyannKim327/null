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

  // Add a new node to the end of the list
  append(data) {
    const newNode = new Node(data);
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

  // Get the length of the linked list
  getLength() {
    let count = 0;
    let current = this.head;
    while (current !== null) {
      count++;
      current = current.next;
    }
    return count;
  }
}

// Create a new linked list
const list = new LinkedList();

// Add nodes to the list
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

// Get the length of the linked list
const length = list.getLength();
console.log(length); // Output: 5
