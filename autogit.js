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
  
  removeFromTail() {
    if (!this.head) {
      return null;
    }
    
    let currentNode = this.head;
    let previousNode = null;

    while (currentNode.next) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    
    if (previousNode) {
      previousNode.next = null;
      this.tail = previousNode;
    } else {
      this.head = null;
      this.tail = null;
    }

    return currentNode.value;
  }
  
  print() {
    let currentNode = this.head;
    const values = [];

    while (currentNode) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
    
    console.log(values.join(' -> '));
  }
}
const list = new LinkedList();

list.addToTail(5);
list.addToTail(10);
list.addToTail(15);
list.print(); // Output: 5 -> 10 -> 15

list.removeFromTail();
list.print(); // Output: 5 -> 10
