class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  // Helper functions
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return index * 2 + 1;
  }

  getRightChildIndex(index) {
    return index * 2 + 2;
  }

  swap(index1, index2) {
    const temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  // Heapify functions
  heapifyUp() {
    let currentIndex = this.heap.length - 1;
    while (currentIndex > 0) {
      const parentIndex = this.getParentIndex(currentIndex);
      if (this.heap[currentIndex].priority < this.heap[parentIndex].priority) {
        this.swap(currentIndex, parentIndex);
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  heapifyDown() {
    let currentIndex = 0;
    while (this.getLeftChildIndex(currentIndex) < this.heap.length) {
      const leftChildIndex = this.getLeftChildIndex(currentIndex);
      const rightChildIndex = this.getRightChildIndex(currentIndex);
      let smallerChildIndex = leftChildIndex;

      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex].priority < this.heap[leftChildIndex].priority) {
        smallerChildIndex = rightChildIndex;
      }

      if (this.heap[currentIndex].priority < this.heap[smallerChildIndex].priority) {
        break;
      }

      this.swap(currentIndex, smallerChildIndex);
      currentIndex = smallerChildIndex;
    }
  }

  // Priority Queue operations
  enqueue(item, priority) {
    this.heap.push({ item, priority });
    this.heapifyUp();
  }

  dequeue() {
    if (this.heap.length === 0) {
      return null;
    }

    const minItem = this.heap[0].item;
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapifyDown();

    return minItem;
  }

  peek() {
    return this.heap.length === 0 ? null : this.heap[0].item;
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

// Example usage
const pq = new PriorityQueue();
pq.enqueue("Task 1", 3);
pq.enqueue("Task 2", 1);
pq.enqueue("Task 3", 5);

console.log(pq.dequeue()); // Task 2
console.log(pq.dequeue()); // Task 1
console.log(pq.dequeue()); // Task 3
