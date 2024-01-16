class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  enqueue(data) {
    const newNode = new Node(data);

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

    if (this.head === null) {
      this.tail = null;
    }

    this.size--;

    return removedNode.data;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.head.data;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return;
    }

    let currentNode = this.head;
    let result = "";

    while (currentNode !== null) {
      result += currentNode.data + " ";
      currentNode = currentNode.next;
    }

    console.log(`Queue: ${result}`);
  }
}

// Example usage:
const queue = new Queue();

queue.enqueue("a");
queue.enqueue("b");
queue.enqueue("c");

queue.print(); // Output: Queue: a b c

console.log(queue.dequeue()); // Output: a

console.log(queue.peek()); // Output: b

queue.print(); // Output: Queue: b c
