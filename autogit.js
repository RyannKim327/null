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

  addNode(data) {
    const newNode = new Node(data);

    if (!this.head) {
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

// Usage
const ll = new LinkedList();
ll.addNode(1);
ll.addNode(2);
ll.addNode(3);

console.log("Length of the linked list:", ll.getLength());
