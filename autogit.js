class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  // Helper function to swap two elements in the heap
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  // Helper function to get the parent index of a node
  parentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  // Helper function to get the left child index of a node
  leftChildIndex(i) {
    return 2 * i + 1;
  }

  // Helper function to get the right child index of a node
  rightChildIndex(i) {
    return 2 * i + 2;
  }

  // Helper function to compare nodes based on their priority
  compare(i, j) {
    return this.heap[i].priority - this.heap[j].priority;
  }

  // Method to insert an element into the priority queue
  insert(value, priority) {
    const node = { value, priority };
    this.heap.push(node);

    let current = this.heap.length - 1;
    let parent = this.parentIndex(current);

    while (current > 0 && this.compare(current, parent) < 0) {
      this.swap(current, parent);
      current = parent;
      parent = this.parentIndex(current);
    }
  }

  // Method to extract and return the element with the highest priority
  extract() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();

    let current = 0;
    let left = this.leftChildIndex(current);
    let right = this.rightChildIndex(current);
    let next;

    while (left < this.heap.length) {
      if (right < this.heap.length && this.compare(right, left) < 0) {
        next = right;
      } else {
        next = left;
      }

      if (this.compare(current, next) < 0) break;

      this.swap(current, next);
      current = next;
      left = this.leftChildIndex(current);
      right = this.rightChildIndex(current);
    }

    return min;
  }

  // Method to check if the priority queue is empty
  isEmpty() {
    return this.heap.length === 0;
  }
}

// Example usage
const pq = new PriorityQueue();
pq.insert('task1', 3);
pq.insert('task2', 1);
pq.insert('task3', 2);

console.log(pq.extract()); // Output: { value: 'task2', priority: 1 }
console.log(pq.extract()); // Output: { value: 'task3', priority: 2 }
console.log(pq.extract()); // Output: { value: 'task1', priority: 3 }
console.log(pq.extract()); // Output: null
