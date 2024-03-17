class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  insert(item, priority) {
    const node = { item, priority };
    this.heap.push(node);
    this.bubbleUp();
  }

  remove() {
    if (this.heap.length === 0) {
      return null;
    }
    const node = this.heap[0];
    const lastNode = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = lastNode;
      this.heapify();
    }
    return node.item;
  }

  peek() {
    if (this.heap.length === 0) {
      return null;
    }
    return this.heap[0].item;
  }

  bubbleUp() {
    let currentIdx = this.heap.length - 1;
    let current = this.heap[currentIdx];
    while (currentIdx > 0) {
      let parentIdx = Math.floor((currentIdx - 1) / 2);
      let parent = this.heap[parentIdx];
      if (current.priority <= parent.priority) {
        break;
      }
      this.heap[parentIdx] = current;
      this.heap[currentIdx] = parent;
      currentIdx = parentIdx;
    }
  }

  heapify() {
    let currentIdx = 0;
    const length = this.heap.length;
    let current = this.heap[0];
    while (true) {
      let leftChildIdx = 2 * currentIdx + 1;
      let rightChildIdx = 2 * currentIdx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.heap[leftChildIdx];
        if (leftChild.priority > current.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.heap[rightChildIdx];
        if (
          (swap === null && rightChild.priority > current.priority) ||
          (swap !== null && rightChild.priority > leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) {
        break;
      }
      this.heap[currentIdx] = this.heap[swap];
      this.heap[swap] = current;
      currentIdx = swap;
    }
  }
}

// Example usage
const pq = new PriorityQueue();
pq.insert('Task 1', 3);
pq.insert('Task 2', 1);
pq.insert('Task 3', 2);
console.log(pq.peek()); // Output: Task 2
console.log(pq.remove()); // Output: Task 2
console.log(pq.peek()); // Output: Task 3
