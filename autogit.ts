class PriorityQueue<T> {
  private heap: T[] = [];
  private comparator: (a: T, b: T) => boolean;

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

  private swap(i: number, j: number): void {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  private heapifyUp(): void {
    let index = this.heap.length - 1;
    while (
      index > 0 &&
      this.comparator(this.heap[index], this.heap[this.parent(index)])
    ) {
      this.swap(index, this.parent(index));
      index = this.parent(index);
    }
  }

  private heapifyDown(): void {
    let index = 0;
    const length = this.heap.length;

    while (this.leftChild(index) < length) {
      let childIndex = this.leftChild(index);
      const right = this.rightChild(index);

      // Pick the child with higher priority depending on comparator
      if (right < length && this.comparator(this.heap[right], this.heap[childIndex])) {
        childIndex = right;
      }

      if (this.comparator(this.heap[childIndex], this.heap[index])) {
        this.swap(index, childIndex);
        index = childIndex;
      } else {
        break;
      }
    }
  }

  public enqueue(item: T): void {
    this.heap.push(item);
    this.heapifyUp();
  }

  public dequeue(): T | undefined {
    if (this.heap.length === 0) return undefined;

    const top = this.heap[0];
    const end = this.heap.pop()!;
    
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.heapifyDown();
    }

    return top;
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
const minPQ = new PriorityQueue<number>((a, b) => a < b);
minPQ.enqueue(10);
minPQ.enqueue(5);
minPQ.enqueue(20);

console.log(minPQ.dequeue()); // 5
console.log(minPQ.peek());    // 10
const maxPQ = new PriorityQueue<number>((a, b) => a > b);
maxPQ.enqueue(10);
maxPQ.enqueue(5);
maxPQ.enqueue(20);

console.log(maxPQ.dequeue()); // 20
console.log(maxPQ.peek());    // 10
