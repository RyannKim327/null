class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  // Helper functions for getting parent, left child, and right child indices
  parentIndex(i) { return Math.floor((i - 1) / 2); }
  leftChildIndex(i) { return 2 * i + 1; }
  rightChildIndex(i) { return 2* i + 2; }

  // Helper functions for swapping elements in the heap
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  // Helper function to heapify the heap
  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0 && this.heap[index][0] < this.heap[this.parentIndex(index)][0]) {
      this.swap(index, this.parentIndex(index));
      index = this.parentIndex(index);
    }
  }

  heapifyDown() {
    let index = 0;
    while (this.leftChildIndex(index) < this.heap.length) {
      let smallerChildIndex = this.leftChildIndex(index);
      if (this.rightChildIndex(index) < this.heap.length && this.heap[this.rightChildIndex(index)][0] < this.heap[smallerChildIndex][0]) {
        smallerChildIndex = this.rightChildIndex(index);
      }
      if (this.heap[index][0] < this.heap[smallerChildIndex][0]) {
        break;
      } else {
        this.swap(index, smallerChildIndex);
      }
      index = smallerChildIndex;
    }
  }

  // Insert an element into the priority queue
  insert(item, priority) {
    this.heap.push([priority, item]);
    this.heapifyUp();
  }

  // Remove and return the element with the highest priority
  extractMin() {
    if (this.heap.length === 0) {
      return null;
    }
    if (this.heap.length === 1) {
      return this.heap.pop()[1];
    }

    const min = this.heap[0][1];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return min;
  }

  // Check if the priority queue is empty
  isEmpty() {
    return this.heap.length === 0;
  }
}

// Example Usage
const priorityQueue = new PriorityQueue();

priorityQueue.insert("Task 1", 3);
priorityQueue.insert("Task 2", 1);
priorityQueue.insert("Task 3", 2);

while (!priorityQueue.isEmpty()) {
  console.log(priorityQueue.extractMin());
}
