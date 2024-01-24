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
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  addToTail(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length++;
  }

  removeFromTail() {
    if (this.isEmpty()) {
      return undefined;
    }
    let removedValue;
    if (this.head === this.tail) {
      // Only one node in the list
      removedValue = this.head.value;
      this.head = null;
      this.tail = null;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== this.tail) {
        currentNode = currentNode.next;
      }
      removedValue = this.tail.value;
      currentNode.next = null;
      this.tail = currentNode;
    }
    this.length--;
    return removedValue;
  }

  // Other methods like addToHead, removeFromHead, etc. can be added as needed
}
const linkedList = new LinkedList();

linkedList.addToTail(1);
linkedList.addToTail(2);
linkedList.addToTail(3);

console.log(linkedList.removeFromTail()); // Output: 3
console.log(linkedList.removeFromTail()); // Output: 2
console.log(linkedList.removeFromTail()); // Output: 1
