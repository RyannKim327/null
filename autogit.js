class LinkedListNode {
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
    const newNode = new LinkedListNode(value);

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
      console.log("Queue is empty");
      return null;
    }

    const dequeuedNode = this.head;
    this.head = this.head.next;

    if (this.head === null) {
      this.tail = null;
    }

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
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return null;
    }

    return this.head.value;
  }

  getRear() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return null;
    }

    return this.tail.value;
  }

  printQueue() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return;
    }

    let currentNode = this.head;
    let result = "";

    while (currentNode) {
      result += currentNode.value + " ";
      currentNode = currentNode.next;
    }

    console.log("Queue: " + result.trim());
  }
}
const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.printQueue(); // Output: Queue: 10 20 30

console.log(queue.getFront()); // Output: 10
console.log(queue.getRear()); // Output: 30

queue.dequeue();
queue.printQueue(); // Output: Queue: 20 30

console.log(queue.getSize()); // Output: 2
console.log(queue.isEmpty()); // Output: false
