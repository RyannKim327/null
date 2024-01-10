// Create a class for a linked list node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Create a class for the queue using a linked list
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Add an element to the end of the queue
  enqueue(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  // Remove and return the element at the front of the queue
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const removedNode = this.head;

    if (this.head === this.tail) {
      this.tail = null;
    }

    this.head = this.head.next;
    this.length--;

    return removedNode.value;
  }

  // Return the element at the front of the queue without removing it
  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.head.value;
  }

  // Check if the queue is empty
  isEmpty() {
    return this.length === 0;
  }

  // Get the size of the queue
  size() {
    return this.length;
  }

  // Print the elements of the queue
  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    } else {
      let current = this.head;
      let elements = [];
      while (current) {
        elements.push(current.value);
        current = current.next;
      }
      console.log(elements.join(" -> "));
    }
  }
}

// Example usage
const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print(); // Output: 1 -> 2 -> 3

console.log(queue.dequeue()); // Output: 1
console.log(queue.peek()); // Output: 2
console.log(queue.size()); // Output: 2
console.log(queue.isEmpty()); // Output: false

queue.print(); // Output: 2 -> 3
