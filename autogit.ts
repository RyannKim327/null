class PriorityQueue<T> {
  private heap: T[] = [];
  private compare: (a: T, b: T) => boolean;

  // compare defines the priority order; default is min-heap
  constructor(compareFn?: (a: T, b: T) => boolean) {
    this.compare = compareFn || ((a, b) => a < b);
  }

  private swap(i: number, j: number) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  private parent(index: number) {
    return Math.floor((index - 1) / 2);
  }

  private leftChild(index: number) {
    return 2 * index + 1;
  }

  private rightChild(index: number) {
    return 2 * index + 2;
  }

  private siftUp(index: number) {
    let parent = this.parent(index);
    while (index > 0 && this.compare(this.heap[index], this.heap[parent])) {
      this.swap(index, parent);
      index = parent;
      parent = this.parent(index);
    }
  }

  private siftDown(index: number) {
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

  public enqueue(element: T) {
    this.heap.push(element);
    this.siftUp(this.heap.length - 1);
  }

  public dequeue(): T | undefined {
    if (this.isEmpty()) return undefined;

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
const pq = new PriorityQueue<number>();

pq.enqueue(10);
pq.enqueue(5);
pq.enqueue(20);
pq.enqueue(1);

while (!pq.isEmpty()) {
  console.log(pq.dequeue());  // Output: 1, 5, 10, 20
}
