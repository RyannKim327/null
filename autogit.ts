class PriorityQueue<T> {
  private heap: T[] = [];
  private compare: (a: T, b: T) => boolean;

  constructor(compareFn: (a: T, b: T) => boolean) {
    this.compare = compareFn;
  }

  private swap(i: number, j: number) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  private parentIndex(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  private leftChildIndex(index: number): number {
    return index * 2 + 1;
  }

  private rightChildIndex(index: number): number {
    return index * 2 + 2;
  }

  private siftUp(index: number): void {
    let parent = this.parentIndex(index);
    while (
      index > 0 &&
      this.compare(this.heap[index], this.heap[parent])
    ) {
      this.swap(index, parent);
      index = parent;
      parent = this.parentIndex(index);
    }
  }

  private siftDown(index: number): void {
    let left = this.leftChildIndex(index);
    let right = this.rightChildIndex(index);
    let next = index;

    if (
      left < this.heap.length &&
      this.compare(this.heap[left], this.heap[next])
    ) {
      next = left;
    }

    if (
      right < this.heap.length &&
      this.compare(this.heap[right], this.heap[next])
    ) {
      next = right;
    }

    if (next !== index) {
      this.swap(index, next);
      this.siftDown(next);
    }
  }

  public enqueue(item: T): void {
    this.heap.push(item);
    this.siftUp(this.heap.length - 1);
  }

  public dequeue(): T | undefined {
    if (this.heap.length === 0) return undefined;

    const root = this.heap[0];
    const last = this.heap.pop()!;
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.siftDown(0);
    }
    return root;
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

// Example usage for a min-heap of numbers:
const minPQ = new PriorityQueue<number>((a, b) => a < b);
minPQ.enqueue(5);
minPQ.enqueue(3);
minPQ.enqueue(6);
console.log(minPQ.dequeue()); // 3
console.log(minPQ.peek());    // 5
