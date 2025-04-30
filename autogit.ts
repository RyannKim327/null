class PriorityQueue<T> {
  private heap: T[] = [];
  private comparator: (a: T, b: T) => number;

  constructor(comparator: (a: T, b: T) => number) {
    this.comparator = comparator;
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

  private swap(i: number, j: number): void {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  private siftUp(): void {
    let nodeIndex = this.heap.length - 1;

    while (nodeIndex > 0) {
      const parent = this.parentIndex(nodeIndex);
      if (this.comparator(this.heap[nodeIndex], this.heap[parent]) >= 0) break;

      this.swap(nodeIndex, parent);
      nodeIndex = parent;
    }
  }

  private siftDown(): void {
    let nodeIndex = 0;
    const length = this.heap.length;

    while (true) {
      const left = this.leftChildIndex(nodeIndex);
      const right = this.rightChildIndex(nodeIndex);
      let smallest = nodeIndex;

      if (left < length && this.comparator(this.heap[left], this.heap[smallest]) < 0) {
        smallest = left;
      }
      if (right < length && this.comparator(this.heap[right], this.heap[smallest]) < 0) {
        smallest = right;
      }

      if (smallest === nodeIndex) break;

      this.swap(nodeIndex, smallest);
      nodeIndex = smallest;
    }
  }

  insert(item: T): void {
    this.heap.push(item);
    this.siftUp();
  }

  poll(): T | undefined {
    if (this.heap.length === 0) return undefined;
    const root = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0 && end !== undefined) {
      this.heap[0] = end;
      this.siftDown();
    }
    return root;
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
// For a min priority queue of numbers:
const pq = new PriorityQueue<number>((a, b) => a - b);

pq.insert(5);
pq.insert(3);
pq.insert(8);

console.log(pq.peek()); // 3 (smallest number)
console.log(pq.poll()); // 3
console.log(pq.poll()); // 5
console.log(pq.size()); // 1
type Task = { name: string; priority: number };
const taskQueue = new PriorityQueue<Task>((a, b) => a.priority - b.priority);
