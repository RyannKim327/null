class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.head = null; // pointer to the front of the queue
    this.tail = null; // pointer to the end of the queue
    this.size = 0;
  }
}
enqueue(value) {
  const newNode = new ListNode(value);
  if (this.isEmpty()) {
    this.head = newNode;
  } else {
    this.tail.next = newNode;
  }
  this.tail = newNode;
  this.size++;
}
dequeue() {
  if (this.isEmpty()) {
    return null;
  }
  const value = this.head.value;
  this.head = this.head.next;
  this.size--;
  if (this.isEmpty()) {
    this.tail = null;
  }
  return value;
}
isEmpty() {
  return this.size === 0;
}
class ListNode {
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
    const newNode = new ListNode(value);
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.size++;
  }
  
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    this.size--;
    if (this.isEmpty()) {
      this.tail = null;
    }
    return value;
  }

  isEmpty() {
    return this.size === 0;
  }
}
