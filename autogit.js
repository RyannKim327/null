class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  // other methods will be implemented here
}
enqueue(element) {
  this.heap.push(element);
  this.bubbleUp();
}

bubbleUp() {
  let index = this.heap.length - 1;
  const element = this.heap[index];

  while (index > 0) {
    const parentIndex = Math.floor((index - 1) / 2);
    const parent = this.heap[parentIndex];

    if (element >= parent) break;

    this.heap[parentIndex] = element;
    this.heap[index] = parent;
    index = parentIndex;
  }
}
dequeue() {
  const min = this.heap[0];
  const last = this.heap.pop();

  if (this.heap.length > 0) {
    this.heap[0] = last;
    this.sinkDown(0);
  }

  return min;
}

sinkDown(index) {
  const length = this.heap.length;
  const element = this.heap[index];

  while (true) {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    let smallestChildIndex = index;
    let smallestChild = element;

    if (leftChildIndex < length) {
      const leftChild = this.heap[leftChildIndex];
      if (leftChild < smallestChild) {
        smallestChildIndex = leftChildIndex;
        smallestChild = leftChild;
      }
    }

    if (rightChildIndex < length) {
      const rightChild = this.heap[rightChildIndex];
      if (rightChild < smallestChild) {
        smallestChildIndex = rightChildIndex;
        smallestChild = rightChild;
      }
    }

    if (smallestChildIndex === index) break;

    this.heap[index] = smallestChild;
    this.heap[smallestChildIndex] = element;
    index = smallestChildIndex;
  }
}
