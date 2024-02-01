class BinaryHeap {
  constructor() {
    this.heap = [];
  }

  get size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.size === 0;
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp(this.size - 1);
  }

  extractMin() {
    if (this.isEmpty()) {
      throw new Error('Priority queue is empty');
    }

    // Swap root (minimum element) with last element
    this.swap(0, this.size - 1);

    // Extract the minimum element
    const min = this.heap.pop();

    // Restore heap property
    this.bubbleDown(0);

    return min;
  }

  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      if (this.heap[parentIndex] <= this.heap[index]) {
        break; // Heap property satisfied
      }

      // Swap current element with its parent
      this.swap(parentIndex, index);
      index = parentIndex; // Update index to continue at the parent level
    }
  }

  bubbleDown(index) {
    while (true) {
      let childIndex = index * 2 + 1; // Left child index
      if (childIndex >= this.size) {
        break; // No more children, heap property satisfied
      }

      if (
        childIndex + 1 < this.size &&
        this.heap[childIndex + 1] < this.heap[childIndex]
      ) {
        childIndex++; // Right child exists and is smaller, so choose it
      }

      if (this.heap[index] <= this.heap[childIndex]) {
        break; // Heap property satisfied
      }

      // Swap current element with its smallest child
      this.swap(index, childIndex);
      index = childIndex; // Update index to continue at the child level
    }
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}
const priorityQueue = new BinaryHeap();
priorityQueue.insert(5);
priorityQueue.insert(3);
priorityQueue.insert(8);
const min = priorityQueue.extractMin();
console.log(min); // Outputs: 3
