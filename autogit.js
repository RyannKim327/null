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

    let current = this.head;
    while (current.next !== null && current.next.data !== data) {
      current = current.next;
    }

    if (current.next !== null) {
      current.next = current.next.next;

      if (current.next === null) {
        this.tail = current;
      }
    }
  }

  print() {
    let current = this.head;
    const result = [];

    while (current !== null) {
      result.push(current.data);
      current = current.next;
    }

    console.log(result.join(' -> '));
  }
}
const myList = new LinkedList();

myList.append(1);
myList.append(2);
myList.append(3);

myList.prepend(0);

myList.print(); // Output: 0 -> 1 -> 2 -> 3

myList.delete(2);

myList.print(); // Output: 0 -> 1 -> 3
