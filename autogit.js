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
const myList = new LinkedList();
myList.addNode(10);
myList.addNode(20);
myList.addNode(30);
myList.addNode(40);

console.log(myList.getLength()); // Output: 4
