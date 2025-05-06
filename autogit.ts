class PriorityQueue<T> {
  private heap: T[] = [];
  private comparator: (a: T, b: T) => number;

  constructor(comparator: (a: T, b: T) => number) {
    this.comparator = comparator;
  }

  // Return the size of the heap
  size(): number {
    return this.heap.length;
  }

  // Check if the queue is empty
  isEmpty(): boolean {
    return this.heap.length === 0;
  }

  // Peek at the top element (min)
  peek(): T | undefined {
    return this.heap[0];
  }

  // Insert a new element
  enqueue(value: T): void {
    this.heap.push(value);
    this.bubbleUp();
  }

  // Remove and return the top element
  dequeue(): T | undefined {
    if (this.isEmpty()) return undefined;

    // Swap the first and last elements
    const top = this.heap[0];
    const last = this.heap.pop()!;
    if (!this.isEmpty()) {
      this.heap[0] = last;
      this.bubbleDown();
    }

    return top;
  }

  private bubbleUp(): void {
    let index = this.heap.length - 1;
    const element = this.heap[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];

      if (this.comparator(element, parent) >= 0) break;

      // Swap with parent
      this.heap[index] = parent;
      this.heap[parentIndex] = element;
      index = parentIndex;
    }
  }

  private bubbleDown(): void {
    let index = 0;
    const length = this.heap.length;
    const element = this.heap[0];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let swapIndex: number | null = null;

      if (leftChildIndex < length) {
        const leftChild = this.heap[leftChildIndex];
        if (this.comparator(leftChild, element) < 0) {
          swapIndex = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        const rightChild = this.heap[rightChildIndex];
        if (
          (swapIndex === null && this.comparator(rightChild, element) < 0) ||
          (swapIndex !== null && this.comparator(rightChild, this.heap[swapIndex]) < 0)
        ) {
          swapIndex = rightChildIndex;
        }
      }

      if (swapIndex === null) break;

      this.heap[index] = this.heap[swapIndex];
      this.heap[swapIndex] = element;
      index = swapIndex;
    }
  }
}
const pq = new PriorityQueue<number>((a, b) => a - b);

pq.enqueue(5);
pq.enqueue(3);
pq.enqueue(8);
pq.enqueue(1);

console.log(pq.dequeue()); // 1
console.log(pq.dequeue()); // 3
console.log(pq.peek());    // 5
const maxPq = new PriorityQueue<number>((a, b) => b - a);
