class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(data) {
    const newNode = new Node(data);

    if (!this.rear) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }

  dequeue() {
    if (!this.front) {
      return null;
    }

    const dequeuedItem = this.front.data;
    this.front = this.front.next;

    if (!this.front) {
      this.rear = null;
    }

    return dequeuedItem;
  }

  peek() {
    if (!this.front) {
      return null;
    }

    return this.front.data;
  }

  isEmpty() {
    return this.front === null;
  }

  printQueue() {
    let current = this.front;
    const elements = [];

    while (current) {
      elements.push(current.data);
      current = current.next;
    }

    console.log(elements.join(' '));
  }
}

// Example Usage
const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.printQueue(); // Output: 1 2 3

console.log(queue.dequeue()); // Output: 1

queue.printQueue(); // Output: 2 3

console.log(queue.peek()); // Output: 2
