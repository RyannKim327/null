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
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const removedNode = this.head;
    this.head = this.head.next;

    if (this.isEmpty()) {
      this.tail = null;
    }

    return removedNode.value;
  }

  isEmpty() {
    return this.head === null;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return;
    }

    let currentNode = this.head;
    let values = [];
    while (currentNode) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log("Queue:", values.join(" -> "));
  }
}
const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print();  // Queue: 10 -> 20 -> 30

queue.dequeue();
queue.print();  // Queue: 20 -> 30

console.log(queue.isEmpty());  // false
