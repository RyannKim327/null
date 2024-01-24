class BinaryHeap {
  constructor() {
    this.heap = [];
  }

  // helper functions
  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1]
    ];
  }

  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  leftChildIndex(index) {
    return 2 * index + 1;
  }

  rightChildIndex(index) {
    return 2 * index + 2;
  }

  hasParent(index) {
    return this.parentIndex(index) >= 0;
  }

  hasLeftChild(index) {
    return this.leftChildIndex(index) < this.heap.length;
  }

  hasRightChild(index) {
    return this.rightChildIndex(index) < this.heap.length;
  }

  parent(index) {
    return this.heap[this.parentIndex(index)];
  }

  leftChild(index) {
    return this.heap[this.leftChildIndex(index)];
  }

  rightChild(index) {
    return this.heap[this.rightChildIndex(index)];
  }

  // main functions
  enqueue(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  dequeue() {
    if (this.heap.length === 0) {
      throw new Error("Heap is empty");
    }

    const minValue = this.heap[0];
    const lastValue = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = lastValue;
      this.heapifyDown();
    }

    return minValue;
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (
      this.hasParent(index) &&
      this.parent(index) > this.heap[index]
    ) {
      const parentIndex = this.parentIndex(index);
      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  heapifyDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.leftChildIndex(index);
      if (
        this.hasRightChild(index) &&
        this.rightChild(index) < this.leftChild(index)
      ) {
        smallerChildIndex = this.rightChildIndex(index);
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
// Create a new priority queue
const priorityQueue = new BinaryHeap();

// Adding elements to the queue
priorityQueue.enqueue(5);
priorityQueue.enqueue(7);
priorityQueue.enqueue(3);
priorityQueue.enqueue(1);
priorityQueue.enqueue(9);

// Removing elements from the queue (in ascending order)
console.log(priorityQueue.dequeue()); // Output: 1
console.log(priorityQueue.dequeue()); // Output: 3
console.log(priorityQueue.dequeue()); // Output: 5
console.log(priorityQueue.dequeue()); // Output: 7
console.log(priorityQueue.dequeue()); // Output: 9
