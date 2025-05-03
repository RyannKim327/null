class PriorityQueue<T> {
  private heap: T[] = [];
  private comparator: (a: T, b: T) => boolean;

  constructor(comparator?: (a: T, b: T) => boolean) {
    // Default comparator for min-heap
    this.comparator = comparator || ((a, b) => a < b);
  }

  private swap(i: number, j: number): void {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
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

  private siftUp(index: number): void {
    let parentIndex = this.parent(index);
    while (
      index > 0 &&
      this.comparator(this.heap[index], this.heap[parentIndex])
    ) {
      this.swap(index, parentIndex);
      index = parentIndex;
      parentIndex = this.parent(index);
    }
  }

  private siftDown(index: number): void {
    let left = this.leftChild(index);
    let right = this.rightChild(index);
    let smallest = index;

    if (
      left < this.heap.length &&
      this.comparator(this.heap[left], this.heap[smallest])
    ) {
      smallest = left;
    }

    if (
      right < this.heap.length &&
      this.comparator(this.heap[right], this.heap[smallest])
    ) {
      smallest = right;
    }

    if (smallest !== index) {
      this.swap(index, smallest);
      this.siftDown(smallest);
    }
  }

  public enqueue(item: T): void {
    this.heap.push(item);
    this.siftUp(this.heap.length - 1);
  }

  public dequeue(): T | undefined {
    if (this.heap.length === 0) return undefined;
    const item = this.heap[0];
    const last = this.heap.pop()!;
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.siftDown(0);
    }
    return item;
  }

  public peek(): T | undefined {
    return this.heap[0];
  }

  public size(): number {
    return this.heap.length;
  }

  public isEmpty(): boolean {
    return this.heap.length === 0;
  }
}
const pq = new PriorityQueue<number>(); // Min heap by default
pq.enqueue(5);
pq.enqueue(3);
pq.enqueue(6);
pq.enqueue(1);

console.log(pq.dequeue()); // 1 (smallest)
console.log(pq.dequeue()); // 3
console.log(pq.peek());    // 5
