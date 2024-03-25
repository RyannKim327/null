class PriorityQueue {
  constructor() {
    this.heap = [null]; // We start from index 1 to make calculations easier
  }

  // Helper function to swap two elements in the heap
  swap(i, j) {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }

  // Helper function to find the parent node of a given index
  parent(idx) {
    return Math.floor(idx / 2);
  }

  // Helper function to find the left child of a given index
  leftChild(idx) {
    return idx * 2;
  }

  // Helper function to find the right child of a given index
  rightChild(idx) {
    return idx * 2 + 1;
  }

  // Helper function to maintain the heap property by moving the element up the heap
  bubbleUp() {
    let idx = this.heap.length - 1;
    while (idx > 1 && this.heap[idx][0] < this.heap[this.parent(idx)][0]) {
      this.swap(idx, this.parent(idx));
      idx = this.parent(idx);
    }
  }

  // Helper function to maintain the heap property by moving the element down the heap
  bubbleDown() {
    let idx = 1;
    while (
      (this.leftChild(idx) < this.heap.length && this.heap[idx][0] > this.heap[this.leftChild(idx)][0]) ||
      (this.rightChild(idx) < this.heap.length && this.heap[idx][0] > this.heap[this.rightChild(idx)][0])
    ) {
      const smallerChildIdx =
        this.rightChild(idx) < this.heap.length && this.heap[this.rightChild(idx)][0] < this.heap[this.leftChild(idx)][0]
          ? this.rightChild(idx)
          : this.leftChild(idx);

      this.swap(idx, smallerChildIdx);
      idx = smallerChildIdx;
    }
  }

  // Method to add an element to the priority queue
  push(value, priority) {
    this.heap.push([priority, value]);
    this.bubbleUp();
  }

  // Method to remove and return the element with the highest priority
  pop() {
    if (this.heap.length === 1) return null;

    const top = this.heap[1][1];
    this.heap[1] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.bubbleDown();

    return top;
  }

  // Method to check if the priority queue is empty
  isEmpty() {
    return this.heap.length <= 1;
  }
}

// Test the priority queue implementation
const pq = new PriorityQueue();

pq.push('task1', 2);
pq.push('task2', 1);
pq.push('task3', 3);

while (!pq.isEmpty()) {
  console.log(pq.pop());
}
