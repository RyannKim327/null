class HeapSort {
  public static sort(arr: number[]): number[] {
    let heap = arr.slice(); // create a copy of the original array
    let n = heap.length;

    // build a max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      this.heapify(heap, n, i);
    }

    // extract elements from the heap one by one
    for (let i = n - 1; i > 0; i--) {
      // swap the root element with the last element
      [heap[0], heap[i]] = [heap[i], heap[0]];

      // call heapify on the reduced heap
      this.heapify(heap, i, 0);
    }

    return heap;
  }

  private static heapify(heap: number[], n: number, i: number) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && heap[left] > heap[largest]) {
      largest = left;
    }

    if (right < n && heap[right] > heap[largest]) {
      largest = right;
    }

    if (largest !== i) {
      [heap[i], heap[largest]] = [heap[largest], heap[i]];
      this.heapify(heap, n, largest);
    }
  }
}
const arr = [5, 2, 8, 3, 1, 6, 4];
const sortedArr = HeapSort.sort(arr);
console.log(sortedArr); // [1, 2, 3, 4, 5, 6, 8]
