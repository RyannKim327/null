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
  
  print() {
    let current = this.head;
    let result = '';
    while (current) {
      result += `${current.data} `;
      current = current.next;
    }
    console.log(result.trim());
  }
}
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print(); // Output: 1 2 3
queue.dequeue();
queue.print(); // Output: 2 3
console.log(queue.peek()); // Output: 2
console.log(queue.getSize()); // Output: 2
console.log(queue.isEmpty()); // Output: false
