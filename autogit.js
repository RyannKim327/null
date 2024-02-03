class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return index * 2 + 1;
  }

  getRightChildIndex(index) {
    return index * 2 + 2;
  }

  enqueue(value, priority) {
    const element = { value, priority };
    this.heap.push(element);

    let currentIndex = this.heap.length - 1;
    while (
      currentIndex > 0 &&
      this.heap[currentIndex].priority < this.heap[this.getParentIndex(currentIndex)].priority
    ) {
      const parentIndex = this.getParentIndex(currentIndex);
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    if (this.heap.length === 1) {
      return this.heap.pop().value;
    }

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();

    let currentIndex = 0;
    while (true) {
      const leftChildIndex = this.getLeftChildIndex(currentIndex);
      const rightChildIndex = this.getRightChildIndex(currentIndex);

      let smallestChildIndex = leftChildIndex;
      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex].priority < this.heap[leftChildIndex].priority
      ) {
        smallestChildIndex = rightChildIndex;
      }

      if (
        leftChildIndex >= this.heap.length ||
        this.heap[currentIndex].priority <= this.heap[smallestChildIndex].priority
      ) {
        break;
      }

      this.swap(currentIndex, smallestChildIndex);
      currentIndex = smallestChildIndex;
    }

    return root.value;
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}
const priorityQueue = new PriorityQueue();

priorityQueue.enqueue('Task 1', 3);
priorityQueue.enqueue('Task 2', 1);
priorityQueue.enqueue('Task 3', 5);

console.log(priorityQueue.dequeue()); // Output: Task 2
console.log(priorityQueue.dequeue()); // Output: Task 1
console.log(priorityQueue.dequeue()); // Output: Task 3

console.log(priorityQueue.isEmpty()); // Output: true
