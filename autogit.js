class BinaryHeap {
  constructor() {
    this.heap = [];
  }

  insert(element) {
    this.heap.push(element);
    this.bubbleUp(this.heap.length - 1);
  }

  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] <= this.heap[index]) break;
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  extractMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();

    this.sinkDown(0);
    return min;
  }

  sinkDown(index) {
    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let smallestElementIndex = index;

      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex] < this.heap[smallestElementIndex]
      ) {
        smallestElementIndex = leftChildIndex;
      }

      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] < this.heap[smallestElementIndex]
      ) {
        smallestElementIndex = rightChildIndex;
      }

      if (smallestElementIndex === index) break;

      this.swap(index, smallestElementIndex);
      index = smallestElementIndex;
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

  enqueue(item, priority) {
    this.heap.insert({ item, priority });
  }

  dequeue() {
    const node = this.heap.extractMin();
    return node !== null ? node.item : null;
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}
const pq = new PriorityQueue();

pq.enqueue("task1", 2);
pq.enqueue("task2", 1);
pq.enqueue("task3", 3);

while (!pq.isEmpty()) {
  const task = pq.dequeue();
  console.log("Processing task:", task);
}
Processing task: task2
Processing task: task1
Processing task: task3
