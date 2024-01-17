class BinaryHeap {
  constructor() {
    this.heap = [];
  }

  // Function to swap two elements in the heap
  swap(i, j) {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }

  // Function to get the index of the parent for a given index
  parent(index) {
    return Math.floor((index - 1) / 2);
  }

  // Function to get the index of the left child for a given index
  leftChild(index) {
    return 2 * index + 1;
  }

  // Function to get the index of the right child for a given index
  rightChild(index) {
    return 2 * index + 2;
  }

  // Function to check if a given index has a parent
  hasParent(index) {
    return this.parent(index) >= 0;
  }

  // Function to check if a given index has a left child
  hasLeftChild(index) {
    return this.leftChild(index) < this.heap.length;
  }

  // Function to check if a given index has a right child
  hasRightChild(index) {
    return this.rightChild(index) < this.heap.length;
  }

  // Function to retrieve the element with the highest priority from the heap
  peek() {
    if (this.heap.length === 0) {
      throw new Error('Heap is empty.');
    }
    return this.heap[0];
  }

  // Function to insert a new element with a priority into the heap
  insert(element) {
    this.heap.push(element);
    this.heapifyUp();
  }

  // Function to remove and return the element with the highest priority from the heap
  extractMax() {
    const max = this.peek();
    this.swap(0, this.heap.length - 1);
    this.heap.pop();
    this.heapifyDown();
    return max;
  }

  // Function to heapify the heap upwards
  heapifyUp() {
    let index = this.heap.length - 1;
    while (this.hasParent(index) && this.heap[index] > this.heap[this.parent(index)]) {
      this.swap(index, this.parent(index));
      index = this.parent(index);
    }
  }

  // Function to heapify the heap downwards
  heapifyDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.leftChild(index);
      if (
        this.hasRightChild(index) &&
        this.heap[this.rightChild(index)] > this.heap[this.leftChild(index)]
      ) {
        smallerChildIndex = this.rightChild(index);
      }

      if (this.heap[index] > this.heap[smallerChildIndex]) {
        break;
      } else {
        this.swap(index, smallerChildIndex);
      }

      index = smallerChildIndex;
    }
  }
}
// Creating a new instance of the BinaryHeap class
const priorityQueue = new BinaryHeap();

// Inserting elements with priorities
priorityQueue.insert({ element: 'Task 1', priority: 3 });
priorityQueue.insert({ element: 'Task 2', priority: 1 });
priorityQueue.insert({ element: 'Task 3', priority: 2 });

// Extracting the element with the highest priority
const highestPriorityTask = priorityQueue.extractMax();
console.log(highestPriorityTask); // Output: { element: 'Task 1', priority: 3 }
