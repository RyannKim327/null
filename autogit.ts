class PriorityQueue<T> {
  private heap: T[] = [];
  private compare: (a: T, b: T) => boolean;

  constructor(compareFn: (a: T, b: T) => boolean) {
    this.compare = compareFn;
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
    while (index > 0 && this.compare(this.heap[index], this.heap[parent])) {
      this.swap(index, parent);
      index = parent;
      parent = this.parent(index);
    }
  }

  private siftDown(index: number): void {
    let left = this.leftChild(index);
    let right = this.rightChild(index);
    let smallest = index;

    if (left < this.heap.length && this.compare(this.heap[left], this.heap[smallest])) {
      smallest = left;
    }
    if (right < this.heap.length && this.compare(this.heap[right], this.heap[smallest])) {
      smallest = right;
    }

    if (smallest !== index) {
      this.swap(index, smallest);
      this.siftDown(smallest);
    }
  }

  enqueue(item: T): void {
    this.heap.push(item);
    this.siftUp(this.heap.length - 1);
  }

  dequeue(): T | undefined {
    if (this.heap.length === 0) return undefined;

    const root = this.heap[0];
    const end = this.heap.pop()!;
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.siftDown(0);
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
const minPQ = new PriorityQueue<number>((a, b) => a < b);

minPQ.enqueue(5);
minPQ.enqueue(3);
minPQ.enqueue(6);
minPQ.enqueue(1);

while (!minPQ.isEmpty()) {
  console.log(minPQ.dequeue());
}
// Output: 1, 3, 5, 6
const maxPQ = new PriorityQueue<number>((a, b) => a > b);
