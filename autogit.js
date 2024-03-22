class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  swap(index1, index2) {
    const temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  enqueue(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const maxValue = this.heap[0];
    const lastValue = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = lastValue;
      this.heapifyDown();
    }

    return maxValue;
  }

  peek() {
    return this.heap[0];
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  heapifyUp() {
    let currentIndex = this.heap.length - 1;

    while (currentIndex > 0) {
      const parentIndex = this.getParentIndex(currentIndex);

      if (this.heap[parentIndex] <= this.heap[currentIndex]) {
        break;
      }

      this.swap(parentIndex, currentIndex);
      currentIndex = parentIndex;
    }
  }

  heapifyDown() {
    let currentIndex = 0;

    while (this.getLeftChildIndex(currentIndex) < this.heap.length) {
      let smallerChildIndex = this.getLeftChildIndex(currentIndex);

      if (this.getRightChildIndex(currentIndex) < this.heap.length &&
          this.heap[this.getRightChildIndex(currentIndex)] < this.heap[smallerChildIndex]) {
        smallerChildIndex = this.getRightChildIndex(currentIndex);
      }

      if (this.heap[currentIndex] <= this.heap[smallerChildIndex]) {
        break;
      }

      this.swap(currentIndex, smallerChildIndex);
      currentIndex = smallerChildIndex;
    }
  }
}

// Example usage
const pq = new PriorityQueue();
pq.enqueue(5);
pq.enqueue(3);
pq.enqueue(7);
pq.enqueue(1);

console.log(pq.dequeue()); // Output: 1
console.log(pq.dequeue()); // Output: 3
