class PriorityQueue {
  constructor() {
    this.heap = [];
  }
}
swap(index1, index2) {
  const temp = this.heap[index1];
  this.heap[index1] = this.heap[index2];
  this.heap[index2] = temp;
}
enqueue(element, priority) {
  const newNode = { element, priority };
  this.heap.push(newNode);
  let currentIndex = this.heap.length - 1;

  while (currentIndex > 0) {
    const parentIndex = Math.floor((currentIndex - 1) / 2);
    if (this.heap[parentIndex].priority <= newNode.priority) {
      break;
    }
    this.swap(currentIndex, parentIndex);
    currentIndex = parentIndex;
  }
}
dequeue() {
  if (this.heap.length === 0) {
    return null;
  }
  if (this.heap.length === 1) {
    return this.heap.pop().element;
  }

  const root = this.heap[0];
  this.heap[0] = this.heap.pop();
  let currentIndex = 0;

  while (true) {
    const leftChildIndex = 2 * currentIndex + 1;
    const rightChildIndex = 2 * currentIndex + 2;
    let smallestChildIndex = currentIndex;

    if (
      leftChildIndex < this.heap.length &&
      this.heap[leftChildIndex].priority < this.heap[smallestChildIndex].priority
    ) {
      smallestChildIndex = leftChildIndex;
    }

    if (
      rightChildIndex < this.heap.length &&
      this.heap[rightChildIndex].priority < this.heap[smallestChildIndex].priority
    ) {
      smallestChildIndex = rightChildIndex;
    }

    if (smallestChildIndex === currentIndex) {
      break;
    }

    this.swap(currentIndex, smallestChildIndex);
    currentIndex = smallestChildIndex;
  }

  return root.element;
}
isEmpty() {
  return this.heap.length === 0;
}
const queue = new PriorityQueue();
queue.enqueue("Task 1", 3);
queue.enqueue("Task 2", 1);
queue.enqueue("Task 3", 2);
console.log(queue.dequeue()); // Output: Task 2
console.log(queue.dequeue()); // Output: Task 3
console.log(queue.dequeue()); // Output: Task 1
console.log(queue.isEmpty()); // Output: true
