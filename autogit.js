class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const newNode = new Node(value);

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

  getLength() {
    let length = 0;
    let current = this.head;

    while (current !== null) {
      length++;
      current = current.next;
    }

    return length;
  }
}

// Example usage:
const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);

console.log(list.getLength()); // Output: 3
