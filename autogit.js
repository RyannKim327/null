function findKthSmallest(arr, k) {
  arr.sort((a, b) => a - b);
  return arr[k - 1];
}
class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let element = this.heap[index];
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.heap[parentIndex];
      if (parent <= element) break;
      this.heap[index] = parent;
      this.heap[parentIndex] = element;
      index = parentIndex;
    }
  }

  extractMin() {
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.sinkDown(0);
    return min;
  }

  sinkDown(index) {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    let smallestIndex = index;
    const length = this.heap.length;

    if (leftChildIndex < length && this.heap[leftChildIndex] < this.heap[smallestIndex]) {
      smallestIndex = leftChildIndex;
    }

    if (rightChildIndex < length && this.heap[rightChildIndex] < this.heap[smallestIndex]) {
      smallestIndex = rightChildIndex;
    }

    if (smallestIndex !== index) {
      [this.heap[smallestIndex], this.heap[index]] = [this.heap[index], this.heap[smallestIndex]];
      this.sinkDown(smallestIndex);
    }
  }
}

function findKthSmallest(arr, k) {
  const heap = new MinHeap();
  arr.forEach((num) => heap.insert(num));
  for (let i = 0; i < k - 1; i++) {
    heap.extractMin();
  }
  return heap.extractMin();
}
function findKthSmallest(arr, k) {
  const pivot = arr[Math.floor(arr.length / 2)];
  const smaller = arr.filter((num) => num < pivot);
  const equal = arr.filter((num) => num === pivot);
  const greater = arr.filter((num) => num > pivot);

  if (k <= smaller.length) {
    return findKthSmallest(smaller, k);
  } else if (k <= smaller.length + equal.length) {
    return pivot;
  } else {
    return findKthSmallest(greater, k - smaller.length - equal.length);
  }
}
