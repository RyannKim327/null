class ListNode<T> {
  value: T;
  next: ListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}
class Queue<T> {
  private head: ListNode<T> | null = null; // points to the front
  private tail: ListNode<T> | null = null; // points to the end

  enqueue(value: T): void {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;   // link new node at the end
      this.tail = newNode;        // update tail
    }
  }

  dequeue(): T | null {
    if (!this.head) {
      return null; // queue is empty
    }
    const value = this.head.value;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null; // queue is now empty
    }
    return value;
  }

  peek(): T | null {
    return this.head ? this.head.value : null;
  }

  isEmpty(): boolean {
    return this.head === null;
  }
}
const myQueue = new Queue<number>();
myQueue.enqueue(1);
myQueue.enqueue(2);
console.log(myQueue.dequeue()); // 1
console.log(myQueue.peek());    // 2
console.log(myQueue.isEmpty()); // false
myQueue.dequeue(); 
console.log(myQueue.isEmpty()); // true
