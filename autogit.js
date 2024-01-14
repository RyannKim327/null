class BinaryHeap {
  constructor() {
    this.heap = [];
  }

  // Helper methods...
}
swap(i, j) {
  const temp = this.heap[i];
  this.heap[i] = this.heap[j];
  this.heap[j] = temp;
}
getParentIndex(childIndex) {
  return Math.floor((childIndex - 1) / 2);
}
getLeftChildIndex(parentIndex) {
  return parentIndex * 2 + 1;
}
getRightChildIndex(parentIndex) {
  return parentIndex * 2 + 2;
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
peek() {
  if (this.heap.length === 0) {
    return null; // Heap is empty
  }
  return this.heap[0];
}
poll() {
  if (this.heap.length === 0) {
    return null; // Heap is empty
  }
  if (this.heap.length === 1) {
    return this.heap.pop();
  }
  const item = this.heap[0];
  this.heap[0] = this.heap.pop();
  this.heapifyDown();
  return item;
}
add(item) {
  this.heap.push(item);
  this.heapifyUp();
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
