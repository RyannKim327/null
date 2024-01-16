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
  const element = this.heap[index];

  while (index > 0) {
    const parentIndex = Math.floor((index - 1) / 2);
    const parent = this.heap[parentIndex];

    if (element.priority >= parent.priority) break;

    this.heap[index] = parent;
    index = parentIndex;
  }

  this.heap[index] = element;
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
  const leftChildIdx = 2 * index + 1;
  const rightChildIdx = 2 * index + 2;
  const length = this.heap.length;
  let smallestIdx = index;

  if (leftChildIdx < length && this.heap[leftChildIdx].priority < this.heap[smallestIdx].priority) {
    smallestIdx = leftChildIdx;
  }

  if (rightChildIdx < length && this.heap[rightChildIdx].priority < this.heap[smallestIdx].priority) {
    smallestIdx = rightChildIdx;
  }

  if (smallestIdx !== index) {
    [this.heap[smallestIdx], this.heap[index]] = [this.heap[index], this.heap[smallestIdx]];
    this.sinkDown(smallestIdx);
  }
}
const priorityQueue = new PriorityQueue();

priorityQueue.enqueue('Task 1', 3);
priorityQueue.enqueue('Task 2', 1);
priorityQueue.enqueue('Task 3', 2);

console.log(priorityQueue.dequeue());  // Output: { value: 'Task 2', priority: 1 }
console.log(priorityQueue.dequeue());  // Output: { value: 'Task 3', priority: 2 }
console.log(priorityQueue.dequeue());  // Output: { value: 'Task 1', priority: 3 }
