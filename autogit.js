class BinaryHeap {
  constructor() {
    this.heap = [];
  }
  
  isEmpty() {
    return this.heap.length === 0;
  }
  
  enqueue(value, priority) {
    const node = { value, priority };
    this.heap.push(node);
    this.bubbleUp(this.heap.length - 1);
  }
  
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const min = this.heap[0];
    const lastNode = this.heap.pop();
    
    if (!this.isEmpty()) {
      this.heap[0] = lastNode;
      this.sinkDown(0);
    }
    
    return min.value;
  }
  
  bubbleUp(index) {
    const node = this.heap[index];
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];
      
      if (node.priority >= parent.priority) {
        break;
      }
      
      this.heap[parentIndex] = node;
      this.heap[index] = parent;
      index = parentIndex;
    }
  }
  
  sinkDown(index) {
    const length = this.heap.length;
    const node = this.heap[index];
    
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swapIndex = null;
      
      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild.priority < node.priority) {
          swapIndex = leftChildIndex;
        }
      }
      
      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swapIndex === null && rightChild.priority < node.priority) ||
          (swapIndex !== null && rightChild.priority < leftChild.priority)
        ) {
          swapIndex = rightChildIndex;
        }
      }
      
      if (swapIndex === null) {
        break;
      }
      
      this.heap[index] = this.heap[swapIndex];
      this.heap[swapIndex] = node;
      index = swapIndex;
    }
  }
}
const priorityQueue = new BinaryHeap();

priorityQueue.enqueue('Task 1', 3);
priorityQueue.enqueue('Task 2', 1);
priorityQueue.enqueue('Task 3', 2);

console.log(priorityQueue.dequeue()); // Output: Task 2
console.log(priorityQueue.dequeue()); // Output: Task 3
console.log(priorityQueue.dequeue()); // Output: Task 1
console.log(priorityQueue.dequeue()); // Output: null
