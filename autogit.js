class BinaryHeap {
  constructor() {
    this.heap = [];
  }

  // ...
}
// Get the parent index of a node
getParentIndex(index) {
  return Math.floor((index - 1) / 2);
}

// Get the left child index of a node
getLeftChildIndex(index) {
  return 2 * index + 1;
}

// Get the right child index of a node
getRightChildIndex(index) {
  return 2 * index + 2;
}

// Check if a node has a parent
hasParent(index) {
  return this.getParentIndex(index) >= 0;
}

// Check if a node has a left child
hasLeftChild(index) {
  return this.getLeftChildIndex(index) < this.heap.length;
}

// Check if a node has a right child
hasRightChild(index) {
  return this.getRightChildIndex(index) < this.heap.length;
}

// Swap two nodes in the heap
swap(index1, index2) {
  [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
}

// Get the top element (minimum value) of the heap without removing it
peek() {
  if (this.heap.length === 0) {
    throw new Error('Heap is empty');
  }
  return this.heap[0];
}
insert(value) {
  this.heap.push(value);
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
extract() {
  if (this.heap.length === 0) {
    throw new Error('Heap is empty');
  }

  const minValue = this.heap[0];
  this.heap[0] = this.heap[this.heap.length - 1];
  this.heap.pop();
  this.heapifyDown();
  return minValue;
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
const heap = new BinaryHeap();
heap.insert(4);
heap.insert(1);
heap.insert(3);
heap.insert(2);
heap.insert(5);

console.log(heap.peek()); // Output: 1

console.log(heap.extract()); // Output: 1
console.log(heap.extract()); // Output: 2
console.log(heap.extract()); // Output: 3

heap.insert(0);

console.log(heap.extract()); // Output: 0
console.log(heap.extract()); // Output: 4
console.log(heap.extract()); // Output: 5
