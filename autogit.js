// Node class
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Linked List class
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Adding a new node to the end of the linked list
  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // Inserting a new node at the specified position
  insertAt(position, data) {
    const newNode = new Node(data);

    if (position < 0) {
      console.log("Invalid position");
      return;
    }

    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
      if (!this.tail) {
        this.tail = newNode;
      }
      return;
    }

    let current = this.head;
    let prev = null;
    let count = 0;

    while (current && count < position) {
      prev = current;
      current = current.next;
      count++;
    }

    if (count < position) {
      console.log("Invalid position");
      return;
    }

    prev.next = newNode;
    newNode.next = current;

    if (!current) {
      this.tail = newNode;
    }
  }

  // Removing a node at the specified position
  removeAt(position) {
    if (position < 0) {
      console.log("Invalid position");
      return;
    }

    if (!this.head) {
      console.log("Empty list");
      return;
    }

    if (position === 0) {
      this.head = this.head.next;
      if (!this.head) {
        this.tail = null;
      }
      return;
    }

    let current = this.head;
    let prev = null;
    let count = 0;

    while (current && count < position) {
      prev = current;
      current = current.next;
      count++;
    }

    if (count < position || !current) {
      console.log("Invalid position");
      return;
    }

    prev.next = current.next;

    if (!current.next) {
      this.tail = prev;
    }
  }

  // Displaying the linked list
  display() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// Example usage
const linkedList = new LinkedList();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.insertAt(1, 4);
linkedList.display(); // Output: 1 4 2 3

linkedList.removeAt(2);
linkedList.display(); // Output: 1 4 3
