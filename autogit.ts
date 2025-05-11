class PriorityQueue<T> {
  private heap: T[] = [];
  private comparator: (a: T, b: T) => number;

  constructor(comparator: (a: T, b: T) => number) {
    this.comparator = comparator;
  }

  private parent(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  private leftChild(index: number): number {
    return 2 * index + 1;
  }

  private rightChild(index: number): number {
    return 2 * index + 2;
  }

  private swap(i: number, j: number): void {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  private siftUp(index: number): void {
    let parent = this.parent(index);
    while (
      index > 0 &&
      this.comparator(this.heap[index], this.heap[parent]) < 0
    ) {
      this.swap(index, parent);
      index = parent;
      parent = this.parent(index);
    }
  }

  private siftDown(index: number): void {
    let left = this.leftChild(index);
    let right = this.rightChild(index);
    let smallest = index;

    if (
      left < this.heap.length &&
      this.comparator(this.heap[left], this.heap[smallest]) < 0
    ) {
      smallest = left;
    }

    if (
      right < this.heap.length &&
      this.comparator(this.heap[right], this.heap[smallest]) < 0
    ) {
      smallest = right;
    }

    if (smallest !== index) {
      this.swap(index, smallest);
      this.siftDown(smallest);
    }
  }

  enqueue(value: T): void {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1);
  }

  dequeue(): T | undefined {
    if (this.isEmpty()) return undefined;
    const top = this.heap[0];
    const end = this.heap.pop()!;
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.siftDown(0);
    }
    return top;
  }

  peek(): T | undefined {
    return this.heap[0];
  }

  size(): number {
    return this.heap.length;
  }

  isEmpty(): boolean {
    return this.heap.length === 0;
  }
}
// Min-heap: smaller number = higher priority
const pq = new PriorityQueue<number>((a, b) => a - b);

pq.enqueue(5);
pq.enqueue(1);
pq.enqueue(3);

console.log(pq.peek());    // 1
console.log(pq.dequeue()); // 1
console.log(pq.dequeue()); // 3
console.log(pq.size());    // 1
