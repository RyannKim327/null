class LinkedListNode {
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
  
  enqueue(data) {
    const newNode = new LinkedListNode(data);
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
    const data = this.head.data;
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    }
    this.size--;
    return data;
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
    return this.head.data;
  }
}
const queue = new Queue();

console.log(queue.isEmpty());   // Output: true

queue.enqueue(1);                // Enqueue elements
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.getSize());    // Output: 3
console.log(queue.isEmpty());    // Output: false
console.log(queue.peek());        // Output: 1

console.log(queue.dequeue());    // Output: 1
console.log(queue.dequeue());    // Output: 2
console.log(queue.getSize());    // Output: 1
