class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    return this.head === null;
  }

  append(data) {
    const newNode = new Node(data);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  prepend(data) {
    const newNode = new Node(data);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  delete(data) {
    if (this.isEmpty()) {
      return;
    }

    if (this.head.data === data) {
      this.head = this.head.next;
      if (this.head === null) {
        this.tail = null;
      }
      return;
    }

    let currentNode = this.head;
    while (currentNode.next !== null && currentNode.next.data !== data) {
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
    let currentNode = this.head;
    const output = [];

    while (currentNode !== null) {
      output.push(currentNode.data);
      currentNode = currentNode.next;
    }

    console.log(output.join(' -> '));
  }
}
const list = new LinkedList();

list.append(5);
list.append(10);
list.prepend(2);
list.append(15);

list.print(); // Output: 2 -> 5 -> 10 -> 15

list.delete(5);

list.print(); // Output: 2 -> 10 -> 15
