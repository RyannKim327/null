class PriorityQueue<T> {
  private heap: { priority: number; value: T }[] = [];

  // Insert an element with a given priority
  enqueue(value: T, priority: number): void {
    const newNode = { priority, value };
    this.heap.push(newNode);
    this.bubbleUp(this.heap.length - 1);
  }

  // Remove and return the element with the highest priority
  dequeue(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    // Swap the first and last elements
    this.swap(0, this.heap.length - 1);
    const removedNode = this.heap.pop();

    // Restore the heap property
    this.bubbleDown(0);

    return removedNode?.value;
  }

  // Peek at the element with the highest priority
  peek(): T | undefined {
    return this.isEmpty() ? undefined : this.heap[0].value;
  }

  // Check if the priority queue is empty
  isEmpty(): boolean {
    return this.heap.length === 0;
  }

  // Helper: Bubble up to maintain the heap property after insertion
  private bubbleUp(index: number): void {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex].priority <= this.heap[index].priority) {
        break; // Heap property is satisfied
      }
      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  // Helper: Bubble down to maintain the heap property after removal
  private bubbleDown(index: number): void {
    const length = this.heap.length;

    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let smallestIndex = index;

      // Compare with the left child
      if (
        leftChildIndex < length &&
        this.heap[leftChildIndex].priority < this.heap[smallestIndex].priority
      ) {
        smallestIndex = leftChildIndex;
      }

      // Compare with the right child
      if (
        rightChildIndex < length &&
        this.heap[rightChildIndex].priority < this.heap[smallestIndex].priority
      ) {
        smallestIndex = rightChildIndex;
      }

      // If the heap property is satisfied, stop
      if (smallestIndex === index) {
        break;
      }

      // Otherwise, swap and continue
      this.swap(index, smallestIndex);
      index = smallestIndex;
    }
  }

  // Helper: Swap two elements in the heap
  private swap(i: number, j: number): void {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}

// Example Usage
const pq = new PriorityQueue<string>();
pq.enqueue("Task 1", 3);
pq.enqueue("Task 2", 1);
pq.enqueue("Task 3", 2);

console.log(pq.dequeue()); // Output: "Task 2" (highest priority)
console.log(pq.peek());    // Output: "Task 3"
console.log(pq.dequeue()); // Output: "Task 3"
console.log(pq.dequeue()); // Output: "Task 1"
console.log(pq.isEmpty()); // Output: true
