function findKthSmallest(arr: number[], k: number): number {
  arr.sort((a, b) => a - b);
  return arr[k - 1];
}
import { nth } from 'lodash';

function findKthSmallest(arr: number[], k: number): number {
  return nth(arr.sort((a, b) => a - b), k - 1);
}
class PriorityQueue {
  private heap: number[];

  constructor() {
    this.heap = [];
  }

  insert(element: number) {
    this.heap.push(element);
    this.heapifyUp(this.heap.length - 1);
  }

  extractMin(): number {
    if (this.heap.length === 0) {
      throw new Error('Heap is empty');
    }
    const min = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapifyDown(0);
    return min;
  }

  private heapifyUp(index: number) {
    if (index === 0) return;
    const parentIndex = Math.floor((index - 1) / 2);
    if (this.heap[parentIndex] > this.heap[index]) {
      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
      this.heapifyUp(parentIndex);
    }
  }

  private heapifyDown(index: number) {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    let smallest = index;
    if (
      leftChildIndex < this.heap.length &&
      this.heap[leftChildIndex] < this.heap[smallest]
    ) {
      smallest = leftChildIndex;
    }
    if (
      rightChildIndex < this.heap.length &&
      this.heap[rightChildIndex] < this.heap[smallest]
    ) {
      smallest = rightChildIndex;
    }
    if (smallest !== index) {
      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
      this.heapifyDown(smallest);
    }
  }
}

function findKthSmallest(arr: number[], k: number): number {
  const pq = new PriorityQueue();
  for (const element of arr) {
    pq.insert(element);
  }
  for (let i = 0; i < k - 1; i++) {
    pq.extractMin();
  }
  return pq.extractMin();
}
function partition(arr: number[], low: number, high: number): number {
  const pivot = arr[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

function quickSelect(arr: number[], k: number): number {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    const pivotIndex = partition(arr, low, high);
    if (pivotIndex === k - 1) return arr[pivotIndex];
    if (pivotIndex < k - 1) {
      low = pivotIndex + 1;
    } else {
      high = pivotIndex - 1;
    }
  }
  throw new Error('k is out of range');
}

function findKthSmallest(arr: number[], k: number): number {
  return quickSelect(arr, k);
}
