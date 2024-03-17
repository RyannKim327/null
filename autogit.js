class PriorityQueue {
  constructor() {
    this.heap = [];
  }
  
  enqueue(value, priority) {
    const node = { value, priority };
    this.heap.push(node);
    this.bubbleUp();
  }
  
  dequeue() {
    const min = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.bubbleDown();
    }
    return min.value;
  }
  
  bubbleUp() {
    let index = this.heap.length - 1;
    const node = this.heap[index];
    
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.heap[parentIndex];
      
      if (node.priority >= parent.priority) break;
      
      this.heap[parentIndex] = node;
      this.heap[index] = parent;
      index = parentIndex;
    }
  }
  
  bubbleDown() {
    let index = 0;
    const length = this.heap.length;
    const node = this.heap[0];
    
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;
      
      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild.priority < node.priority) {
          swap = leftChildIndex;
        }
      }
      
      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if ((swap === null && rightChild.priority < node.priority) ||
            (swap !== null && rightChild.priority < leftChild.priority)) {
          swap = rightChildIndex;
        }
      }
      
      if (swap === null) break;
      
      this.heap[index] = this.heap[swap];
      this.heap[swap] = node;
      index = swap;
    }
  }
}
const pq = new PriorityQueue();
pq.enqueue('task1', 3);
pq.enqueue('task2', 1);
pq.enqueue('task3', 2);

console.log(pq.dequeue()); // task2
console.log(pq.dequeue()); // task3
console.log(pq.dequeue()); // task1
