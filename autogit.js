class PriorityQueue {
  constructor() {
    this.heap = [];
  }
  
  // Other methods will be implemented here
}
swap(i, j) {
  const temp = this.heap[i];
  this.heap[i] = this.heap[j];
  this.heap[j] = temp;
}
parentIndex(index) {
  return Math.floor((index - 1) / 2);
}
leftChildIndex(index) {
  return index * 2 + 1;
}
rightChildIndex(index) {
  return index * 2 + 2;
}
hasParent(index) {
  return this.parentIndex(index) >= 0;
}
hasLeftChild(index) {
  return this.leftChildIndex(index) < this.heap.length;
}
hasRightChild(index) {
  return this.rightChildIndex(index) < this.heap.length;
}
parent(index) {
  return this.heap[this.parentIndex(index)];
}
leftChild(index) {
  return this.heap[this.leftChildIndex(index)];
}
rightChild(index) {
  return this.heap[this.rightChildIndex(index)];
}
peek() {
  if (this.heap.length === 0) {
    throw new Error('Priority queue is empty');
  }
  return this.heap[0];
}
poll() {
  if (this.heap.length === 0) {
    throw new Error('Priority queue is empty');
  }

  const item = this.heap[0];
  this.heap[0] = this.heap[this.heap.length - 1];
  this.heap.pop();
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
    const parentIndex = this.parentIndex(index);
    this.swap(parentIndex, index);
    index = parentIndex;
  }
}
heapifyDown() {
  let index = 0;
  while (this.hasLeftChild(index)) {
    let smallerChildIndex = this.leftChildIndex(index);
    if (this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)) {
      smallerChildIndex = this.rightChildIndex(index);
    }

    if (this.heap[index] < this.heap[smallerChildIndex]) {
      break;
    } else {
      this.swap(index, smallerChildIndex);
    }
    index = smallerChildIndex;
  }
}
const pq = new PriorityQueue();
pq.add(5);
pq.add(3);
pq.add(8);
pq.add(2);
console.log(pq.poll());  // Output: 2
console.log(pq.poll());  // Output: 3
console.log(pq.poll());  // Output: 5
console.log(pq.poll());  // Output: 8
