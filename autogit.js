class QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }
}
enqueue(value) {
    const newNode = new QueueNode(value);

    if (this.rear === null) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }

    this.size++;
  }
dequeue() {
    if (this.front === null) {
      return null;
    }

    const dequeuedValue = this.front.value;

    if (this.front === this.rear) {
      this.front = null;
      this.rear = null;
    } else {
      this.front = this.front.next;
    }

    this.size--;
    return dequeuedValue;
  }
isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  peek() {
    if (this.front === null) {
      return null;
    }

    return this.front.value;
  }
const queue = new Queue();
console.log(queue.isEmpty()); // true

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.getSize()); // 3
console.log(queue.peek()); // 1

console.log(queue.dequeue()); // 1
console.log(queue.dequeue()); // 2

console.log(queue.peek()); // 3
console.log(queue.getSize()); // 1
