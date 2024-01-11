class PriorityQueue {
  constructor() {
    this.heap = [];
  }
}
enqueue(value, priority) {
  const element = { value, priority };
  this.heap.push(element);
  this.bubbleUp();
}
bubbleUp() {
  let index = this.heap.length - 1;

  while (index > 0) {
    const element = this.heap[index];
    const parentIndex = Math.floor((index - 1) / 2);
    const parent = this.heap[parentIndex];

    if (element.priority >= parent.priority) break;
    
    this.heap[parentIndex] = element;
    this.heap[index] = parent;
    index = parentIndex;
  }
}
dequeue() {
  const min = this.heap[0];
  const last = this.heap.pop();
  
  if (this.heap.length > 0) {
    this.heap[0] = last;
    this.sinkDown(0);
  }
  
  return min;
}
sinkDown(index) {
  const leftChildIndex = 2 * index + 1;
  const rightChildIndex = 2 * index + 2;
  let smallestIndex = index;

  if (leftChildIndex < this.heap.length && this.heap[leftChildIndex].priority < this.heap[smallestIndex].priority) {
    smallestIndex = leftChildIndex;
  }

  if (rightChildIndex < this.heap.length && this.heap[rightChildIndex].priority < this.heap[smallestIndex].priority) {
    smallestIndex = rightChildIndex;
  }

  if (smallestIndex !== index) {
    [this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]];
    this.sinkDown(smallestIndex);
  }
}
const pq = new PriorityQueue();
pq.enqueue('Task 1', 1);
pq.enqueue('Task 2', 3);
pq.enqueue('Task 3', 2);
console.log(pq.dequeue()); // Output: { value: 'Task 1', priority: 1 }
console.log(pq.dequeue()); // Output: { value: 'Task 3', priority: 2 }
console.log(pq.dequeue()); // Output: { value: 'Task 2', priority: 3 }
