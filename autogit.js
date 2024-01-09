class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (this.size === 0) {
      return null;
    }
    const removedNode = this.head;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      removedNode.next = null;
    }
    this.size--;
    return removedNode.value;
  }

  peek() {
    if (this.size === 0) {
      return null;
    }
    return this.head.value;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  print() {
    let current = this.head;
    const values = [];
    while (current !== null) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values.join(' -> '));
  }
}

// Usage:

const myQueue = new Queue();

myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);

console.log(myQueue.getSize()); // Output: 3

console.log(myQueue.peek()); // Output: 1

myQueue.print(); // Output: 1 -> 2 -> 3

console.log(myQueue.dequeue()); // Output: 1

myQueue.print(); // Output: 2 -> 3

console.log(myQueue.isEmpty()); // Output: false
