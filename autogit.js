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
    let length = 0;
    let current = this.head;

    while (current !== null) {
      length++;
      current = current.next;
    }

    return length;
  }
}

// Example usage
const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);

console.log(list.getLength()); // Output: 3
