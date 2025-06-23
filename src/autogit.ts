class PriorityQueue<T> {
  private heap: T[] = [];
  private compare: (a: T, b: T) => boolean;

  constructor(compareFn: (a: T, b: T) => boolean) {
    this.compare = compareFn; // Comparison function to define priority
  }

  // Insert an element into the priority queue
  insert(value: T): void {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  // Extract the root element (highest priority)
  extractMin(): T | undefined {
    if (this.heap.length === 0) return undefined;
    const min = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0 && last !== undefined) {
      this.heap[0] = last;
      this.sinkDown(0);
    }
    return min;
  }

  // Peek at the root element without removing it
  peek(): T | undefined {
    return this.heap[0];
  }

  // Get the size of the priority queue
  size(): number {
    return this.heap.length;
  }

  // Bubble up the element at the given index to maintain the heap property
  private bubbleUp(index: number): void {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (!this.compare(this.heap[index], this.heap[parentIndex])) break;
      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ];
      index = parentIndex;
    }
  }

  // Sink down the element at the given index to maintain the heap property
  private sinkDown(index: number): void {
    const length = this.heap.length;
    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let smallest = index;

      if (
        leftChildIndex < length &&
        this.compare(this.heap[leftChildIndex], this.heap[smallest])
      ) {
        smallest = leftChildIndex;
      }

      if (
        rightChildIndex < length &&
        this.compare(this.heap[rightChildIndex], this.heap[smallest])
      ) {
        smallest = rightChildIndex;
      }

      if (smallest === index) break;
      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      index = smallest;
    }
  }
}

// Example Usage
const pq = new PriorityQueue<number>((a, b) => a < b); // Min-Heap for numbers

pq.insert(5);
pq.insert(3);
pq.insert(8);
pq.insert(1);

console.log(pq.extractMin()); // Output: 1
console.log(pq.extractMin()); // Output: 3
console.log(pq.peek());       // Output: 5
console.log(pq.size());       // Output: 2
const maxPQ = new PriorityQueue<number>((a, b) => a > b); // Max-Heap for numbers
