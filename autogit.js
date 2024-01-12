class BinaryHeap {
  constructor() {
    this.heap = [];
  }

  // Helper functions
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }

  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.heap.length;
  }

  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.heap.length;
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }

  // Heap operations
  push(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  pop() {
    if (this.heap.length === 0) {
      throw new Error("Priority queue is empty!");
    }

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return root;
  }

  heapifyUp() {
    let index = this.heap.length - 1;

    while (this.hasParent(index) && this.heap[index] < this.heap[this.getParentIndex(index)]) {
      const parentIndex = this.getParentIndex(index);
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  heapifyDown() {
    let index = 0;

    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index);

      if (this.hasRightChild(index) && this.heap[this.getRightChildIndex(index)] < this.heap[smallerChildIndex]) {
        smallerChildIndex = this.getRightChildIndex(index);
      }

      if (this.heap[index] < this.heap[smallerChildIndex]) {
        break;
      } else {
        this.swap(index, smallerChildIndex);
      }

      index = smallerChildIndex;
    }
  }
}
class PriorityQueue {
  constructor() {
    this.binaryHeap = new BinaryHeap();
  }

  enqueue(value) {
    this.binaryHeap.push(value);
  }

  dequeue() {
    return this.binaryHeap.pop();
  }

  isEmpty() {
    return this.binaryHeap.heap.length === 0;
  }
}
const pq = new PriorityQueue();
pq.enqueue(5);
pq.enqueue(3);
pq.enqueue(10);
pq.enqueue(1);

while(!pq.isEmpty()) {
  console.log(pq.dequeue());
}
1
3
5
10
