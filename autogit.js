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
  }
}
enqueue(value) {
  const newNode = new ListNode(value);
  if (this.head === null) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
}
dequeue() {
  if (this.head === null) {
    return null;
  }
  const value = this.head.value;
  this.head = this.head.next;
  if (this.head === null) {
    this.tail = null;
  }
  return value;
}
isEmpty() {
  return this.head === null;
}
