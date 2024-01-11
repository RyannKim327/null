class BinaryHeap {
  constructor() {
    this.heap = [];
  }

  // Function to swap two elements in the heap
  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }

  // Function to get the parent index of a node
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  // Function to get the left child index of a node
  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  // Function to get the right child index of a node
  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  // Function to check if a node has a left child
  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.heap.length;
  }

  // Function to check if a node has a right child
  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.heap.length;
  }

  // Function to check if a node has a parent
  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }

  // Function to get the value of the left child of a node
  leftChild(index) {
    return this.heap[this.getLeftChildIndex(index)];
  }

  // Function to get the value of the right child of a node
  rightChild(index) {
    return this.heap[this.getRightChildIndex(index)];
  }

  // Function to get the value of the parent of a node
  parent(index) {
    return this.heap[this.getParentIndex(index)];
  }

  // Function to insert an element into the heap
  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  // Function to remove and return the min/max element from the heap
  remove() {
    if (this.heap.length === 0) {
      return null;
    }

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return min;
  }

  // Function to heapify up an element (used after insertion)
  heapifyUp() {
    let index = this.heap.length - 1;

    while (this.hasParent(index) && this.parent(index) > this.heap[index]) {
      const parentIndex = this.getParentIndex(index);
      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  // Function to heapify down an element (used after removal)
  heapifyDown() {
    let index = 0;

    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index);

      if (
        this.hasRightChild(index) &&
        this.rightChild(index) < this.leftChild(index)
      ) {
        smallerChildIndex = this.getRightChildIndex(index);
      }

      if (this.heap[index] < this.heap[smallerChildIndex]) {
        break;
      } else {
        this.swap(index, smallerChildIndex);
      }

      index = smallerChildIndex;
    }
  }
}
class PriorityQueue {
  constructor() {
    this.binaryHeap = new BinaryHeap();
  }

  // Function to add an element with priority to the priority queue
  enqueue(value, priority) {
    const element = { value, priority };
    this.binaryHeap.insert(element);
  }

  // Function to remove and return the element with the highest priority from the priority queue
  dequeue() {
    const element = this.binaryHeap.remove();
    return element ? element.value : null;
  }

  // Function to check if the priority queue is empty
  isEmpty() {
    return this.binaryHeap.heap.length === 0;
  }
}
// Create a new priority queue
const priorityQueue = new PriorityQueue();

// Add elements with priorities to the priority queue
priorityQueue.enqueue("Task 1", 3);
priorityQueue.enqueue("Task 2", 1);
priorityQueue.enqueue("Task 3", 2);

// Remove and print elements from the priority queue
while (!priorityQueue.isEmpty()) {
  const element = priorityQueue.dequeue();
  console.log(element);
}
Task 2
Task 3
Task 1
