class BinaryHeap {
  constructor() {
    this.heap = [];
  }

  get size() {
    return this.heap.length;
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp(this.size - 1);
  }

  remove() {
    const rootIndex = 0;
    const lastIndex = this.size - 1;
    this.swap(rootIndex, lastIndex);
    const root = this.heap.pop();
    this.bubbleDown(rootIndex);
    return root;
  }

  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.compare(index, parentIndex) >= 0) break; // min-heap
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  bubbleDown(index) {
    while (true) {
      const leftChildIndex = index * 2 + 1;
      const rightChildIndex = index * 2 + 2;
      let smallestIndex = index;

      if (
        leftChildIndex < this.size &&
        this.compare(leftChildIndex, smallestIndex) < 0
      ) {
        smallestIndex = leftChildIndex;
      }

      if (
        rightChildIndex < this.size &&
        this.compare(rightChildIndex, smallestIndex) < 0
      ) {
        smallestIndex = rightChildIndex;
      }

      if (smallestIndex === index) break; // min-heap

      this.swap(index, smallestIndex);
      index = smallestIndex;
    }
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  compare(a, b) {
    return this.heap[a] - this.heap[b]; // adjust comparison based on priority logic
  }
}
class PriorityQueue {
  constructor() {
    this.queue = new BinaryHeap();
  }

  enqueue(element, priority) {
    this.queue.insert({ element, priority });
  }

  dequeue() {
    return this.queue.remove().element;
  }

  isEmpty() {
    return this.queue.size === 0;
  }
}
const pq = new PriorityQueue();
pq.enqueue("Task 1", 2);
pq.enqueue("Task 2", 1);
pq.enqueue("Task 3", 3);

while (!pq.isEmpty()) {
  console.log(pq.dequeue());
}
Task 2
Task 1
Task 3
