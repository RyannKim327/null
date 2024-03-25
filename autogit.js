class BinaryHeap {
  constructor() {
    this.heap = [];
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
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

  enqueue(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapifyUp() {
    let currentIndex = this.heap.length - 1;

    while (currentIndex > 0) {
      const parentIndex = this.getParentIndex(currentIndex);

      if (this.heap[currentIndex] < this.heap[parentIndex]) {
        this.swap(currentIndex, parentIndex);
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  dequeue() {
    if (this.heap.length === 0) {
      return null;
    }

    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const minValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();

    return minValue;
  }

  heapifyDown() {
    let currentIndex = 0;

    while (this.getLeftChildIndex(currentIndex) < this.heap.length) {
      const leftChildIndex = this.getLeftChildIndex(currentIndex);
      const rightChildIndex = this.getRightChildIndex(currentIndex);
      let smallerChildIndex = leftChildIndex;

      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[leftChildIndex]) {
        smallerChildIndex = rightChildIndex;
      }

      if (this.heap[currentIndex] > this.heap[smallerChildIndex]) {
        this.swap(currentIndex, smallerChildIndex);
        currentIndex = smallerChildIndex;
      } else {
        break;
      }
    }
  }

  peek() {
    if (this.heap.length === 0) {
      return null;
    }

    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

// Priority Queue class that utilizes BinaryHeap
class PriorityQueue {
  constructor() {
    this.binaryHeap = new BinaryHeap();
  }

  enqueue(value) {
    this.binaryHeap.enqueue(value);
  }

  dequeue() {
    return this.binaryHeap.dequeue();
  }

  peek() {
    return this.binaryHeap.peek();
  }

  size() {
    return this.binaryHeap.size();
  }

  isEmpty() {
    return this.binaryHeap.isEmpty();
  }
}

// Example Usage
const pq = new PriorityQueue();
pq.enqueue(5);
pq.enqueue(2);
pq.enqueue(10);
console.log(pq.dequeue()); // 2
console.log(pq.dequeue()); // 5
console.log(pq.dequeue()); // 10
