class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return index * 2 + 1;
  }

  getRightChildIndex(index) {
    return index * 2 + 2;
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

  peek() {
    if (this.heap.length === 0) {
      return null;
    }
    return this.heap[0];
  }

  enqueue(element) {
    this.heap.push(element);
    this.heapifyUp();
  }

  dequeue() {
    if (this.heap.length === 0) {
      return null;
    }
    const element = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return element;
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
