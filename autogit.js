class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  // Priority queue methods go here
}
enqueue(element, priority) {
  const item = { element: element, priority: priority };
  this.heap.push(item);
  this.bubbleUp();
}
bubbleUp() {
  let index = this.heap.length - 1;
  while (index > 0) {
    let parentIndex = Math.floor((index - 1) / 2);
    if (this.heap[index].priority >= this.heap[parentIndex].priority) {
      break;
    }
    [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
    index = parentIndex;
  }
}
dequeue() {
  if (this.heap.length === 0) {
    return null;
  }
  if (this.heap.length === 1) {
    return this.heap.pop().element;
  }
  const root = this.heap[0].element;
  this.heap[0] = this.heap.pop();
  this.bubbleDown();
  return root;
}
bubbleDown() {
  let index = 0;
  const length = this.heap.length;
  const element = this.heap[index];

  while (true) {
    let leftChildIndex = 2 * index + 1;
    let rightChildIndex = 2 * index + 2;
    let swapIndex = null;

    if (leftChildIndex < length) {
      if (this.heap[leftChildIndex].priority < element.priority) {
        swapIndex = leftChildIndex;
      }
    }

    if (rightChildIndex < length) {
      if (
        (swapIndex === null && this.heap[rightChildIndex].priority < element.priority) ||
        (swapIndex !== null && this.heap[rightChildIndex].priority < this.heap[leftChildIndex].priority)
      ) {
        swapIndex = rightChildIndex;
      }
    }

    if (swapIndex === null) {
      break;
    }

    this.heap[index] = this.heap[swapIndex];
    this.heap[swapIndex] = element;
    index = swapIndex;
  }
}
const pq = new PriorityQueue();
pq.enqueue("Task 1", 5);
pq.enqueue("Task 2", 2);
pq.enqueue("Task 3", 8);

console.log(pq.dequeue()); // Output: Task 2
console.log(pq.dequeue()); // Output: Task 1
console.log(pq.dequeue()); // Output: Task 3
