// Node class to represent each element of the queue
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Queue class with linked list implementation
class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  enqueue(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) {
      this.front = newNode;
    } else {
      this.rear.next = newNode;
    }
    this.rear = newNode;
    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const data = this.front.data;
    this.front = this.front.next;
    this.size--;
    if (this.isEmpty()) {
      this.rear = null;
    }
    return data;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.front.data;
  }

  printQueue() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    } else {
      let current = this.front;
      while (current !== null) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
}

// Example Usage
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.printQueue(); // Output: 1, 2, 3

console.log(queue.dequeue()); // Output: 1

console.log(queue.peek()); // Output: 2

queue.printQueue(); // Output: 2, 3
