function findKthSmallest(arr: number[], k: number): number {
  arr.sort((a, b) => a - b);
  return arr[k - 1];
}
class MinHeap {
  private heap: number[];

  constructor(arr: number[]) {
    this.heap = arr;
    this.buildHeap();
  }

  private buildHeap() {
    for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
      this.heapify(i);
    }
  }

  private heapify(i: number) {
    let smallest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }

    if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }

    if (smallest !== i) {
      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      this.heapify(smallest);
    }
  }

  public extractMin(): number {
    if (this.heap.length === 0) {
      throw new Error("Heap is empty");
    }

    const min = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapify(0);
    return min;
  }
}

function findKthSmallest(arr: number[], k: number): number {
  const minHeap = new MinHeap(arr);
  for (let i = 0; i < k - 1; i++) {
    minHeap.extractMin();
  }
  return minHeap.extractMin();
}
function partition(arr: number[], low: number, high: number): number {
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
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
    if (pivotIndex === k - 1) {
      return arr[pivotIndex];
    } else if (pivotIndex < k - 1) {
      low = pivotIndex + 1;
    } else {
      high = pivotIndex - 1;
    }
  }

  throw new Error("K is out of range");
}

function findKthSmallest(arr: number[], k: number): number {
  return quickSelect(arr, k);
}
