class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null; // Points to the first node in the list
    this.tail = null; // Points to the last node in the list
  }

  isEmpty() {
    return this.head === null;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  append(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  delete(value) {
    if (this.isEmpty()) {
      return;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      if (this.head === null) {
        this.tail = null;
      }
      return;
    }

    let currentNode = this.head;
    while (currentNode.next !== null && currentNode.next.value !== value) {
      currentNode = currentNode.next;
    }

    if (currentNode.next !== null) {
      currentNode.next = currentNode.next.next;
      if (currentNode.next === null) {
        this.tail = currentNode;
      }
    }
  }

  print() {
    const values = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(values.join(' -> '));
  }
}
const list = new LinkedList();

list.append(10);
list.append(20);
list.prepend(5);
list.append(30);
list.print(); // Output: 5 -> 10 -> 20 -> 30

list.delete(20);
list.print(); // Output: 5 -> 10 -> 30

list.delete(5);
list.delete(30);
list.print(); // Output: 10
