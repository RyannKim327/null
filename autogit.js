class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  // Add an element with a priority to the queue
  enqueue(element, priority) {
    const item = { element, priority };
    this.heap.push(item);
    this.bubbleUp(this.heap.length - 1);
  }

  // Remove and return the element with the highest priority
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const root = this.heap[0];
    const lastItem = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = lastItem;
      this.sinkDown(0);
    }
    return root.element;
  }

  // Check if the priority queue is empty
  isEmpty() {
    return this.heap.length === 0;
  }

  // Helper method: Move the element up the binary heap
  bubbleUp(index) {
    const element = this.heap[index].element;
    const priority = this.heap[index].priority;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex].priority >= priority) {
        break;
      }
      this.heap[index] = this.heap[parentIndex];
      index = parentIndex;
    }
    this.heap[index] = { element, priority };
  }

  // Helper method: Move the element down the binary heap
  sinkDown(index) {
    const element = this.heap[index].element;
    const priority = this.heap[index].priority;
    const length = this.heap.length;
    while (true) {
      let childIndex = index * 2 + 1;
      if (childIndex >= length) {
        break;
      }
      if (childIndex + 1 < length && this.heap[childIndex + 1].priority > this.heap[childIndex].priority) {
        childIndex++;
      }
      if (this.heap[childIndex].priority <= priority) {
        break;
      }
      this.heap[index] = this.heap[childIndex];
      index = childIndex;
    }
    this.heap[index] = { element, priority };
  }
}
const pq = new PriorityQueue();

pq.enqueue("Task 1", 2);
pq.enqueue("Task 2", 1);
pq.enqueue("Task 3", 3);

console.log(pq.dequeue()); // Output: Task 3
console.log(pq.dequeue()); // Output: Task 1
console.log(pq.dequeue()); // Output: Task 2
console.log(pq.dequeue()); // Output: null (because the queue is empty)
