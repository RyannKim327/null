class PriorityQueue<T> {
  private heap: Array<T>;

  constructor() {
    this.heap = [];
  }

  /**
   * Insert an element into the priority queue
   * @param element The element to insert
   * @param priority The priority of the element
   */
  insert(element: T, priority: number) {
    this.heap.push({ element, priority });
    this.bubbleUp(this.heap.length - 1);
  }

  /**
   * Extract the element with the highest priority from the priority queue
   * @returns The extracted element
   */
  extractMax(): T | undefined {
    if (this.heap.length === 0) return undefined;
    const max = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.bubbleDown(0);
    return max.element;
  }

  private bubbleUp(index: number) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex].priority >= this.heap[index].priority) break;
      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  private bubbleDown(index: number) {
    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let largest = index;

      if (leftChildIndex < this.heap.length && this.heap[leftChildIndex].priority > this.heap[largest].priority) {
        largest = leftChildIndex;
      }

      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex].priority > this.heap[largest].priority) {
        largest = rightChildIndex;
      }

      if (largest === index) break;
      this.swap(largest, index);
      index = largest;
    }
  }

  private swap(i: number, j: number) {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }
}
const queue = new PriorityQueue<string>();

queue.insert('low priority', 1);
queue.insert('high priority', 10);
queue.insert('medium priority', 5);

console.log(queue.extractMax()); // "high priority"
console.log(queue.extractMax()); // "medium priority"
console.log(queue.extractMax()); // "low priority"
