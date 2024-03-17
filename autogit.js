class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  // Function to maintain the heap property after inserting an element
  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index].priority < this.heap[parentIndex].priority) {
        [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  // Function to maintain the heap property after extracting the highest priority element
  bubbleDown() {
    let index = 0;
    while (index * 2 + 1 < this.heap.length) {
      let leftChild = index * 2 + 1;
      let rightChild = index * 2 + 2;
      let minChild = rightChild < this.heap.length && this.heap[rightChild].priority < this.heap[leftChild].priority ? rightChild : leftChild;

      if (this.heap[index].priority > this.heap[minChild].priority) {
        [this.heap[index], this.heap[minChild]] = [this.heap[minChild], this.heap[index]];
        index = minChild;
      } else {
        break;
      }
    }
  }

  // Function to add an element to the priority queue
  enqueue(element, priority) {
    this.heap.push({ element, priority });
    this.bubbleUp();
  }

  // Function to remove and return the highest priority element from the priority queue
  dequeue() {
    if (this.heap.length === 0) {
      return null;
    }

    const highestPriority = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();

    return highestPriority.element;
  }

  // Function to check if the priority queue is empty
  isEmpty() {
    return this.heap.length === 0;
  }
}
const priorityQueue = new PriorityQueue();

priorityQueue.enqueue("Task 1", 3);
priorityQueue.enqueue("Task 2", 1);
priorityQueue.enqueue("Task 3", 2);

while (!priorityQueue.isEmpty()) {
  console.log(priorityQueue.dequeue());
}
Task 2
Task 3
Task 1
