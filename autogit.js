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
    this.size--;

    if (this.isEmpty()) {
      this.tail = null;
    }

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
}
const queue = new Queue();
queue.enqueue('a');
queue.enqueue('b');
queue.enqueue('c');
console.log(queue.dequeue()); // Output: 'a'
console.log(queue.peek()); // Output: 'b'
console.log(queue.getSize()); // Output: 2
console.log(queue.isEmpty()); // Output: false
