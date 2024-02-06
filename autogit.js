class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  insert(element, priority) {
    const item = { element, priority };
    this.heap.push(item);
    this.heapifyUp();
  }

  peek() {
    return this.heap[0]?.element;
  }

  dequeue() {
    if (this.heap.length === 0) return null;
    const maxItem = this.heap[0];
    const lastItem = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = lastItem;
      this.heapifyDown();
    }
    return maxItem.element;
  }

  heapifyUp() {
    let currentIndex = this.heap.length - 1;
    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      if (this.heap[currentIndex].priority <= this.heap[parentIndex].priority) break;
      [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
      currentIndex = parentIndex;
    }
  }

  heapifyDown() {
    let currentIndex = 0;
    while (true) {
      const leftChildIndex = currentIndex * 2 + 1;
      const rightChildIndex = currentIndex * 2 + 2;
      let maxChildIndex = null;

      if (leftChildIndex < this.heap.length) {
        maxChildIndex = leftChildIndex;
        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex].priority > this.heap[leftChildIndex].priority) {
          maxChildIndex = rightChildIndex;
        }
      }

      if (maxChildIndex === null || this.heap[maxChildIndex].priority <= this.heap[currentIndex].priority) break;

      [this.heap[currentIndex], this.heap[maxChildIndex]] = [this.heap[maxChildIndex], this.heap[currentIndex]];
      currentIndex = maxChildIndex;
    }
  }
}
const pq = new PriorityQueue();
pq.insert("Task 1", 3);
pq.insert("Task 2", 1);
pq.insert("Task 3", 2);

console.log(pq.dequeue()); // Output: Task 2
console.log(pq.dequeue()); // Output: Task 3
console.log(pq.dequeue()); // Output: Task 1
console.log(pq.dequeue()); // Output: null
