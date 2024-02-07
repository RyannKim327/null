class PriorityQueue {
  constructor(compare) {
    this.heap = [];
    this.compare = compare;
  }
}
class PriorityQueue {
  // ...

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
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
}
class PriorityQueue {
  // ...
  
  push(element) {
    this.heap.push(element);
    let currentIndex = this.heap.length - 1;
    let parentIndex = this.getParentIndex(currentIndex);
    while (
      currentIndex > 0 &&
      this.compare(this.heap[currentIndex], this.heap[parentIndex]) < 0
    ) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = this.getParentIndex(currentIndex);
    }
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    const element = this.heap[0];
    this.heap[0] = this.heap.pop();
    let currentIndex = 0;
    let leftChildIndex = this.getLeftChildIndex(currentIndex);
    let rightChildIndex = this.getRightChildIndex(currentIndex);
    while (
      (leftChildIndex < this.heap.length &&
        this.compare(this.heap[currentIndex], this.heap[leftChildIndex]) > 0) ||
      (rightChildIndex < this.heap.length &&
        this.compare(this.heap[currentIndex], this.heap[rightChildIndex]) > 0)
    ) {
      if (
        rightChildIndex < this.heap.length &&
        this.compare(this.heap[rightChildIndex], this.heap[leftChildIndex]) < 0
      ) {
        this.swap(currentIndex, rightChildIndex);
        currentIndex = rightChildIndex;
      } else {
        this.swap(currentIndex, leftChildIndex);
        currentIndex = leftChildIndex;
      }
      leftChildIndex = this.getLeftChildIndex(currentIndex);
      rightChildIndex = this.getRightChildIndex(currentIndex);
    }
    return element;
  }
}
class PriorityQueue {
  // ...
  
  isEmpty() {
    return this.heap.length === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.heap[0];
  }
}
