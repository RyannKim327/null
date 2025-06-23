class PriorityQueue<T> {
  private heap: { priority: number; value: T }[] = [];

  // Insert a new element with a given priority
  enqueue(value: T, priority: number): void {
    this.heap.push({ priority, value });
    this.heapifyUp(this.heap.length - 1);
  }

  // Remove and return the element with the highest priority (smallest priority value)
  dequeue(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    // Swap the first and last elements
    this.swap(0, this.heap.length - 1);
    const item = this.heap.pop(); // Remove the last element (original root)

    // Restore the heap property
    if (!this.isEmpty()) {
      this.heapifyDown(0);
    }

    return item?.value;
  }

  // Peek at the element with the highest priority without removing it
  peek(): T | undefined {
    return this.heap[0]?.value;
  }

  // Check if the priority queue is empty
  isEmpty(): boolean {
    return this.heap.length === 0;
  }

  // Get the size of the priority queue
  size(): number {
    return this.heap.length;
  }

  // Helper function to restore the heap property by moving an element up
  private heapifyUp(index: number): void {
    while (index > 0) {
      const parentIndex = this.getParentIndex(index);
      if (this.heap[parentIndex].priority <= this.heap[index].priority) {
        break; // Heap property is satisfied
      }
      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  // Helper function to restore the heap property by moving an element down
  private heapifyDown(index: number): void {
    let smallest = index;
    const leftChildIndex = this.getLeftChildIndex(index);
    const rightChildIndex = this.getRightChildIndex(index);

    if (
      leftChildIndex < this.heap.length &&
      this.heap[leftChildIndex].priority < this.heap[smallest].priority
    ) {
      smallest = leftChildIndex;
    }

    if (
      rightChildIndex < this.heap.length &&
      this.heap[rightChildIndex].priority < this.heap[smallest].priority
    ) {
      smallest = rightChildIndex;
    }

    if (smallest !== index) {
      this.swap(index, smallest);
      this.heapifyDown(smallest);
    }
  }

  // Helper function to get the parent index
  private getParentIndex(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  // Helper function to get the left child index
  private getLeftChildIndex(index: number): number {
    return 2 * index + 1;
  }

  // Helper function to get the right child index
  private getRightChildIndex(index: number): number {
    return 2 * index + 2;
  }

  // Helper function to swap two elements in the heap
  private swap(i: number, j: number): void {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}
const pq = new PriorityQueue<string>();

pq.enqueue("Task 1", 3);
pq.enqueue("Task 2", 1);
pq.enqueue("Task 3", 2);

console.log(pq.dequeue()); // Output: "Task 2" (highest priority)
console.log(pq.dequeue()); // Output: "Task 3"
console.log(pq.dequeue()); // Output: "Task 1"
console.log(pq.dequeue()); // Output: undefined (queue is empty)
