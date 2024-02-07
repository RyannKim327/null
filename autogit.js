class BinaryHeap {
  constructor() {
    this.heap = [];
  }

  insert(value, priority) {
    const element = { value, priority };
    this.heap.push(element);
    this.bubbleUp(this.heap.length - 1);
  }

  remove() {
    if (this.isEmpty()) {
      return null;
    }

    const root = this.heap[0];
    const lastElement = this.heap.pop();

    if (!this.isEmpty()) {
      this.heap[0] = lastElement;
      this.bubbleDown(0);
    }

    return root.value;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  bubbleUp(index) {
    const element = this.heap[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];

      // If the parent priority is greater or equal, break the loop
      if (parent.priority >= element.priority) {
        break;
      }

      this.heap[index] = parent;
      index = parentIndex;
    }

    this.heap[index] = element;
  }

  bubbleDown(index) {
    const element = this.heap[index];
    const length = this.heap.length;

    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let swapIndex = null;

      if (leftChildIndex < length) {
        const leftChild = this.heap[leftChildIndex];

        if (leftChild.priority > element.priority) {
          swapIndex = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        const rightChild = this.heap[rightChildIndex];

        if (
          (swapIndex === null && rightChild.priority > element.priority) ||
          (swapIndex !== null && rightChild.priority > this.heap[swapIndex].priority)
        ) {
          swapIndex = rightChildIndex;
        }
      }

      if (swapIndex === null) {
        break;
      }

      this.heap[index] = this.heap[swapIndex];
      index = swapIndex;
    }

    this.heap[index] = element;
  }
}
const pq = new BinaryHeap();

pq.insert("Task 1", 3);
pq.insert("Task 2", 1);
pq.insert("Task 3", 2);

console.log(pq.remove()); // Output: Task 2
console.log(pq.remove()); // Output: Task 3
console.log(pq.remove()); // Output: Task 1
console.log(pq.isEmpty()); // Output: true
