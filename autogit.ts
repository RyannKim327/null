class PriorityQueue<T> {
  private heap: T[];
  private comparator: (a: T, b: T) => boolean;

  constructor(comparator: (a: T, b: T) => boolean = (a, b) => a < b) {
    this.heap = [];
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
    while (
      index > 0 &&
      this.comparator(this.heap[index], this.heap[this.parent(index)])
    ) {
      this.swap(index, this.parent(index));
      index = this.parent(index);
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

  public push(item: T): void {
    this.heap.push(item);
    this.siftUp(this.heap.length - 1);
  }

  public pop(): T | undefined {
    if (this.heap.length === 0) return undefined;
    const root = this.heap[0];
    const end = this.heap.pop()!;
    if (this.heap.length > 0) {
      this.heap[0] = end;
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
const pq = new PriorityQueue<number>();

pq.push(5);
pq.push(3);
pq.push(8);

console.log(pq.peek()); // 3

while (!pq.isEmpty()) {
  console.log(pq.pop()); // 3, 5, 8
}
const maxHeap = new PriorityQueue<number>((a, b) => a > b);
maxHeap.push(5);
maxHeap.push(3);
maxHeap.push(8);

console.log(maxHeap.pop()); // 8
