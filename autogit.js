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

  getLength() {
    let current = this.head;
    let length = 0;

    while (current !== null) {
      length++;
      current = current.next;
    }

    return length;
  }
}

// Usage example
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);

console.log(list.getLength()); // Output: 3
