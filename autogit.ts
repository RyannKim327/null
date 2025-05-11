class PriorityQueue<T> {
  private heap: T[] = [];
  private comparator: (a: T, b: T) => boolean;

  // The comparator determines the priority.
  // For a min-heap: (a, b) => a < b
  // For a max-heap: (a, b) => a > b
  constructor(comparator: (a: T, b: T) => boolean) {
    this.comparator = comparator;
  }

  private parent(index: number): number {
    return Math.floor((index - 1) / 2);
  }
  
  private leftChild(index: number): number {
    return index * 2 + 1;
  }
  
  private rightChild(index: number): number {
    return index * 2 + 2;
  }

  private swap(i: number, j: number) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  private heapifyUp() {
    let index = this.heap.length - 1;
    while (
      index > 0 &&
      this.comparator(this.heap[index], this.heap[this.parent(index)])
    ) {
      this.swap(index, this.parent(index));
      index = this.parent(index);
    }
  }

  private heapifyDown() {
    let index = 0;

    while (this.leftChild(index) < this.heap.length) {
      let smallerChildIndex = this.leftChild(index);
      const rightChildIndex = this.rightChild(index);

      if (
        rightChildIndex < this.heap.length &&
        this.comparator(this.heap[rightChildIndex], this.heap[smallerChildIndex])
      ) {
        smallerChildIndex = rightChildIndex;
      }

      if (this.comparator(this.heap[index], this.heap[smallerChildIndex])) {
        break;
      }

      this.swap(index, smallerChildIndex);
      index = smallerChildIndex;
    }
  }

  enqueue(item: T) {
    this.heap.push(item);
    this.heapifyUp();
  }

  dequeue(): T | undefined {
    if (this.heap.length === 0) return undefined;

    const root = this.heap[0];
    const last = this.heap.pop()!;

    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.heapifyDown();
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
const pq = new PriorityQueue<number>((a, b) => a < b);
pq.enqueue(5);
pq.enqueue(10);
pq.enqueue(3);
console.log(pq.dequeue()); // 3
console.log(pq.peek());    // 5
const maxPQ = new PriorityQueue<number>((a, b) => a > b);
maxPQ.enqueue(5);
maxPQ.enqueue(10);
maxPQ.enqueue(3);
console.log(maxPQ.dequeue()); // 10
console.log(maxPQ.peek());    // 5
