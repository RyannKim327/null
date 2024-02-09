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

  addToEnd(data) {
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

// Example usage:
const linkedList = new LinkedList();
linkedList.addToEnd(1);
linkedList.addToEnd(2);
linkedList.addToEnd(3);
console.log(linkedList.getLength()); // Output: 3
