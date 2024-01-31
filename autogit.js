class BinaryHeap {
  constructor() {
    this.heap = [];
  }

  push(value, priority) {
    const element = { value, priority };
    this.heap.push(element);
    this.heapifyUp();
  }

  pop() {
    if (this.heap.length === 0) {
      return null;
    }

    const highestPriorityElement = this.heap[0];
    const lastElement = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = lastElement;
      this.heapifyDown();
    }

    return highestPriorityElement.value;
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    const element = this.heap[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];

      if (element.priority >= parent.priority) {
        break;
      }

      this.heap[index] = parent;
      index = parentIndex;
    }

    this.heap[index] = element;
  }

  heapifyDown() {
    let index = 0;
    const element = this.heap[index];
    const length = this.heap.length;

    while (index < length) {
      const leftChildIndex = (2 * index) + 1;
      const rightChildIndex = (2 * index) + 2;
      let swapIndex = null;

      if (leftChildIndex < length) {
        const leftChild = this.heap[leftChildIndex];

        if (leftChild.priority < element.priority) {
          swapIndex = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        const rightChild = this.heap[rightChildIndex];

        if (
          (swapIndex === null && rightChild.priority < element.priority) ||
          (swapIndex !== null && rightChild.priority < this.heap[swapIndex].priority)
        ) {
          swapIndex = rightChildIndex;
        }
      }

      if (swapIndex === null) {
        break;
      }

      this.heap[index] = this.heap[swapIndex];
      this.heap[swapIndex] = element;
      index = swapIndex;
    }
  }
}
const priorityQueue = new BinaryHeap();
priorityQueue.push("Task 1", 3);
priorityQueue.push("Task 2", 2);
priorityQueue.push("Task 3", 1);

const firstTask = priorityQueue.pop();
console.log(firstTask); // Output: "Task 3"

const secondTask = priorityQueue.pop();
console.log(secondTask); // Output: "Task 2"

const thirdTask = priorityQueue.pop();
console.log(thirdTask); // Output: "Task 1"
