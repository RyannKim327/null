class PriorityQueue {
  constructor() {
    this.heap = [];
  }
}
getParentIndex(index) {
  return Math.floor((index - 1) / 2);
}
getLeftChildIndex(index) {
  return 2 * index + 1;
}
getRightChildIndex(index) {
  return 2 * index + 2;
}
swap(index1, index2) {
  [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
}
enqueue(value, priority) {
  const element = { value, priority };
  this.heap.push(element);
  this.bubbleUp();
}
bubbleUp() {
  let index = this.heap.length - 1;
  while (index > 0) {
    const parentIndex = this.getParentIndex(index);
    if (this.heap[index].priority <= this.heap[parentIndex].priority) break;
    this.swap(index, parentIndex);
    index = parentIndex;
  }
}
dequeue() {
  if (this.heap.length === 0) return null;
  if (this.heap.length === 1) return this.heap.pop().value;

  const maxValue = this.heap[0].value;
  this.heap[0] = this.heap.pop();
  this.sinkDown(0);
  return maxValue;
}
sinkDown(index) {
  const leftChildIndex = this.getLeftChildIndex(index);
  const rightChildIndex = this.getRightChildIndex(index);
  const length = this.heap.length;
  let largestIndex = index;

  if (leftChildIndex < length && this.heap[leftChildIndex].priority > this.heap[largestIndex].priority) {
    largestIndex = leftChildIndex;
  }

  if (rightChildIndex < length && this.heap[rightChildIndex].priority > this.heap[largestIndex].priority) {
    largestIndex = rightChildIndex;
  }

  if (largestIndex !== index) {
    this.swap(index, largestIndex);
    this.sinkDown(largestIndex);
  }
}
