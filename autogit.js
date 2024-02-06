class BinaryHeap {
  constructor() {
    this.heap = [];
  }

  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }
  
  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.heap.length;
  }
  
  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.heap.length;
  }

  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }

  leftChild(index) {
    return this.heap[this.getLeftChildIndex(index)];
  }
  
  rightChild(index) {
    return this.heap[this.getRightChildIndex(index)];
  }

  parent(index) {
    return this.heap[this.getParentIndex(index)];
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }

  peek() {
    if (this.heap.length === 0) {
      throw new Error('Queue is empty');
    }
    return this.heap[0];
  }

  poll() {
    if (this.heap.length === 0) {
      throw new Error('Queue is empty');
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    const item = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return item;
  }

  add(item) {
    this.heap.push(item);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (this.hasParent(index) && this.parent(index) > this.heap[index]) {
      const parentIndex = this.getParentIndex(index);
      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  heapifyDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)) {
        smallerChildIndex = this.getRightChildIndex(index);
      }

      if (this.heap[index] < this.heap[smallerChildIndex]) {
        break;
      } else {
        this.swap(index, smallerChildIndex);
      }
      index = smallerChildIndex;
    }
  }
}
class PriorityQueue {
  constructor() {
    this.heap = new BinaryHeap();
  }
  
  isEmpty() {
    return this.heap.heap.length === 0;
  }
  
  peek() {
    return this.heap.peek();
  }
  
  enqueue(item) {
    this.heap.add(item);
  }
  
  dequeue() {
    return this.heap.poll();
  }
}
const queue = new PriorityQueue();
queue.enqueue(5);
queue.enqueue(3);
queue.enqueue(8);
queue.enqueue(1);

console.log(queue.dequeue()); // Output: 1
console.log(queue.dequeue()); // Output: 3
console.log(queue.dequeue()); // Output: 5
console.log(queue.dequeue()); // Output: 8
