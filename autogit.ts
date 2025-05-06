class PriorityQueue<T> {
  private heap: T[] = [];
  private comparator: (a: T, b: T) => number;

  constructor(comparator: (a: T, b: T) => number) {
    this.comparator = comparator;
  }

  size(): number {
    return this.heap.length;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  peek(): T | undefined {
    return this.heap[0];
  }

  enqueue(item: T): void {
    this.heap.push(item);
    this.heapifyUp();
  }

  dequeue(): T | undefined {
    if (this.isEmpty()) return undefined;

    const root = this.heap[0];
    const last = this.heap.pop()!;

    if (!this.isEmpty()) {
      this.heap[0] = last;
      this.heapifyDown();
    }

    return root;
  }

  private heapifyUp(): void {
    let index = this.heap.length - 1;

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.comparator(this.heap[index], this.heap[parentIndex]) >= 0) break;

      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  private heapifyDown(): void {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      let leftIndex = 2 * index + 1;
      let rightIndex = 2 * index + 2;
      let smallest = index;

      if (
        leftIndex < length &&
        this.comparator(this.heap[leftIndex], this.heap[smallest]) < 0
      ) {
        smallest = leftIndex;
      }

      if (
        rightIndex < length &&
        this.comparator(this.heap[rightIndex], this.heap[smallest]) < 0
      ) {
        smallest = rightIndex;
      }

      if (smallest === index) break;

      this.swap(index, smallest);
      index = smallest;
    }
  }

  private swap(i: number, j: number): void {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}
// Min-heap: smaller numbers have higher priority
const pq = new PriorityQueue<number>((a, b) => a - b);

pq.enqueue(5);
pq.enqueue(1);
pq.enqueue(3);

console.log(pq.dequeue()); // 1
console.log(pq.dequeue()); // 3
console.log(pq.dequeue()); // 5
