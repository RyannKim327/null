class BinaryHeap<T> {
  private heap: T[] = [];
  private comparator: (a: T, b: T) => number;

  constructor(comparator: (a: T, b: T) => number) {
    this.comparator = comparator;
  }

  private parentIndex(i: number): number {
    return Math.floor((i - 1) / 2);
  }

  private leftChildIndex(i: number): number {
    return 2 * i + 1;
  }

  private rightChildIndex(i: number): number {
    return 2 * i + 2;
  }

  private swap(i: number, j: number): void {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  private heapifyUp(i: number): void {
    while (i > 0 && this.comparator(this.heap[i], this.heap[this.parentIndex(i)]) < 0) {
      this.swap(i, this.parentIndex(i));
      i = this.parentIndex(i);
    }
  }

  private heapifyDown(i: number): void {
    let smallest = i;
    const left = this.leftChildIndex(i);
    const right = this.rightChildIndex(i);

    if (left < this.heap.length && this.comparator(this.heap[left], this.heap[smallest]) < 0) {
      smallest = left;
    }

    if (right < this.heap.length && this.comparator(this.heap[right], this.heap[smallest]) < 0) {
      smallest = right;
    }

    if (smallest !== i) {
      this.swap(i, smallest);
      this.heapifyDown(smallest);
    }
  }

  insert(element: T): void {
    this.heap.push(element);
    this.heapifyUp(this.heap.length - 1);
  }

  extractMin(): T | undefined {
    if (this.heap.length === 0) return undefined;

    const min = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapifyDown(0);
    return min;
  }
}
class PriorityQueue<T> {
  private heap: BinaryHeap<T>;

  constructor(comparator: (a: T, b: T) => number) {
    this.heap = new BinaryHeap(comparator);
  }

  enqueue(element: T): void {
    this.heap.insert(element);
  }

  dequeue(): T | undefined {
    return this.heap.extractMin();
  }
}
const pq = new PriorityQueue<number>((a, b) => a - b); // Min heap
pq.enqueue(5);
pq.enqueue(2);
pq.enqueue(8);

console.log(pq.dequeue()); // 2
console.log(pq.dequeue()); // 5
console.log(pq.dequeue()); // 8
