class BinaryHeap {
  constructor() {
    this.heap = [];
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  insert(item) {
    this.heap.push(item);
    this.bubbleUp(this.heap.length - 1);
  }

  bubbleUp(index) {
    const parentIndex = Math.floor((index - 1) / 2);
    if (parentIndex >= 0 && this.heap[parentIndex] > this.heap[index]) {
      this.swap(index, parentIndex);
      this.bubbleUp(parentIndex);
    }
  }

  deleteMin() {
    if (this.isEmpty()) {
      return null;
    }

    const min = this.heap[0];
    const lastElement = this.heap.pop();
    if (!this.isEmpty()) {
      this.heap[0] = lastElement;
      this.sinkDown(0);
    }
    return min;
  }

  sinkDown(index) {
    const leftIndex = 2 * index + 1;
    const rightIndex = 2 * index + 2;
    let smallest = index;

    if (
      leftIndex < this.heap.length &&
      this.heap[leftIndex] < this.heap[smallest]
    ) {
      smallest = leftIndex;
    }

    if (
      rightIndex < this.heap.length &&
      this.heap[rightIndex] < this.heap[smallest]
    ) {
      smallest = rightIndex;
    }

    if (smallest !== index) {
      this.swap(index, smallest);
      this.sinkDown(smallest);
    }
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}
class PriorityQueue {
  constructor() {
    this.heap = new BinaryHeap();
  }

  isEmpty() {
    return this.heap.isEmpty();
  }

  enqueue(item, priority) {
    this.heap.insert({ item, priority });
  }

  dequeue() {
    const min = this.heap.deleteMin();
    return min ? min.item : null;
  }
}
const pq = new PriorityQueue();
pq.enqueue("Task 1", 3);
pq.enqueue("Task 2", 2);
pq.enqueue("Task 3", 1);
pq.enqueue("Task 4", 5);
pq.enqueue("Task 5", 4);

while (!pq.isEmpty()) {
  console.log(pq.dequeue());
}
Task 3
Task 2
Task 1
Task 5
Task 4
