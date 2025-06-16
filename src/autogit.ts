class PriorityQueue<T> {
  private heap: T[] = [];
  private comparator: (a: T, b: T) => number;

  constructor(comparator: (a: T, b: T) => number) {
    this.comparator = comparator;
  }

  size(): number {
    return this.heap.length;
  }

  peek(): T | undefined {
    return this.heap[0];
  }

  enqueue(value: T): void {
    this.heap.push(value);
    this.bubbleUp();
  }

  dequeue(): T | undefined {
    if (this.size() === 0) return undefined;

    const root = this.heap[0];
    const last = this.heap.pop()!;
    if (this.size() !== 0) {
      this.heap[0] = last;
      this.bubbleDown();
    }
    return root;
  }

  private bubbleUp() {
    let index = this.size() - 1;
    const element = this.heap[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];

      if (this.comparator(element, parent) >= 0) break;

      // Swap element with parent
      this.heap[parentIndex] = element;
      this.heap[index] = parent;
      index = parentIndex;
    }
  }

  private bubbleDown() {
    let index = 0;
    const length = this.size();
    const element = this.heap[0];

    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let leftChild: T | undefined, rightChild: T | undefined;
      let swapIndex: number | null = null;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (this.comparator(leftChild, element) < 0) {
          swapIndex = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swapIndex === null && this.comparator(rightChild, element) < 0) ||
          (swapIndex !== null && leftChild && this.comparator(rightChild, leftChild) < 0)
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
// Min-heap example: smaller numbers have higher priority
const pq = new PriorityQueue<number>((a, b) => a - b);

pq.enqueue(5);
pq.enqueue(3);
pq.enqueue(6);
pq.enqueue(1);

console.log(pq.dequeue()); // 1
console.log(pq.dequeue()); // 3
console.log(pq.peek());    // 5 (next smallest)
