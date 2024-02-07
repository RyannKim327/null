class BinaryHeap {
  constructor() {
    this.heap = [];
  }

  // Method to swap two elements in the heap
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  // Method to get the parent index of a node
  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  // Method to get the left child index of a node
  leftChildIndex(index) {
    return 2 * index + 1;
  }

  // Method to get the right child index of a node
  rightChildIndex(index) {
    return 2 * index + 2;
  }

  // Method to get the highest priority element from the queue
  peek() {
    return this.heap[0];
  }

  // Method to insert an element into the queue
  insert(element) {
    this.heap.push(element);
    this.bubbleUp(this.heap.length - 1);
  }

  // Method to maintain the heap property by moving an element up the heap
  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = this.parentIndex(index);
      if (this.heap[parentIndex] > this.heap[index]) {
        this.swap(parentIndex, index);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  // Method to remove the highest priority element from the queue
  remove() {
    if (this.heap.length === 0) {
      return null;
    }

    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const removedElement = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);
    return removedElement;
  }

  // Method to maintain the heap property by moving an element down the heap
  bubbleDown(index) {
    while (true) {
      const leftChildIndex = this.leftChildIndex(index);
      const rightChildIndex = this.rightChildIndex(index);
      let smallestChildIndex = index;

      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex] < this.heap[smallestChildIndex]
      ) {
        smallestChildIndex = leftChildIndex;
      }

      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] < this.heap[smallestChildIndex]
      ) {
        smallestChildIndex = rightChildIndex;
      }

      if (smallestChildIndex === index) {
        break;
      }

      this.swap(index, smallestChildIndex);
      index = smallestChildIndex;
    }
  }

  // Method to check if the queue is empty
  isEmpty() {
    return this.heap.length === 0;
  }

  // Method to get the size of the queue
  size() {
    return this.heap.length;
  }
}
// Create a new instance of BinaryHeap
const priorityQueue = new BinaryHeap();

// Insert elements into the priority queue
priorityQueue.insert(5);
priorityQueue.insert(2);
priorityQueue.insert(8);
priorityQueue.insert(3);

// Remove the highest priority element from the priority queue
const highestPriorityElement = priorityQueue.remove();
console.log(highestPriorityElement); // Output: 2

// Peek the highest priority element without removing it from the priority queue
const peekElement = priorityQueue.peek();
console.log(peekElement); // Output: 3

// Check if the priority queue is empty
const isEmpty = priorityQueue.isEmpty();
console.log(isEmpty); // Output: false

// Get the size of the priority queue
const queueSize = priorityQueue.size();
console.log(queueSize); // Output: 3
