class PriorityQueue {
  constructor() {
    this.heap = [];
  }
  // other methods...
}
swapElements(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
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
  return this.getLeftChildIndex(index) < this.heap.length;
}

hasRightChild(index) {
  return this.getRightChildIndex(index) < this.heap.length;
}
getParent(index) {
  return this.heap[this.getParentIndex(index)];
}

getLeftChild(index) {
  return this.heap[this.getLeftChildIndex(index)];
}

getRightChild(index) {
  return this.heap[this.getRightChildIndex(index)];
}
bubbleUp(index) {
  while (this.hasParent(index) && this.heap[index] < this.getParent(index)) {
    const parentIndex = this.getParentIndex(index);
    this.swapElements(this.heap, index, parentIndex);
    index = parentIndex;
  }
}
bubbleDown(index) {
  while (this.hasLeftChild(index)) {
    let smallerChildIndex = this.getLeftChildIndex(index);
    if (this.hasRightChild(index) && this.getRightChild(index) < this.getLeftChild(index)) {
      smallerChildIndex = this.getRightChildIndex(index);
    }
    if (this.heap[index] < this.heap[smallerChildIndex]) {
      break;
    }
    this.swapElements(this.heap, index, smallerChildIndex);
    index = smallerChildIndex;
  }
}
enqueue(value) {
  this.heap.push(value);
  this.bubbleUp(this.heap.length - 1);
}
dequeue() {
  if (this.heap.length === 0) {
    return null;
  }
  if (this.heap.length === 1) {
    return this.heap.pop();
  }
  const priorityElement = this.heap[0];
  this.heap[0] = this.heap.pop();
  this.bubbleDown(0);
  return priorityElement;
}
