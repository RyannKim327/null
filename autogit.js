class BinaryHeap {
  constructor() {
    this.heap = [];
  }

  // Get the parent index of a given index
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  // Get the left child index of a given index
  getLeftChildIndex(index) {
    return index * 2 + 1;
  }

  // Get the right child index of a given index
  getRightChildIndex(index) {
    return index * 2 + 2;
  }

  // Swap two elements in the heap
  swap(index1, index2) {
    const temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  // Get the element with the highest priority (the root of the heap)
  peek() {
    return this.heap[0];
  }

  // Add an element to the heap
  enqueue(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  // Adjust the element's position to maintain the heap property
  bubbleUp() {
    let currentIndex = this.heap.length - 1;

    while (
      currentIndex > 0 &&
      this.heap[currentIndex] < this.heap[this.getParentIndex(currentIndex)]
    ) {
      const parentIndex = this.getParentIndex(currentIndex);
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
    }
  }

  // Remove and return the element with the highest priority
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const root = this.heap[0];
    const lastElement = this.heap.pop();

    if (!this.isEmpty()) {
      this.heap[0] = lastElement;
      this.sinkDown();
    }

    return root;
  }

  // Adjust the element's position to maintain the heap property
  sinkDown() {
    let currentIndex = 0;

    while (
      (this.getLeftChildIndex(currentIndex) < this.heap.length &&
        this.heap[currentIndex] > this.heap[this.getLeftChildIndex(currentIndex)]) ||
      (this.getRightChildIndex(currentIndex) < this.heap.length &&
        this.heap[currentIndex] > this.heap[this.getRightChildIndex(currentIndex)])
    ) {
      const leftChildIndex = this.getLeftChildIndex(currentIndex);
      const rightChildIndex = this.getRightChildIndex(currentIndex);

      const smallerChildIndex =
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] < this.heap[leftChildIndex]
          ? rightChildIndex
          : leftChildIndex;

      this.swap(currentIndex, smallerChildIndex);
      currentIndex = smallerChildIndex;
    }
  }

  // Check if the heap is empty
  isEmpty() {
    return this.heap.length === 0;
  }
}
const pq = new BinaryHeap();

pq.enqueue(5); // Add element 5 with priority 5 to the priority queue
pq.enqueue(1); // Add element 1 with priority 1 to the priority queue
pq.enqueue(3); // Add element 3 with priority 3 to the priority queue

console.log(pq.dequeue()); // Output: 1 (the element with the highest priority)
console.log(pq.dequeue()); // Output: 3 (the next highest priority element)
console.log(pq.dequeue()); // Output: 5 (the last remaining element)
console.log(pq.dequeue()); // Output: null (the priority queue is empty)
