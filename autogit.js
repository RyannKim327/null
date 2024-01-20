class BinaryHeap {
  constructor() {
    this.heap = [];
  }

  // Return the parent index of a node
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  // Return the left child index of a node
  getLeftChildIndex(index) {
    return index * 2 + 1;
  }

  // Return the right child index of a node
  getRightChildIndex(index) {
    return index * 2 + 2;
  }

  // Swap two elements in the heap
  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }

  // Insert an element into the heap
  insert(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  // Move the element at the given index up the heap
  heapifyUp(index) {
    if (index <= 0) return;

    const parentIndex = this.getParentIndex(index);
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index);
      this.heapifyUp(parentIndex);
    }
  }

  // Remove and return the minimum element from the heap
  removeMin() {
    if (this.heap.length === 0) return null;

    const minValue = this.heap[0];
    const lastValue = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = lastValue;
      this.heapifyDown(0);
    }

    return minValue;
  }

  // Move the element at the given index down the heap
  heapifyDown(index) {
    const leftChildIndex = this.getLeftChildIndex(index);
    const rightChildIndex = this.getRightChildIndex(index);

    let minIndex = index;
    if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[minIndex]) {
      minIndex = leftChildIndex;
    }
    if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[minIndex]) {
      minIndex = rightChildIndex;
    }

    if (minIndex !== index) {
      this.swap(minIndex, index);
      this.heapifyDown(minIndex);
    }
  }
}
class PriorityQueue {
  constructor() {
    this.heap = new BinaryHeap();
  }

  // Insert an element with a priority into the priority queue
  enqueue(value, priority) {
    this.heap.insert({ value, priority });
  }

  // Remove and return the element with the highest priority from the priority queue
  dequeue() {
    const element = this.heap.removeMin();
    return element ? element.value : null;
  }
}
const priorityQueue = new PriorityQueue();

priorityQueue.enqueue("Task 1", 3);
priorityQueue.enqueue("Task 2", 1);
priorityQueue.enqueue("Task 3", 2);

console.log(priorityQueue.dequeue()); // Output: Task 2
console.log(priorityQueue.dequeue()); // Output: Task 3
console.log(priorityQueue.dequeue()); // Output: Task 1
