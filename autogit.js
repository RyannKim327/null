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

  isEmpty() {
    return this.head === null;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  delete(value) {
    if (this.isEmpty()) {
      return;
    }

    if (this.head.value === value) {
      this.head = this.head.next;

      if (this.head === null) {
        this.tail = null;
      }
      return;
    }

    let currentNode = this.head;
    while (currentNode.next !== null && currentNode.next.value !== value) {
      currentNode = currentNode.next;
    }

    if (currentNode.next !== null) {
      currentNode.next = currentNode.next.next;

      if (currentNode.next === null) {
        this.tail = currentNode;
      }
    }
  }

  toArray() {
    const array = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }

  toString() {
    return this.toArray().join(" -> ");
  }
}
const linkedList = new LinkedList();
linkedList.append(3);
linkedList.prepend(2);
linkedList.append(4);
linkedList.prepend(1);

console.log(linkedList.toArray()); // Output: [1, 2, 3, 4]
console.log(linkedList.toString()); // Output: 1 -> 2 -> 3 -> 4

linkedList.delete(3);
console.log(linkedList.toArray()); // Output: [1, 2, 4]
console.log(linkedList.toString()); // Output: 1 -> 2 -> 4
