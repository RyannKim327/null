class PriorityQueue {
  constructor() {
    this.heap = [];
  }
}
// Get the parent index of a given index
function getParentIndex(index) {
  return Math.floor((index - 1) / 2);
}

// Get the left child index of a given index
function getLeftChildIndex(index) {
  return 2 * index + 1;
}

// Get the right child index of a given index
function getRightChildIndex(index) {
  return 2 * index + 2;
}

// Swap two elements in the heap given their indices
function swap(heap, i, j) {
  [heap[i], heap[j]] = [heap[j], heap[i]];
}

// Compare two elements in the heap given their indices
function compare(heap, i, j) {
  return heap[i].priority - heap[j].priority;
}

// Perform the heapify operation to maintain the heap property
function heapify(heap, index) {
  const leftChildIndex = getLeftChildIndex(index);
  const rightChildIndex = getRightChildIndex(index);
  let largest = index;

  if (
    leftChildIndex < heap.length &&
    compare(heap, leftChildIndex, largest) > 0
  ) {
    largest = leftChildIndex;
  }

  if (
    rightChildIndex < heap.length &&
    compare(heap, rightChildIndex, largest) > 0
  ) {
    largest = rightChildIndex;
  }

  if (largest !== index) {
    swap(heap, index, largest);
    heapify(heap, largest);
  }
}
class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  // Add an element to the priority queue with a given priority
  enqueue(element, priority) {
    const node = { element, priority };
    this.heap.push(node);
    let index = this.heap.length - 1;
    let parentIndex = getParentIndex(index);

    while (
      index > 0 &&
      compare(this.heap, index, parentIndex) > 0
    ) {
      swap(this.heap, index, parentIndex);
      index = parentIndex;
      parentIndex = getParentIndex(index);
    }
  }

  // Remove and return the element with the highest priority
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    if (this.heap.length === 1) {
      return this.heap.pop().element;
    }

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    heapify(this.heap, 0);

    return root.element;
  }

  // Check if the priority queue is empty
  isEmpty() {
    return this.heap.length === 0;
  }

  // Get the size of the priority queue
  size() {
    return this.heap.length;
  }
}
const pq = new PriorityQueue();
pq.enqueue('Task 1', 3);
pq.enqueue('Task 2', 1);
pq.enqueue('Task 3', 2);

console.log(pq.dequeue()); // Output: Task 2
console.log(pq.dequeue()); // Output: Task 3
console.log(pq.dequeue()); // Output: Task 1
console.log(pq.isEmpty()); // Output: true
console.log(pq.size());    // Output: 0
