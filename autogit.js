class BinaryHeap {
  constructor() {
    this.heap = [];
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  insert(element) {
    this.heap.push(element);
    this.bubbleUp(this.heap.length - 1);
  }

  remove() {
    if (this.isEmpty()) {
      return null;
    }

    const minElement = this.heap[0];
    const lastElement = this.heap.pop();

    if (!this.isEmpty()) {
      this.heap[0] = lastElement;
      this.sinkDown(0);
    }

    return minElement;
  }

  bubbleUp(index) {
    const element = this.heap[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];

      if (element >= parent) {
        break;
      }

      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  sinkDown(index) {
    const length = this.heap.length;
    const element = this.heap[index];

    while (true) {
      let smallestChildIndex = null;

      const leftChildIndex = index * 2 + 1;
      const rightChildIndex = index * 2 + 2;
  
      if (leftChildIndex < length) {
        const leftChild = this.heap[leftChildIndex];
        if (leftChild < element) {
          smallestChildIndex = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        const rightChild = this.heap[rightChildIndex];
        if (
          (smallestChildIndex === null && rightChild < element) ||
          (smallestChildIndex !== null && rightChild < this.heap[smallestChildIndex])
        ) {
          smallestChildIndex = rightChildIndex;
        }
      }

      if (smallestChildIndex === null) {
        break;
      }

      this.swap(index, smallestChildIndex);
      index = smallestChildIndex;
    }
  }

  swap(i, j) {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }
}
class PriorityQueue {
  constructor() {
    this.binaryHeap = new BinaryHeap();
  }

  isEmpty() {
    return this.binaryHeap.isEmpty();
  }

  enqueue(element, priority) {
    const item = { element, priority };
    this.binaryHeap.insert(item);
  }

  dequeue() {
    const minItem = this.binaryHeap.remove();
    return minItem ? minItem.element : null;
  }
}
const priorityQueue = new PriorityQueue();

priorityQueue.enqueue("Task 1", 5);  // Enqueue with priority 5
priorityQueue.enqueue("Task 2", 3);  // Enqueue with priority 3
priorityQueue.enqueue("Task 3", 8);  // Enqueue with priority 8

console.log(priorityQueue.dequeue()); // Dequeue the highest priority task (Task 2)
console.log(priorityQueue.dequeue()); // Dequeue the next highest priority task (Task 1)
console.log(priorityQueue.dequeue()); // Dequeue the remaining task (Task 3)
console.log(priorityQueue.dequeue()); // No more tasks, returns null
