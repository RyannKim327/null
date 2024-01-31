class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  removeFromHead() {
    if (!this.head) {
      return null;
    }

    const value = this.head.value;
    this.head = this.head.next;

    if (!this.head) {
      this.tail = null;
    }

    return value;
  }

  search(value) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  print() {
    let currentNode = this.head;
    const nodes = [];

    while (currentNode) {
      nodes.push(currentNode.value);
      currentNode = currentNode.next;
    }

    console.log(nodes.join(' -> '));
  }
}
const linkedList = new LinkedList();

linkedList.addToTail(10);
linkedList.addToTail(20);
linkedList.addToTail(30);

linkedList.print(); // Output: 10 -> 20 -> 30

console.log(linkedList.search(20)); // Output: Node { value: 20, next: Node { value: 30, next: null } }

console.log(linkedList.removeFromHead()); // Output: 10

linkedList.print(); // Output: 20 -> 30
