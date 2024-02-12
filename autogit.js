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

  // Add a new node to the end of the list
  append(data) {
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

  // Insert a new node at a specific position in the list
  insertAt(data, position) {
    const newNode = new Node(data);

    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      let previous = null;
      let count = 0;

      while (count < position) {
        previous = current;
        current = current.next;
        count++;
      }

      previous.next = newNode;
      newNode.next = current;
    }
  }

  // Remove a node from the list
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

    if (current) {
      previous.next = current.next;
    }
  }

  // Display all the nodes in the list
  display() {
    if (!this.head) {
      console.log('List is empty.');
      return;
    }

    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// Usage example
const myList = new LinkedList();
myList.append(10);
myList.append(20);
myList.append(30);
myList.insertAt(15, 1);
myList.remove(20);
myList.display();
