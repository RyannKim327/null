class BinaryHeap {
  constructor() {
    this.heap = [];
  }

  // Helper method to get the parent index
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  // Helper method to get the left child index
  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  // Helper method to get the right child index
  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  // Helper method to swap two elements in the heap
  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }

  // Helper method to compare the priority of two elements
  compare(a, b) {
    // Use a custom comparison logic here
    return a.priority - b.priority;
  }

  // Add an element to the priority queue
  enqueue(element) {
    this.heap.push(element);
    this.heapifyUp(this.heap.length - 1);
  }

  // Remove and return the element with the highest priority
  dequeue() {
    if (this.heap.length === 0) {
      return null;
    }

    this.swap(0, this.heap.length - 1);
    const removed = this.heap.pop();
    this.heapifyDown(0);
    return removed;
  }

  // Heapify the element up to the correct position
  heapifyUp(index) {
    let currentIndex = index;
    while (currentIndex > 0 && this.compare(this.heap[currentIndex], this.heap[this.getParentIndex(currentIndex)]) < 0) {
      this.swap(currentIndex, this.getParentIndex(currentIndex));
      currentIndex = this.getParentIndex(currentIndex);
    }
  }

  // Heapify the element down to the correct position
  heapifyDown(index) {
    let currentIndex = index;
    let nextIndex = null;

    while (nextIndex !== currentIndex) {
      currentIndex = nextIndex;
      const leftChildIndex = this.getLeftChildIndex(currentIndex);
      const rightChildIndex = this.getRightChildIndex(currentIndex);

      if (leftChildIndex < this.heap.length && this.compare(this.heap[leftChildIndex], this.heap[currentIndex]) < 0) {
        nextIndex = leftChildIndex;
      } else {
        nextIndex = currentIndex;
      }

      if (rightChildIndex < this.heap.length && this.compare(this.heap[rightChildIndex], this.heap[nextIndex]) < 0) {
        nextIndex = rightChildIndex;
      }

      this.swap(currentIndex, nextIndex);
    }
  }

  // Get the number of elements in the priority queue
  size() {
    return this.heap.length;
  }

  // Check if the priority queue is empty
  isEmpty() {
    return this.heap.length === 0;
  }
}
// Create a new priority queue
const priorityQueue = new BinaryHeap();

// Enqueue elements with priorities
priorityQueue.enqueue({ value: 'A', priority: 5 });
priorityQueue.enqueue({ value: 'B', priority: 3 });
priorityQueue.enqueue({ value: 'C', priority: 10 });
priorityQueue.enqueue({ value: 'D', priority: 2 });

// Dequeue elements with the highest priority
while (!priorityQueue.isEmpty()) {
  const element = priorityQueue.dequeue();
  console.log(element);
}
{ value: 'D', priority: 2 }
{ value: 'B', priority: 3 }
{ value: 'A', priority: 5 }
{ value: 'C', priority: 10 }
