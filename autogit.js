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

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  dequeue() {
    if (!this.head) {
      return null;
    }

    const dequeuedNode = this.head;

    if (this.head === this.tail) {
      this.tail = null;
    }

    this.head = this.head.next;
    dequeuedNode.next = null;
    this.size--;

    return dequeuedNode.value;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  getFront() {
    return this.head ? this.head.value : null;
  }

  getRear() {
    return this.tail ? this.tail.value : null;
  }

  printQueue() {
    let current = this.head;
    const elements = [];

    while (current) {
      elements.push(current.value);
      current = current.next;
    }

    console.log(elements.join(' '));
  }
}
const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

queue.printQueue(); // Output: 1 2 3 4

console.log('Front:', queue.getFront()); // Output: 1
console.log('Rear:', queue.getRear()); // Output: 4

queue.dequeue();
queue.dequeue();

queue.printQueue(); // Output: 3 4

console.log('Size:', queue.getSize()); // Output: 2
console.log('Is Empty:', queue.isEmpty()); // Output: false
