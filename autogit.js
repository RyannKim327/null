class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  // helper function to get the parent index of a node
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  // helper function to get the left child index of a node
  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  // helper function to get the right child index of a node
  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  // helper function to swap two elements in the heap
  swap(i, j) {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }

  // helper function to sift up a node to its correct position
  siftUp(index) {
    if (index === 0) return; // already at the root

    const parentIndex = this.getParentIndex(index);

    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index);
      this.siftUp(parentIndex);
    }
  }

  // helper function to sift down a node to its correct position
  siftDown(index) {
    const leftChildIndex = this.getLeftChildIndex(index);
    const rightChildIndex = this.getRightChildIndex(index);

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
      this.swap(index, smallest);
      this.siftDown(smallest);
    }
  }

  // insert an element with a priority into the priority queue
  enqueue(element) {
    this.heap.push(element);
    this.siftUp(this.heap.length - 1);
  }

  // remove and return the highest priority element from the priority queue
  dequeue() {
    if (this.isEmpty()) return null;

    this.swap(0, this.heap.length - 1);

    const highestPriority = this.heap.pop();

    this.siftDown(0);

    return highestPriority;
  }

  // check if the priority queue is empty
  isEmpty() {
    return this.heap.length === 0;
  }

  // get the highest priority element without removing it from the priority queue
  peek() {
    if (this.isEmpty()) return null;
    return this.heap[0];
  }

  // get the size of the priority queue
  size() {
    return this.heap.length;
  }
}
const pq = new PriorityQueue();

pq.enqueue(5);
pq.enqueue(2);
pq.enqueue(7);
pq.enqueue(1);

console.log(pq.dequeue()); // Output: 1
console.log(pq.dequeue()); // Output: 2
console.log(pq.peek());    // Output: 5
console.log(pq.size());    // Output: 2
