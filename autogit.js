class BinaryHeap {
  constructor() {
    this.heap = [];
  }
}
// Method to swap two elements in the heap
swap(index1, index2) {
  const temp = this.heap[index1];
  this.heap[index1] = this.heap[index2];
  this.heap[index2] = temp;
}

// Method to get the parent index of a given index
getParentIndex(index) {
  return Math.floor((index - 1) / 2);
}

// Method to get the left child index of a given index
getLeftChildIndex(index) {
  return 2 * index + 1;
}

// Method to get the right child index of a given index
getRightChildIndex(index) {
  return 2 * index + 2;
}

// Method to check if a given index is valid (within range)
isValidIndex(index) {
  return index >= 0 && index < this.heap.length;
}
insert(value) {
  // Add the new element to the end of the heap
  this.heap.push(value);

  // Get the index of the newly added element
  let currentIndex = this.heap.length - 1;

  // Compare the new element with its parent and swap if needed
  while (
    currentIndex > 0 &&
    this.heap[currentIndex] < this.heap[this.getParentIndex(currentIndex)]
  ) {
    const parentIndex = this.getParentIndex(currentIndex);
    this.swap(currentIndex, parentIndex);
    currentIndex = parentIndex;
  }
}
extractMin() {
  if (this.heap.length === 0) {
    return null; // Return null when the heap is empty
  }

  if (this.heap.length === 1) {
    return this.heap.pop(); // Return the last element when the heap has only one element
  }

  // Remove the root element and replace it with the last element
  const min = this.heap[0];
  this.heap[0] = this.heap.pop();

  // Start from the root and compare with its children, swapping if needed
  let currentIndex = 0;
  while (true) {
    let smallestIndex = currentIndex;
    const leftChildIndex = this.getLeftChildIndex(currentIndex);
    const rightChildIndex = this.getRightChildIndex(currentIndex);

    // Compare with the left child
    if (
      leftChildIndex < this.heap.length &&
      this.heap[leftChildIndex] < this.heap[smallestIndex]
    ) {
      smallestIndex = leftChildIndex;
    }

    // Compare with the right child
    if (
      rightChildIndex < this.heap.length &&
      this.heap[rightChildIndex] < this.heap[smallestIndex]
    ) {
      smallestIndex = rightChildIndex;
    }

    // If the current element is already smaller than both children, heap property is maintained
    if (currentIndex === smallestIndex) {
      break;
    }

    // Swap the current element with the smallest child
    this.swap(currentIndex, smallestIndex);
    currentIndex = smallestIndex;
  }

  return min; // Return the extracted minimum value
}
