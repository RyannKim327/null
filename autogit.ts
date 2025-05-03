class PriorityQueue<T> {
  private heap: T[];
  private comparator: (a: T, b: T) => boolean;

  constructor(comparator?: (a: T, b: T) => boolean) {
    this.heap = [];
    // Default comparator: min-heap (a < b)
    this.comparator = comparator || ((a, b) => a < b);
  }

  size(): number {
    return this.heap.length;
  }

  isEmpty(): boolean {
    return this.heap.length === 0;
  }

  peek(): T | undefined {
    return this.heap[0];
  }

  push(value: T): void {
    this.heap.push(value);
    this.bubbleUp();
  }

  pop(): T | undefined {
    if (this.isEmpty()) return undefined;
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
      if (this.comparator(element, parent)) {
        this.heap[index] = parent;
        index = parentIndex;
      } else {
        break;
      }
    }
    this.heap[index] = element;
  }

  private bubbleDown(): void {
    let index = 0;
    const length = this.heap.length;
    const element = this.heap[0];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let swapIndex: number | null = null;

      if (
        leftChildIndex < length &&
        this.comparator(this.heap[leftChildIndex], element)
      ) {
        swapIndex = leftChildIndex;
      }

      if (
        rightChildIndex < length &&
        this.comparator(this.heap[rightChildIndex], swapIndex === null ? element : this.heap[leftChildIndex])
      ) {
        swapIndex = rightChildIndex;
      }

      if (swapIndex === null) break;

      this.heap[index] = this.heap[swapIndex];
      index = swapIndex;
    }

    this.heap[index] = element;
  }
}
const pq = new PriorityQueue<number>();

pq.push(5);
pq.push(3);
pq.push(10);
pq.push(1);

while (!pq.isEmpty()) {
  console.log(pq.pop()); // Outputs: 1, 3, 5, 10 in order, smallest first
}
