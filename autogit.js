class BinaryHeap {
  constructor(compare) {
    this.heap = [];
    this.compare = compare;
  }

  // Heap methods (not priority queue specific)

  // ... (implementation of heap methods omitted for brevity)
}
class BinaryHeap {
  constructor(compare) {
    this.heap = [];
    this.compare = compare;
  }

  // Heap methods

  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.heap.length;
  }

  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.heap.length;
  }

  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }

  leftChild(index) {
    return this.heap[this.getLeftChildIndex(index)];
  }

  rightChild(index) {
    return this.heap[this.getRightChildIndex(index)];
  }

  parent(index) {
    return this.heap[this.getParentIndex(index)];
  }

  swap(index1, index2) {
    const temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  // Priority queue methods

  peek() {
    if (this.heap.length === 0) {
      throw new Error('Priority queue is empty');
    }
    return this.heap[0];
  }

  poll() {
    if (this.heap.length === 0) {
      throw new Error('Priority queue is empty');
    }
    const top = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.heapifyDown();
    }
    return top;
  }

  add(element) {
    this.heap.push(element);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (
      this.hasParent(index) &&
      this.compare(this.heap[index], this.parent(index)) < 0
    ) {
      const parentIndex = this.getParentIndex(index);
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  heapifyDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (
        this.hasRightChild(index) &&
        this.compare(this.rightChild(index), this.leftChild(index)) < 0
      ) {
        smallerChildIndex = this.getRightChildIndex(index);
      }

      if (this.compare(this.heap[index], this.heap[smallerChildIndex]) < 0) {
        break;
      } else {
        this.swap(index, smallerChildIndex);
      }

      index = smallerChildIndex;
    }
  }
}
// Custom compare function to determine the priority order.
// Lower values have higher priority in this example.
function compare(a, b) {
  return a - b;
}

// Create a priority queue using the BinaryHeap class
const priorityQueue = new BinaryHeap(compare);

// Add elements to the priority queue
priorityQueue.add(5);
priorityQueue.add(3);
priorityQueue.add(8);
priorityQueue.add(1);

// Poll elements from the priority queue in priority order
while (priorityQueue.heap.length > 0) {
  console.log(priorityQueue.poll());
}

// Output: 1, 3, 5, 8
