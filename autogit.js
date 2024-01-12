class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
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
    const value = this.head.value;
    this.head = this.head.next;
    if (this.isEmpty()) {
      this.tail = null;
    }
    this.size--;
    return value;
  }

  peek() {
    return this.isEmpty() ? null : this.head.value;
  }

  print() {
    let current = this.head;
    const values = [];
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values.join(' -> '));
  }
}

class Queue {
  constructor() {
    this.list = new LinkedList();
  }
  
  isEmpty() {
    return this.list.isEmpty();
  }

  enqueue(value) {
    this.list.enqueue(value);
  }

  dequeue() {
    return this.list.dequeue();
  }

  peek() {
    return this.list.peek();
  }

  print() {
    this.list.print();
  }
}

// Example usage
const queue = new Queue();

queue.enqueue('apple');
queue.enqueue('banana');
queue.enqueue('cherry');

queue.print(); // Output: apple -> banana -> cherry

console.log(queue.dequeue()); // Output: apple
console.log(queue.peek()); // Output: banana

queue.print(); // Output: banana -> cherry
