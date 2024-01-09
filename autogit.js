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
  }
}
enqueue(value) {
  const newNode = new Node(value);
  if (this.head === null) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
}
dequeue() {
  if (this.head === null) {
    return null;
  }
  const dequeuedValue = this.head.value;
  this.head = this.head.next;
  if (this.head === null) {
    this.tail = null;
  }
  return dequeuedValue;
}
isEmpty() {
  return this.head === null;
}
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
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    if (this.head === null) {
      return null;
    }
    const dequeuedValue = this.head.value;
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    }
    return dequeuedValue;
  }

  isEmpty() {
    return this.head === null;
  }
}

// Example usage:
const queue = new Queue();
console.log(queue.isEmpty()); // true

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.isEmpty()); // false

console.log(queue.dequeue()); // 10
console.log(queue.dequeue()); // 20
console.log(queue.dequeue()); // 30
console.log(queue.dequeue()); // null
console.log(queue.isEmpty()); // true
