class PriorityQueue<T> {
  private heap: { priority: number; value: T }[] = [];

  // Helper function to swap two elements in the heap
  private swap(i: number, j: number): void {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  // Helper function to get the parent index
  private parentIndex(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  // Helper function to get the left child index
  private leftChildIndex(index: number): number {
    return 2 * index + 1;
  }

  // Helper function to get the right child index
  private rightChildIndex(index: number): number {
    return 2 * index + 2;
  }

  // Bubble up to maintain the heap property after insertion
  private bubbleUp(): void {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIdx = this.parentIndex(index);
      if (this.heap[parentIdx].priority <= this.heap[index].priority) break;
      this.swap(parentIdx, index);
      index = parentIdx;
    }
  }

  // Bubble down to maintain the heap property after extraction
  private bubbleDown(): void {
    let index = 0;
    const length = this.heap.length;
    while (true) {
      const leftIdx = this.leftChildIndex(index);
      const rightIdx = this.rightChildIndex(index);
      let smallestIdx = index;

      if (leftIdx < length && this.heap[leftIdx].priority < this.heap[smallestIdx].priority) {
        smallestIdx = leftIdx;
      }
      if (rightIdx < length && this.heap[rightIdx].priority < this.heap[smallestIdx].priority) {
        smallestIdx = rightIdx;
      }
      if (smallestIdx === index) break;
      this.swap(index, smallestIdx);
      index = smallestIdx;
    }
  }

  // Insert an element with a given priority
  public enqueue(value: T, priority: number): void {
    this.heap.push({ priority, value });
    this.bubbleUp();
  }

  // Remove and return the element with the highest priority
  public dequeue(): T | undefined {
    if (this.heap.length === 0) return undefined;
    if (this.heap.length === 1) return this.heap.pop()?.value;

    const top = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.bubbleDown();
    return top.value;
  }

  // Peek at the element with the highest priority without removing it
  public peek(): T | undefined {
    return this.heap.length > 0 ? this.heap[0].value : undefined;
  }

  // Check if the priority queue is empty
  public isEmpty(): boolean {
    return this.heap.length === 0;
  }

  // Get the size of the priority queue
  public size(): number {
    return this.heap.length;
  }
}

// Example usage:
const pq = new PriorityQueue<string>();
pq.enqueue("Task 1", 3);
pq.enqueue("Task 2", 1);
pq.enqueue("Task 3", 2);

console.log(pq.dequeue()); // Output: "Task 2" (highest priority)
console.log(pq.dequeue()); // Output: "Task 3"
console.log(pq.dequeue()); // Output: "Task 1"
