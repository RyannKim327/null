class Heap {
  constructor() {
    this.heap = [];
  }

  // get parent index of given index
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  // get left child index of given index
  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  // get right child index of given index
  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  // swap two elements in the heap
  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }

  // get the top (minimum or maximum) element of the heap
  peek() {
    return this.heap[0];
  }

  // check if the heap is empty
  isEmpty() {
    return this.heap.length === 0;
  }
}
class Heap {
  // ...

  // insert an element into the heap
  insert(value) {
    // add the value to the end of the heap
    this.heap.push(value);

    // heapify up to maintain the heap property
    this.heapifyUp(this.heap.length - 1);
  }

  // remove the top element from the heap
  remove() {
    if (this.isEmpty()) {
      return null;
    }

    // swap the top element with the last element
    this.swap(0, this.heap.length - 1);

    // remove the last element (the top element)
    const removed = this.heap.pop();

    // heapify down to maintain the heap property
    this.heapifyDown(0);

    return removed;
  }

  // perform heapify up operation
  heapifyUp(index) {
    let currentIndex = index;

    while (
      currentIndex > 0 &&
      this.heap[currentIndex] < this.heap[this.getParentIndex(currentIndex)]
    ) {
      const parentIndex = this.getParentIndex(currentIndex);
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex; // update currentIndex to parent index
    }
  }

  // perform heapify down operation
  heapifyDown(index) {
    let currentIndex = index;

    while (true) {
      const leftChildIndex = this.getLeftChildIndex(currentIndex);
      const rightChildIndex = this.getRightChildIndex(currentIndex);
      let smallerChildIndex = currentIndex;

      // compare the current element with its left child
      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex] < this.heap[smallerChildIndex]
      ) {
        smallerChildIndex = leftChildIndex;
      }

      // compare the smaller child with the right child
      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] < this.heap[smallerChildIndex]
      ) {
        smallerChildIndex = rightChildIndex;
      }

      // if the smaller child is the current element, stop
      if (smallerChildIndex === currentIndex) {
        break;
      }

      // swap the current element with the smaller child
      this.swap(currentIndex, smallerChildIndex);
      currentIndex = smallerChildIndex; // update currentIndex to smaller child index
    }
  }
}
class PriorityQueue {
  constructor() {
    this.heap = new Heap();
  }

  // insert an element with a priority into the priority queue
  enqueue(element, priority) {
    this.heap.insert({ element, priority });
  }

  // remove and return the element with the highest priority
  dequeue() {
    const top = this.heap.peek();
    this.heap.remove();
    return top;
  }

  // check if the priority queue is empty
  isEmpty() {
    return this.heap.isEmpty();
  }
}
const priorityQueue = new PriorityQueue();
priorityQueue.enqueue("Task 1", 3);
priorityQueue.enqueue("Task 2", 1);
priorityQueue.enqueue("Task 3", 2);

console.log(priorityQueue.dequeue()); // { element: 'Task 2', priority: 1 }
console.log(priorityQueue.dequeue()); // { element: 'Task 3', priority: 2 }
console.log(priorityQueue.dequeue()); // { element: 'Task 1', priority: 3 }
console.log(priorityQueue.isEmpty()); // true
