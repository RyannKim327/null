class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addNode(value) {
    const newNode = new ListNode(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }

  getLength() {
    let currentNode = this.head;
    let length = 0;

    while (currentNode !== null) {
      length++;
      currentNode = currentNode.next;
    }

    return length;
  }
}

// Example usage:
const list = new LinkedList();
list.addNode(1);
list.addNode(2);
list.addNode(3);
list.addNode(4);
console.log(list.getLength()); // Output: 4
