class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  swap(index1, index2) {
    const temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  push(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  pop() {
    if (this.heap.length === 0) {
      return null;
    }

    const root = this.heap[0];
    const lastNode = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = lastNode;
      this.heapifyDown(0);
    }

    return root;
  }

  heapifyUp(index) {
    let currentIndex = index;
    let parentIndex = this.getParentIndex(currentIndex);

    while (currentIndex > 0 && this.heap[currentIndex] < this.heap[parentIndex]) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = this.getParentIndex(currentIndex);
    }
  }

  heapifyDown(index) {
    let currentIndex = index;
    let leftChildIndex = 2 * index + 1;
    let rightChildIndex = 2 * index + 2;
    let smallestChildIndex = currentIndex;

    if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallestChildIndex]) {
      smallestChildIndex = leftChildIndex;
    }

    if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallestChildIndex]) {
      smallestChildIndex = rightChildIndex;
    }

    if (smallestChildIndex !== currentIndex) {
      this.swap(currentIndex, smallestChildIndex);
      this.heapifyDown(smallestChildIndex);
    }
  }

  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

// Example usage
const pq = new PriorityQueue();

pq.push(5);
pq.push(2);
pq.push(8);

console.log(pq.pop()); // Output: 2
console.log(pq.pop()); // Output: 5
console.log(pq.pop()); // Output: 8
