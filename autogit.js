class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  enqueue(item, priority) {
    const node = { item, priority };
    this.heap.push(node);
    this.bubbleUp();
  }

  dequeue() {
    const min = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.sinkDown();
    }
    return min;
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    const node = this.heap[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.heap[parentIndex];
      if (node.priority >= parent.priority) {
        break;
      }
      this.heap[parentIndex] = node;
      this.heap[index] = parent;
      index = parentIndex;
    }
  }

  sinkDown() {
    let index = 0;
    const length = this.heap.length;
    const node = this.heap[0];
    while (true) {
      let leftChildIdx = 2 * index + 1;
      let rightChildIdx = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.heap[leftChildIdx];
        if (leftChild.priority < node.priority) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.heap[rightChildIdx];
        if (
          (swap === null && rightChild.priority < node.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;

      this.heap[index] = this.heap[swap];
      this.heap[swap] = node;
      index = swap;
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  peek() {
    if (this.heap.length > 0) {
      return this.heap[0];
    }
    return null;
  }

  size() {
    return this.heap.length;
  }
}

// Example usage:

const pq = new PriorityQueue();
pq.enqueue("A", 3);
pq.enqueue("B", 1);
pq.enqueue("C", 2);

console.log(pq.dequeue()); // { item: 'B', priority: 1 }
console.log(pq.dequeue()); // { item: 'C', priority: 2 }
console.log(pq.dequeue()); // { item: 'A', priority: 3 }
console.log(pq.dequeue()); // null
