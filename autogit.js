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

    const dequeuedValue = this.head.value;
    this.head = this.head.next;
    this.size--;

    if (this.size === 0) {
      this.tail = null;
    }

    return dequeuedValue;
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

  printQueue() {
    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
}

// Example usage:
const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log("Queue:");
queue.printQueue();

console.log("Dequeue:", queue.dequeue());

console.log("Peek:", queue.peek());

console.log("Queue after dequeue:");
queue.printQueue();
