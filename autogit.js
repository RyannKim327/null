class BinaryHeap {
  constructor() {
    this.heap = [];
    this.size = 0;
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return (2 * index) + 1;
  }

  getRightChildIndex(index) {
    return (2 * index) + 2;
  }

  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }

  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.size;
  }

  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.size;
  }

  parent(index) {
    return this.heap[this.getParentIndex(index)];
  }

  leftChild(index) {
    return this.heap[this.getLeftChildIndex(index)];
  }

  rightChild(index) {
    return this.heap[this.getRightChildIndex(index)];
  }

  swap(index1, index2) {
    const temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  peek() {
    if (this.size === 0) {
      throw new Error('Priority queue is empty.');
    }
    return this.heap[0];
  }

  add(item) {
    this.heap.push(item);
    this.size++;
    this.heapifyUp();
  }

  poll() {
    if (this.size === 0) {
      throw new Error('Priority queue is empty.');
    }
    const item = this.heap[0];
    this.heap[0] = this.heap[this.size - 1];
    this.heap.pop();
    this.size--;
    this.heapifyDown();
    return item;
  }

  heapifyUp() {
    let index = this.size - 1;
    while (this.hasParent(index) && this.parent(index) > this.heap[index]) {
      const parentIndex = this.getParentIndex(index);
      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  heapifyDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (this.hasRightChild(index) &&
          this.rightChild(index) < this.leftChild(index)) {
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
const priorityQueue = new BinaryHeap();
priorityQueue.add(5);
priorityQueue.add(3);
priorityQueue.add(7);
priorityQueue.add(1);
console.log(priorityQueue.poll()); // Output: 1
console.log(priorityQueue.poll()); // Output: 3
console.log(priorityQueue.poll()); // Output: 5
console.log(priorityQueue.poll()); // Output: 7
