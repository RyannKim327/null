function findKthSmallestElement(array, k) {
  array.sort((a, b) => a - b);
  return array[k - 1];
}

const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5];
const k = 3;
console.log(findKthSmallestElement(arr, k)); // Output: 3
class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] > this.heap[index]) {
        [this.heap[parentIndex], this.heap[index]] = [
          this.heap[index],
          this.heap[parentIndex],
        ];
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  extractMin() {
    if (this.heap.length === 0) {
      return null;
    }

    const minValue = this.heap[0];
    const lastElement = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = lastElement;
      this.sinkDown(0);
    }

    return minValue;
  }

  sinkDown(index) {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    let smallestIndex = index;

    if (
      leftChildIndex < this.heap.length &&
      this.heap[leftChildIndex] < this.heap[smallestIndex]
    ) {
      smallestIndex = leftChildIndex;
    }

    if (
      rightChildIndex < this.heap.length &&
      this.heap[rightChildIndex] < this.heap[smallestIndex]
    ) {
      smallestIndex = rightChildIndex;
    }

    if (smallestIndex !== index) {
      [this.heap[index], this.heap[smallestIndex]] = [
        this.heap[smallestIndex],
        this.heap[index],
      ];
      this.sinkDown(smallestIndex);
    }
  }
}

function findKthSmallestElement(array, k) {
  const heap = new MinHeap();
  for (let i = 0; i < array.length; i++) {
    heap.insert(array[i]);
  }

  for (let i = 0; i < k - 1; i++) {
    heap.extractMin();
  }

  return heap.extractMin();
}

const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5];
const k = 3;
console.log(findKthSmallestElement(arr, k)); // Output: 3
function findKthSmallestElement(array, k) {
  const left = 0;
  const right = array.length - 1;

  while (true) {
    if (left === right) {
      return array[left];
    }

    let pivotIndex = partition(array, left, right);

    if (k === pivotIndex) {
      return array[k];
    } else if (k < pivotIndex) {
      right = pivotIndex - 1;
    } else {
      left = pivotIndex + 1;
    }
  }
}

function partition(array, left, right) {
  const pivotValue = array[right];
  let pivotIndex = left;

  for (let i = left; i < right; i++) {
    if (array[i] < pivotValue) {
      swap(array, i, pivotIndex);
      pivotIndex++;
    }
  }

  swap(array, right, pivotIndex);
  return pivotIndex;
}

function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]];
}

const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5];
const k = 3;
console.log(findKthSmallestElement(arr, k)); // Output: 3
