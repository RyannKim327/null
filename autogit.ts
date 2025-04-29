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

  private heapifyUp(): void {
    let index = this.heap.length - 1;
    while (
      index > 0 &&
      this.comparator(this.heap[index], this.heap[this.parent(index)]) < 0
    ) {
      this.swap(index, this.parent(index));
      index = this.parent(index);
    }
  }

  private heapifyDown(): void {
    let index = 0;
    while (this.leftChild(index) < this.heap.length) {
      let smallerChildIndex = this.leftChild(index);
      const rightChildIndex = this.rightChild(index);

      if (
        rightChildIndex < this.heap.length &&
        this.comparator(this.heap[rightChildIndex], this.heap[smallerChildIndex]) < 0
      ) {
        smallerChildIndex = rightChildIndex;
      }

      if (this.comparator(this.heap[index], this.heap[smallerChildIndex]) <= 0) {
        break;
      }

      this.swap(index, smallerChildIndex);
      index = smallerChildIndex;
    }
  }

  public enqueue(item: T): void {
    this.heap.push(item);
    this.heapifyUp();
  }

  public dequeue(): T | undefined {
    if (this.isEmpty()) return undefined;

    const root = this.heap[0];
    const end = this.heap.pop();

    if (this.heap.length > 0 && end !== undefined) {
      this.heap[0] = end;
      this.heapifyDown();
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
const pq = new PriorityQueue<number>((a, b) => a - b);

pq.enqueue(5);
pq.enqueue(3);
pq.enqueue(6);
pq.enqueue(2);

while (!pq.isEmpty()) {
  console.log(pq.dequeue()); // 2, 3, 5, 6
}
