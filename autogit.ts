class MinHeap {
  private heap: number[] = [];

  // Helper function to get the index of the parent
  private parent(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  // Helper function to get the index of the left child
  private leftChild(index: number): number {
    return 2 * index + 1;
  }

  // Helper function to get the index of the right child
  private rightChild(index: number): number {
    return 2 * index + 2;
  }

  // Swap two elements in the heap
  private swap(i: number, j: number): void {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  // Insert a new value to the heap
  public insert(value: number): void {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  // Move the element at index up to maintain the heap property
  private bubbleUp(index: number): void {
    while (index > 0) {
      const parentIndex = this.parent(index);
      if (this.heap[index] < this.heap[parentIndex]) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  // Extract the minimum value from the heap
  public extractMin(): number | null {
    if (this.heap.length === 0) {
      return null; // No elements to extract
    }
    if (this.heap.length === 1) {
      return this.heap.pop()!; // Only one element
    }

    const min = this.heap[0];
    this.heap[0] = this.heap.pop()!; // Replace root with the last element
    this.bubbleDown(0);
    return min;
  }

  // Move the element at index down to maintain the heap property
  private bubbleDown(index: number): void {
    const length = this.heap.length;
    let smallest = index;

    const leftIndex = this.leftChild(index);
    if (leftIndex < length && this.heap[leftIndex] < this.heap[smallest]) {
      smallest = leftIndex;
    }

    const rightIndex = this.rightChild(index);
    if (rightIndex < length && this.heap[rightIndex] < this.heap[smallest]) {
      smallest = rightIndex;
    }

    if (smallest !== index) {
      this.swap(index, smallest);
      this.bubbleDown(smallest);
    }
  }

  // Get the minimum value without extracting it
  public peek(): number | null {
    return this.heap.length ? this.heap[0] : null;
  }

  // Check if the heap is empty
  public isEmpty(): boolean {
    return this.heap.length === 0;
  }

  // Get the size of the heap
  public size(): number {
    return this.heap.length;
  }
}

// Example usage:

const pq = new MinHeap();
pq.insert(5);
pq.insert(3);
pq.insert(8);
pq.insert(1);

console.log(pq.extractMin()); // Outputs: 1
console.log(pq.peek()); // Outputs: 3
console.log(pq.size()); // Outputs: 3
console.log(pq.isEmpty()); // Outputs: false
