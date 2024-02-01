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

    const removedNode = this.head;
    this.head = this.head.next;
    removedNode.next = null;

    if (this.head === null) {
      this.tail = null;
    }

    this.size--;

    return removedNode.value;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.head.value;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return;
    }

    let currentNode = this.head;
    while (currentNode !== null) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}
const queue = new Queue();
console.log(queue.isEmpty()); // true

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.getSize()); // 3
console.log(queue.peek()); // 10

queue.print();
// Output:
// 10
// 20
// 30

console.log(queue.dequeue()); // 10
console.log(queue.getSize()); // 2

console.log(queue.dequeue()); // 20
console.log(queue.dequeue()); // 30
console.log(queue.isEmpty()); // true
