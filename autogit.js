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

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const dequeuedNode = this.head;

    if (this.head === this.tail) {
      this.tail = null;
    }

    this.head = this.head.next;
    this.size--;

    return dequeuedNode.value;
  }

  isEmpty() {
    return this.size === 0;
  }
}
const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue()); // Output: 1
console.log(queue.dequeue()); // Output: 2

queue.enqueue(4);
console.log(queue.isEmpty()); // Output: false
console.log(queue.dequeue()); // Output: 3
console.log(queue.dequeue()); // Output: 4
console.log(queue.isEmpty()); // Output: true
