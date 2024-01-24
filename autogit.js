class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  // Insert an element into the priority queue
  enqueue(element, priority) {
    const node = { element, priority };
    this.heap.push(node);
    this.bubbleUp();
  }

  // Extract the element with highest priority
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const rootNode = this.heap[0];
    const lastNode = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = lastNode;
      this.bubbleDown();
    }

    return rootNode.element;
  }

  // Check if the priority queue is empty
  isEmpty() {
    return this.heap.length === 0;
  }

  // Move the last element up the heap to its correct position
  bubbleUp() {
    let index = this.heap.length - 1;
    const node = this.heap[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parentNode = this.heap[parentIndex];

      // If the node's priority is higher than its parent's priority, swap them
      if (node.priority <= parentNode.priority) {
        break;
      }

      this.heap[index] = parentNode;
      index = parentIndex;
    }

    this.heap[index] = node;
  }

  // Move the first element down the heap to its correct position
  bubbleDown() {
    let index = 0;

    while (index < this.heap.length) {
      const node = this.heap[index];
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let swapIndex = null;

      // Find the index of the child node with the highest priority
      if (leftChildIndex < this.heap.length) {
        const leftChildNode = this.heap[leftChildIndex];
        if (leftChildNode.priority > node.priority) {
          swapIndex = leftChildIndex;
        }
      }

      if (rightChildIndex < this.heap.length) {
        const rightChildNode = this.heap[rightChildIndex];
        if (
          (swapIndex === null && rightChildNode.priority > node.priority) ||
          (swapIndex !== null && rightChildNode.priority > this.heap[swapIndex].priority)
        ) {
          swapIndex = rightChildIndex;
        }
      }

      if (swapIndex === null) {
        break;
      }

      // Swap the node with its highest priority child node
      this.heap[index] = this.heap[swapIndex];
      this.heap[swapIndex] = node;
      index = swapIndex;
    }
  }
}
const priorityQueue = new PriorityQueue();

priorityQueue.enqueue("Task 1", 2);
priorityQueue.enqueue("Task 2", 1);
priorityQueue.enqueue("Task 3", 3);

console.log(priorityQueue.dequeue()); // Output: Task 3
console.log(priorityQueue.dequeue()); // Output: Task 1
console.log(priorityQueue.dequeue()); // Output: Task 2
console.log(priorityQueue.dequeue()); // Output: null (Queue is empty)
