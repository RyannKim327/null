class BinaryHeap {
  constructor() {
    this.heap = [];
  }

  // Helper functions
  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  getLeftChildIndex(i) {
    return 2 * i + 1;
  }

  getRightChildIndex(i) {
    return 2 * i + 2;
  }

  hasParent(i) {
    return this.getParentIndex(i) >= 0;
  }

  hasLeftChild(i) {
    return this.getLeftChildIndex(i) < this.heap.length;
  }

  hasRightChild(i) {
    return this.getRightChildIndex(i) < this.heap.length;
  }

  getParent(i) {
    return this.heap[this.getParentIndex(i)];
  }

  getLeftChild(i) {
    return this.heap[this.getLeftChildIndex(i)];
  }

  getRightChild(i) {
    return this.heap[this.getRightChildIndex(i)];
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  // Heap operations
  peek() {
    if (this.heap.length === 0) {
      throw new Error('Heap is empty');
    }
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  push(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  pop() {
    if (this.heap.length === 0) {
      throw new Error('Heap is empty');
    }
    const minValue = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapifyDown();
    return minValue;
  }

  // Heapify Up
  heapifyUp() {
    let currentIndex = this.heap.length - 1;
    while (
      this.hasParent(currentIndex) &&
      this.getParent(currentIndex) > this.heap[currentIndex]
    ) {
      const parentIndex = this.getParentIndex(currentIndex);
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
    }
  }

  // Heapify Down
  heapifyDown() {
    let currentIndex = 0;
    while (this.hasLeftChild(currentIndex)) {
      let smallestChildIndex = this.getLeftChildIndex(currentIndex);
      if (
        this.hasRightChild(currentIndex) &&
        this.getRightChild(currentIndex) < this.getLeftChild(currentIndex)
      ) {
        smallestChildIndex = this.getRightChildIndex(currentIndex);
      }

      if (this.heap[currentIndex] < this.heap[smallestChildIndex]) {
        break;
      } else {
        this.swap(currentIndex, smallestChildIndex);
      }

      currentIndex = smallestChildIndex;
    }
  }
}
class PriorityQueue {
  constructor() {
    this.heap = new BinaryHeap();
  }

  enqueue(item, priority) {
    const element = { item, priority };
    this.heap.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error('Priority Queue is empty');
    }
    const element = this.heap.pop();
    return element.item;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error('Priority Queue is empty');
    }
    return this.heap.peek().item;
  }

  size() {
    return this.heap.size();
  }

  isEmpty() {
    return this.heap.isEmpty();
  }
}
const pq = new PriorityQueue();

pq.enqueue('Task 1', 3);
pq.enqueue('Task 2', 1);
pq.enqueue('Task 3', 2);

console.log(pq.dequeue()); // Output: 'Task 2'
console.log(pq.dequeue()); // Output: 'Task 3'
console.log(pq.dequeue()); // Output: 'Task 1'
