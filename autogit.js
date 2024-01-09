// Define a Node class to represent individual nodes in the linked list
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Define a LinkedList class to manage the linked list operations
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Add a new node at the end of the linked list
  append(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // Add a new node at the beginning of the linked list
  prepend(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  // Insert a new node at a specified position in the linked list
  insertAt(index, data) {
    if (index === 0) {
      this.prepend(data);
    } else if (index >= this.getLength()) {
      this.append(data);
    } else {
      const newNode = new Node(data);
      let current = this.head;
      let prev = null;

      for (let i = 0; i < index; i++) {
        prev = current;
        current = current.next;
      }

      newNode.next = current;
      prev.next = newNode;
    }
  }

  // Remove the first node in the linked list
  removeFirst() {
    if (this.head === null) {
      return;
    }

    this.head = this.head.next;

    if (this.head === null) {
      this.tail = null;
    }
  }

  // Remove the last node in the linked list
  removeLast() {
    if (this.tail === null) {
      return;
    }

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return;
    }

    let current = this.head;
    while (current.next !== this.tail) {
      current = current.next;
    }
    current.next = null;
    this.tail = current;
  }

  // Remove a node at a specified position in the linked list
  removeAt(index) {
    if (index === 0) {
      this.removeFirst();
    } else if (index >= this.getLength() - 1) {
      this.removeLast();
    } else {
      let current = this.head;
      let prev = null;

      for (let i = 0; i < index; i++) {
        prev = current;
        current = current.next;
      }

      prev.next = current.next;
      current.next = null;
    }
  }

  // Get the value at a specified index in the linked list
  getAt(index) {
    if (index < 0 || index >= this.getLength()) {
      return null;
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current.data;
  }

  // Find the index of a value in the linked list
  findIndex(value) {
    let current = this.head;
    let index = 0;

    while (current !== null) {
      if (current.data === value) {
        return index;
      }

      current = current.next;
      index++;
    }

    return -1;
  }

  // Get the length (number of nodes) of the linked list
  getLength() {
    let current = this.head;
    let length = 0;

    while (current !== null) {
      length++;
      current = current.next;
    }

    return length;
  }

  // Convert the linked list to an array
  toArray() {
    const array = [];
    let current = this.head;

    while (current !== null) {
      array.push(current.data);
      current = current.next;
    }

    return array;
  }

  // Print the linked list in the console
  print() {
    console.log(this.toArray().join(' -> '));
  }
}

// Usage example:
const linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
linkedList.prepend(5);
linkedList.insertAt(2, 15);
linkedList.print(); // Output: 5 -> 10 -> 15 -> 20 -> 30
console.log(linkedList.getAt(3)); // Output: 20
console.log(linkedList.findIndex(15)); // Output: 2
console.log(linkedList.getLength()); // Output: 5
